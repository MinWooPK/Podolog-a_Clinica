import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl
        shadow
        transition-all
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
