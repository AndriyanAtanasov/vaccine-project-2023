import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm.js";

const RegisterFormKeys = {
  EMAIL: "email",
  USERNAME: "username",
  PASSWORD: "password",
  ConfirmPASSWORD: "password",
};
const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.EMAIL]: "",
    [RegisterFormKeys.USERNAME]: "",
    [RegisterFormKeys.PASSWORD]: "",
    [RegisterFormKeys.ConfirmPASSWORD]: "",
  });

  const [regWarningPassword, setRegWarningPassword] = useState(false);
  const onClickRegWarning = () => {
    if (values.password !== values.ConfirmPassword) {
      setRegWarningPassword(true);
    } else {
      setRegWarningPassword(false);
    }
  };
  const [regWarningEmail, setRegWarningEmail] = useState(false);
  const onClickRegEmail = () => {
    if (values.password !== values.email) {
      setRegWarningEmail(true);
    } else {
      setRegWarningEmail(false);
    }
  };

  return (
    <div className="coronata">
      <div className="content">
        <div className="container">
          <h1 className="mb-5">Register</h1>
          <div className="register-container">
            <form className="register-form" onSubmit={onSubmit}>
              <label htmlFor="username">First name:</label>
              <br />
              <input
                type="text"
                id="username"
                autoComplete="username"
                name="username"
                onChange={onChange}
                values={values[RegisterFormKeys.USERNAME]}
              />
              <br />
              <label htmlFor="email">Email address:</label>
              <br />
              {regWarningEmail && (
                <p style={{ color: "red" }}>
                  Invalid or already existing email address
                </p>
              )}
              <input
                type="email"
                id="email"
                autoComplete="email"
                name="email"
                onChange={onChange}
                values={values[RegisterFormKeys.EMAIL]}
              />
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              {regWarningPassword && (
                <p style={{ color: "red" }}>Password does not match</p>
              )}
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                name="password"
                onChange={onChange}
                values={values[RegisterFormKeys.PASSWORD]}
              />
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <br />
              <input
                type="password"
                id="ConfirmPassword"
                autoComplete="current-password"
                name="ConfirmPassword"
                onChange={onChange}
                values={values[RegisterFormKeys.ConfirmPASSWORD]}
              />
              <br />
              <br />
              <button
                className="read_more"
                type="submit"
                onClick={() => {
                  onClickRegWarning();
                  onClickRegEmail();
                }}
              >
                Register
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
      <div className="cevery_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
