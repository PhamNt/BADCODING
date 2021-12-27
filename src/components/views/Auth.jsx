import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

const Auth = ({ authRoute }) => {
    let body

    body = (
        <>
            sangdethuonggg
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <RegisterForm />}
        </>
    )
    return (
        <div className="landing">
            <div className="title">
                <h4>Welcome to Ctaw</h4>
                {body}
            </div>
        </div>
    )
}

export default Auth;