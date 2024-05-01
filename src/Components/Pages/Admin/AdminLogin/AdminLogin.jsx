import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminLogin">
      <h1>Healthcare Portal</h1>
      <div className="form-wrapper">
        <form action="">
        <h2>Admin Login</h2>
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
