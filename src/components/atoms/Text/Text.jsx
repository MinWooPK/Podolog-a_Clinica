const Text = ({
  type = "p",
  children,
  className = "",
  color = "text-black",
  size = "text-base",
  weight = "font-normal",
  align = "text-left",
  font = "font-inter",
  ...props
}) => {
  const TextType = type;
  return (
    <TextType
      className={`${color} ${size} ${weight} ${align} ${font} ${className}`}
      {...props}
    >
      {children}
    </TextType>
  );
};

export default Text;
