import {
  createContext,
  useContext,
  type ComponentType,
  type ReactElement,
} from "react";

export type ModalSize =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "full"
  | "fit";

export interface ModalData {
  content: ReactElement;
}

// Las props se infieren únicamente del componente que se abre.
export type ShowModal = <Props extends object>(
  Component: ComponentType<Props>,
  props: NoInfer<Props>,
  isVisibleClose?: boolean,
  size?: ModalSize,
  isBackIcon?: boolean,
) => void;

interface ModalContextType {
  showModal: ShowModal;
  hideModal: () => void;
  modal: ModalData | null;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
