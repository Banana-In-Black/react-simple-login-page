import React from "react";
import styles from "./styles.module.scss";

const Input = ({
  icon,
  type,
  placeholder,
  rightBlock: RightBlock,
  rightBlockWidth,
  ...props
}) => {
  return (
    <div className={styles.inputBox}>
      <span className={styles.icon}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        style={RightBlock ? { paddingRight: rightBlockWidth } : {}}
        {...props}
      />
      <label className={styles.placeholder}>{placeholder}</label>
      {RightBlock && <RightBlock className={styles.rightBlock} />}
    </div>
  );
};

export default Input;
export { default as EmailInput } from "./Email";
export { default as PasswordInput } from "./Password";
