const Login = () => {
  return (
    <div className="coronata">
      <div className="content">
        <div className="container">
          <h1 className="mb-5">Login</h1>
          <div className="login-container">
            <form className="login-form">
              <label htmlFor="username">Username:</label>
              <br />
              <input type="text" id="username" /> <br />
              <label htmlFor="password">Password:</label> <br />
              <input type="password" id="password" /> <br />
              <br />
              <button className="read_more" type="submit">
                Login
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

export default Login;
