import "./PatientLogin.css";

const PatientLogin = () =>{
    return (
        <div className="patientLogin">
            <div className="form-wrapper">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="userName">User Name : </label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password : </label>
                        <input type="password" />
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default PatientLogin;