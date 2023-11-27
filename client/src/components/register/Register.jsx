const Register = () => {
  return (
    <div className="coronata">
      <div className="content">
        <div className="container">
          <h1 className="mb-5">Register</h1>
          <div className="register-container">
            <form className="register-form">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                type="text"
                id="username"
                autoComplete="username"
                name="username"
              />
              <br />
              <label htmlFor="email">Email address:</label>
              <br />
              <input
                type="email"
                id="email"
                autoComplete="email"
                name="email"
              />
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                name="password"
              />
              <br />
              <br />
              <button className="read_more" type="submit">
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
