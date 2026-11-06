import assert from "node:assert/strict";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import path from "node:path";
import ts from "typescript";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const configPath = path.join(projectRoot, "tsconfig.json");
const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
assert.equal(configFile.error, undefined);

const config = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  projectRoot,
);
assert.deepEqual(config.errors, []);
assert.equal(config.options.strict, true);

// Cada caso se comprueba con el contrato y los componentes reales, sin ejecutar
// sus servicios ni suprimir los diagnósticos de las llamadas incorrectas.
const imports = `
import type { ComponentProps } from "react";
import type { ShowModal } from "../src/context/ModalContext";
import ModalCreateShop from "../src/components/molecules/ModalCreateShop/ModalCreateShop";
import ModalEditShop from "../src/components/molecules/ModalEditShop/ModalEditShop";
import ModalEditUser from "../src/components/molecules/ModalEditUser/ModalEditUser";
import ModalSuccess from "../src/components/molecules/ModalSuccess/ModalSuccess";

declare const showModal: ShowModal;
declare const shop: ComponentProps<typeof ModalEditShop>["shop"];
declare const user: ComponentProps<typeof ModalEditUser>["user"];
const callback = () => {};
`;

const cases = [
  {
    name: "accepts all affected modals with their required props and callbacks",
    body: `
showModal(ModalCreateShop, { onCreated: callback, onClose: callback });
showModal(ModalEditShop, { shop, onUpdated: callback, onClose: callback });
showModal(ModalEditUser, { user, onUpdated: callback });
showModal(ModalSuccess, { title: "Saved", text: "Updated successfully" });
`,
  },
  {
    name: "accepts optional confirmation props, every status and display options",
    body: `
showModal(ModalSuccess, {
  title: "Saved", text: "Updated", type: "success",
  onConfirm: callback, onClose: callback,
}, false, "small", true);
showModal(ModalSuccess, { title: "Error", text: "Try again", type: "error" });
showModal(ModalSuccess, { title: "Warning", text: "Check data", type: "warning" });
`,
  },
  {
    name: "rejects missing onCreated",
    body: "showModal(ModalCreateShop, { onClose: callback });",
    diagnostic: 2345,
    message: /onCreated/,
  },
  {
    name: "rejects missing onClose",
    body: "showModal(ModalCreateShop, { onCreated: callback });",
    diagnostic: 2345,
    message: /onClose/,
  },
  {
    name: "rejects callbacks requiring arguments that the modal does not supply",
    body: `showModal(ModalCreateShop, {
  onCreated: (createdId: string) => createdId, onClose: callback,
});`,
    diagnostic: 2322,
    message: /Target signature provides too few arguments/,
  },
  {
    name: "rejects a missing shop",
    body: "showModal(ModalEditShop, { onUpdated: callback, onClose: callback });",
    diagnostic: 2345,
    message: /shop/,
  },
  {
    name: "rejects an invalid shop value",
    body: `showModal(ModalEditShop, {
  shop: "invalid", onUpdated: callback, onClose: callback,
});`,
    diagnostic: 2322,
    message: /ShopItem/,
  },
  {
    name: "rejects a missing user",
    body: "showModal(ModalEditUser, { onUpdated: callback });",
    diagnostic: 2345,
    message: /user/,
  },
  {
    name: "rejects a missing onUpdated callback",
    body: "showModal(ModalEditUser, { user });",
    diagnostic: 2345,
    message: /onUpdated/,
  },
  {
    name: "rejects a missing confirmation title",
    body: 'showModal(ModalSuccess, { text: "Updated" });',
    diagnostic: 2345,
    message: /title/,
  },
  {
    name: "rejects missing confirmation text",
    body: 'showModal(ModalSuccess, { title: "Saved" });',
    diagnostic: 2345,
    message: /text/,
  },
  {
    name: "rejects unsupported confirmation status values",
    body: 'showModal(ModalSuccess, { title: "Saved", text: "Updated", type: "info" });',
    diagnostic: 2322,
    message: /info/,
  },
  {
    name: "rejects an invalid optional callback",
    body: 'showModal(ModalSuccess, { title: "Saved", text: "Updated", onConfirm: "confirm" });',
    diagnostic: 2322,
    message: /not assignable/,
  },
  {
    name: "rejects unknown props instead of widening the component contract",
    body: 'showModal(ModalSuccess, { title: "Saved", text: "Updated", unknown: true });',
    diagnostic: 2353,
    message: /unknown/,
  },
  {
    name: "requires the props argument for a modal with required fields",
    body: "showModal(ModalSuccess);",
    diagnostic: 2554,
    message: /Expected 2-5 arguments/,
  },
];

const fixtures = new Map(
  cases.map((scenario, index) => [
    path.join(projectRoot, "tests", `modal-types-${index}.tsx`),
    imports + scenario.body,
  ]),
);
const host = ts.createCompilerHost(config.options);
const readSource = host.getSourceFile.bind(host);
const fileExists = host.fileExists.bind(host);
const readFile = host.readFile.bind(host);

host.fileExists = (fileName) => fixtures.has(fileName) || fileExists(fileName);
host.readFile = (fileName) => fixtures.get(fileName) ?? readFile(fileName);
host.getSourceFile = (fileName, languageVersion, onError, shouldCreateNewSourceFile) => {
  const source = fixtures.get(fileName);
  return source === undefined
    ? readSource(fileName, languageVersion, onError, shouldCreateNewSourceFile)
    : ts.createSourceFile(fileName, source, languageVersion, true, ts.ScriptKind.TSX);
};

const declarations = config.fileNames.filter((fileName) => fileName.endsWith(".d.ts"));
const program = ts.createProgram({
  rootNames: [...declarations, ...fixtures.keys()],
  options: config.options,
  host,
});
const diagnostics = ts.getPreEmitDiagnostics(program);

test("the real imported modal components and project declarations compile", () => {
  const sourceDiagnostics = diagnostics.filter(
    (diagnostic) => !diagnostic.file || !fixtures.has(diagnostic.file.fileName),
  );
  assert.deepEqual(
    sourceDiagnostics.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")),
    [],
  );
});

for (const [index, scenario] of cases.entries()) {
  test(scenario.name, () => {
    const fixtureName = path.join(projectRoot, "tests", `modal-types-${index}.tsx`);
    const actual = diagnostics.filter((diagnostic) => diagnostic.file?.fileName === fixtureName);

    if (scenario.diagnostic === undefined) {
      assert.deepEqual(
        actual.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")),
        [],
      );
      return;
    }

    assert.equal(actual.length, 1, "The invalid call must produce exactly one diagnostic");
    assert.equal(actual[0].code, scenario.diagnostic);
    assert.match(
      ts.flattenDiagnosticMessageText(actual[0].messageText, "\n"),
      scenario.message,
    );
  });
}
