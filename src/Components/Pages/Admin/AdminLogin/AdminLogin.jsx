import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminLogin">
      <div className="form-wrapper">
        <form action="">
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
