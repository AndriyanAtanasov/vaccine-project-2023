import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext.js";
import { Link } from "react-router-dom";

const LoginFormKeys = {
  EMAIL: "email",
  PASSWORD: "password",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.EMAIL]: "",
    [LoginFormKeys.PASSWORD]: "",
  });

  return (
    <div className="coronata">
      <div className="content">
        <div className="container">
          <h1 className="mb-5">Login</h1>
          <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                id="email"
                autoComplete="email"
                name={LoginFormKeys.EMAIL}
                onChange={onChange}
                value={values[LoginFormKeys.EMAIL]}
              />
              <br />
              <label htmlFor="password">Password:</label> <br />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                name={LoginFormKeys.PASSWORD}
                onChange={onChange}
                value={values[LoginFormKeys.PASSWORD]}
              />
              <br />
              <br />
              <button className="read_more" type="submit">
                Login
              </button>
            </form>
            <br />
            <p>
              Don't have an account ?
              <Link to={"/register"} style={{ color: "red" }}>
                {" "}
                Register here
              </Link>
            </p>
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

export default Login;
