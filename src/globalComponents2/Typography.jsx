import React from "react";
import PropTypes from "prop-types";

const typography = {
  pageTitle: {
    fontSize: "2rem", // 32px
    fontWeight: 700,
    lineHeight: "2.75",
    fontFamily: "'Nunito Sans', sans-serif",
  },
  componentTitle: {
    fontSize: "1.25rem", // 20px
    fontWeight: 500,
    lineHeight: "1.4375rem",
    fontFamily: "'Roboto', sans-serif",
  },
  componentSubTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.18755rem",
    fontFamily: "'Roboto', sans-serif",
  },
  importantText: {
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: "2.0625rem",
    fontFamily: "'Roboto', sans-serif",
  },
  regularText: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.1875rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#646464",
  },
  subtleText: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.375rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#646464",
  },
};

const createTypographyComponent = (variant, defaultElement) => {
  const Component = ({ as: Tag = defaultElement, className = "", children }) => (
    <Tag style={typography[variant]} className={className}>
      {children}
    </Tag>
  );

  Component.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  return Component;
};

// Individual Typography Components
export const PageTitle = createTypographyComponent("pageTitle", "h1");
export const ComponentTitle = createTypographyComponent("componentTitle", "h2");
export const ComponentSubTitle = createTypographyComponent("componentSubTitle", "h3");
export const ImportantText = createTypographyComponent("importantText", "strong");
export const RegularText = createTypographyComponent("regularText", "p");
export const SubtleText = createTypographyComponent("subtleText", "p");
