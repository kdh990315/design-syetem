interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  onClick = () => {},
  size = "md",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const sizeClass = {
    sm: "h-8 text-sm px-2 py-1",
    md: "h-10 text-base px-4 py-2",
    lg: "h-12 text-lg px-6 py-3",
  };

  const variantClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "bg-white text-black border border-gray-500 hover:bg-gray-100",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md ${sizeClass[size]} ${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
