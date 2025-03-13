import React from "react";
import PropTypes from "prop-types";

const buttonStyles = {
    primary: {
      backgroundColor: "#111111", 
      color: "#FCFCFC", 
      fontSize: "1rem",
      fontWeight: "700",
      padding: "12px 24px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      textAlign: "center",
      display: "inline-block",
      transition: "background-color 0.3s ease",
    },
  };

  
  const PrimaryButton = ({ children, onClick, className, ...props }) => {
    return (
      <button
        style={buttonStyles.primary}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  
  export default PrimaryButton;
  