import React, { useRef } from "react";
import { v4 } from "uuid";

const Group = ({ children, value, onChange, ...props }) => {
  const nameRef = useRef(`RadioGroupName-${v4()}`);
  return (
    <div {...props}>
      {React.Children.map(children, button =>
        React.cloneElement(button, {
          name: nameRef.current,
          checked: value == button.props.value,
          onChange: e => onChange(e.target.value)
        })
      )}
    </div>
  );
};

export default Group;
