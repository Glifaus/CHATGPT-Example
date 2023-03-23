import { useState, useEffect } from "react"
import { usePostLoginMutation, usePostRegisterMutation } from "@/state/api"

export const Login = ({setUser,setSecret}) => {
    const [isRegister, setIsRegister] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [triggerLogin, resultLogin] = usePostLoginMutation();
    const [triggerRegister] = usePostRegisterMutation();


    const handleLogin = () => {
        triggerLogin({ username, password })
    }

    const handleRegister = () => {
        triggerRegister({ username, password })
    }

    useEffect(() => {
        if (resultLogin.data?.response) {
            setUser(username);
            setSecret(password);
        }
    }, [resultLogin?.data]) // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className="login-page">
        <div className="login-container">
            <h2 className="title">GPT CHAT</h2>
            <p className="register-change" onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Already have an account?" : "Don't have an account?"}
            </p>
            <div className="login-form">
                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-actions">
                    {isRegister ? (
                        <button type="button" onClick={handleRegister}>
                            Register
                        </button>
                    ) : (
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login