import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { IoIosClose } from "react-icons/io";

// --------------------------------------------------
// Types
// --------------------------------------------------

type ModalSize =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "full"
  | "fit";

type ModalProps = Record<string, unknown>;

interface ModalData {
  Component: ComponentType<ModalProps>;
  props: ModalProps;
}

interface ModalContextType {
  showModal: (
    Component: ComponentType<ModalProps>,
    props?: ModalProps,
    isVisibleClose?: boolean,
    size?: ModalSize,
    isBackIcon?: boolean,
  ) => void;
  hideModal: () => void;
  modal: ModalData | null;
}

// --------------------------------------------------
// Context
// --------------------------------------------------

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// --------------------------------------------------
// Hook
// --------------------------------------------------

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

// --------------------------------------------------
// Provider
// --------------------------------------------------

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalData | null>(null);

  const [size, setSize] = useState<ModalSize>("large");

  const [isVisibleClose, setIsVisibleClose] = useState(true);

  const [isBackIcon, setIsBackIcon] = useState(false);

  // --------------------------------------------------
  // Show modal
  // --------------------------------------------------

  const showModal = (
    Component: ComponentType<ModalProps>,
    props: ModalProps = {},
    isVisibleClose: boolean = true,
    size: ModalSize = "large",
    isBackIcon: boolean = false,
  ): void => {
    setModal({
      Component,
      props,
    });

    setIsVisibleClose(isVisibleClose);
    setSize(size);
    setIsBackIcon(isBackIcon);
  };

  // --------------------------------------------------
  // Hide modal
  // --------------------------------------------------

  const hideModal = (): void => {
    setModal(null);
  };

  // --------------------------------------------------
  // Escape key
  // --------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        hideModal();
      }
    };

    if (modal !== null) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal]);

  // --------------------------------------------------
  // Modal size
  // --------------------------------------------------

  const getModalSizeClass = (): string => {
    switch (size) {
      case "xsmall":
        return "max-w-full md:max-w-[420px]";

      case "small":
        return "max-w-full md:max-w-[520px]";

      case "medium":
        return "max-w-full md:max-w-[520px]";

      case "large":
        return "max-w-full md:max-w-[600px]";

      case "xlarge":
        return "max-w-full md:max-w-[800px]";

      case "xxlarge":
        return "max-w-full md:max-w-[1100px]";

      case "full":
        return "max-w-full";

      case "fit":
        return "max-w-fit";

      default:
        return "max-w-full md:max-w-[600px]";
    }
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        modal,
      }}
    >
      {children}

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className={`
              relative
              bg-white
              rounded-lg
              shadow-lg
              px-10
              py-6
              w-full
              ${getModalSizeClass()}
              overflow-y-auto
            `}
          >
            {/* Back button */}
            {isBackIcon && (
              <button
                type="button"
                onClick={hideModal}
                className="absolute left-4 top-4"
                aria-label="Volver"
              >
                {/* Aquí puedes poner tu BackArrow */}
              </button>
            )}

            {/* Close button */}
            {isVisibleClose && (
              <button
                type="button"
                onClick={hideModal}
                className="absolute right-4 top-4"
                aria-label="Cerrar"
              >
                <IoIosClose size={28} />
              </button>
            )}

            {/* Dynamic modal component */}
            <modal.Component {...modal.props} />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
