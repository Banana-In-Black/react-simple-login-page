import React from "react";
import { RadioButton, RadioGroup } from "../index";
import styles from "./styles.module.scss";

const ImageRadioButtons = ({ data, ...props }) => (
  <RadioGroup className={styles.radioGroup} {...props}>
    {data.map(button => (
      <RadioButton
        key={button.text}
        value={button.text}
        containerClassName={styles.radioButton}
      >
        <div className={styles.radioButtonImageBox}>
          <div className={styles.svgResizer}>
            <button.image width={"100%"} height={"100%"} />
          </div>
          <span>{button.text}</span>
        </div>
      </RadioButton>
    ))}
  </RadioGroup>
);

export default ImageRadioButtons;
