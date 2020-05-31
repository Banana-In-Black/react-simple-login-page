import React from "react";
import Input from "./index";
import styles from "./styles.module.scss";
import classnames from "classnames";

const RightBlock = ({ className, ...props }) => {
  const labelClasses = classnames(styles.linkForgot, className);
  return (
    <a href="#" className={labelClasses} {...props}>
      Forgot?
    </a>
  );
};

const Password = props => {
  return (
    <Input
      icon="🔒"
      type="password"
      placeholder="Password"
      rightBlock={RightBlock}
      rightBlockWidth="80px"
      {...props}
    />
  );
};

export default Password;
