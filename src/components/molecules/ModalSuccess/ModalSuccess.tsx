import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdError, MdWarning } from "react-icons/md";
import { useTranslation } from "react-i18next";

// atoms
import Text from "@atoms/Text";
import Button from "@atoms/Button";

// contexts
import { useModal } from "@context/ModalContext";

export type ModalType = "success" | "error" | "warning";

export interface ModalSuccessProps {
  title: string;
  text: string;
  onConfirm?: () => void;
  onClose?: () => void;
  type?: ModalType;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({
  title,
  text,
  onConfirm,
  onClose,
  type = "success",
}) => {
  const { hideModal } = useModal();
  const { t } = useTranslation("");

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      hideModal();
    }
  };

  const renderIcon = () => {
    switch (type) {
      case "error":
        return (
          <div className="text-6xl mt-2 text-red-500">
            <MdError />
          </div>
        );

      case "warning":
        return (
          <div className="text-6xl mt-2 text-yellow-500">
            <MdWarning />
          </div>
        );

      case "success":
      default:
        return (
          <div className="text-6xl mt-2 text-green-500">
            <FaCircleCheck />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={handleClose}
      >
        <IoClose size={24} />
      </div>

      {renderIcon()}

      <div className="mt-10 space-y-3 items-center flex flex-col w-full px-4">
        <Text
          size="text-2xl"
          weight="font-bold"
          color="text-black1"
          align="text-center"
          font="font-inter"
          className="w-full"
        >
          {title}
        </Text>

        <Text
          size="text-md"
          color="text-gray2"
          align="text-center"
          className="w-full"
        >
          {text}
        </Text>
      </div>

      <div className="mt-10 w-full flex gap-2 px-8">
        <Button
          variant="primary"
          onClick={onConfirm}
          size="sm"
          className="w-full h-10 flex justify-center items-center cursor-pointer"
        >
          {t("common.accept", "Aceptar")}
        </Button>
        <Button
          variant="secondary"
          onClick={onClose}
          size="sm"
          className="w-full h-10 flex justify-center items-center cursor-pointer"
        >
          {t("common.cancel", "Cancelar")}
        </Button>
      </div>
    </div>
  );
};

export default ModalSuccess;
