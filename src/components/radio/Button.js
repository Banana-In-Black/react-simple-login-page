import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

const Button = ({ children, containerClassName, ...props }) => {
  const containerClasses = classnames(containerClassName, styles.container, {
    [styles.checked]: props.checked
  });
  return (
    <div className={containerClasses}>
      <input type="radio" {...props} />
      {children}
    </div>
  );
};

export default Button;
