import { Link } from "react-router-dom";

// Helper to generate Bootstrap button classes
const getButtonClass = (variant) => {
  return `btn button button-${variant}`;
};

const Button = ({
  to,
  href,
  children,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  ...rest
}) => {
  const btnClass = `${getButtonClass(variant)} ${className}`.trim();

  if (to) {
    // React Router navigation
    return (
      <Link to={to} className={btnClass} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    // External link
    return (
      <a href={href} className={btnClass} {...rest}>
        {children}
      </a>
    );
  }

  // Regular button
  return (
    <button type={type} onClick={onClick} className={btnClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
