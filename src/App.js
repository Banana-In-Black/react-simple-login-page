import React, { useState } from "react";
import styles from "./styles.module.scss";
import "./common.scss";
import ImageRadioButtons from "./components/radio/ImageRadioButtons";
import { ReactComponent as ImgDoctor } from "./assets/img_doctor_90@3x.svg";
import { ReactComponent as ImgPatient } from "./assets/img_patient_90@3x.svg";
import { ReactComponent as BackgroundTown } from "./assets/img_town_370x170@3x.svg";
import { EmailInput, PasswordInput } from "./components/input";

const accountTypes = [
  {
    image: ImgDoctor,
    text: "Doctor"
  },
  {
    image: ImgPatient,
    text: "Patient"
    // },
    // {
    //   image: ImgPatient,
    //   text: "Patient2"
    // },
    // {
    //   image: ImgPatient,
    //   text: "Patient3"
  }
];

const verifyPassword = (username, password) => {
  let less, more;
  if (username.length > password.length) {
    less = password;
    more = username;
  } else {
    less = username;
    more = password;
  }

  if (Math.max(less.length, more.length) < 5) {
    return true;
  }

  for (let i = 0; i <= less.length - 6; i++) {
    const match = less.slice(i, i + 6);
    if (more.indexOf(match) > -1) {
      return false;
    }
  }

  return true;
};

export default function App() {
  const [accountType, setAccountType] = useState(accountTypes[0].text);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showIsPasswordValid, setShowIsPasswordValid] = useState(false);
  return (
    <div className={styles.app}>
      <h3 className={styles.accountTypeText}>Choose Account Type</h3>
      <ImageRadioButtons
        data={accountTypes}
        value={accountType}
        onChange={setAccountType}
      />
      <p className={styles.loginDesc}>
        Hello doctor!
        <br />
        Please fill out the form below to get started
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          setShowIsPasswordValid(true);
        }}
      >
        <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
        <PasswordInput
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            setShowIsPasswordValid(false);
          }}
        />
        <div className={styles.loginButtonBox}>
          <span>
            No account? <a href="#">Signup</a>
          </span>
          <button type="submit" className="primary">
            Login
          </button>
          {showIsPasswordValid && (
            <span className={styles.verificationStatus}>
              {verifyPassword(email, password) ? "Success" : "Failed"}
            </span>
          )}
        </div>
      </form>
      <BackgroundTown className={styles.background} />
    </div>
  );
}
