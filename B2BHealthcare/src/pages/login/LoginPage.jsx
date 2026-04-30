import { Button, CircularProgress, IconButton, InputAdornment } from "@mui/material";
import {
    FormControl,
    Input,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginStyles } from "./loginStyles";
import { setEmail, setPassword, loginUser } from "./loginController";
import { STRINGS } from "../../utils/constants";
import {useState,useEffect} from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const dispatch = useDispatch();
    const { email, password, loading ,user} = useSelector(
        (state) => state.loginController
    );
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) return;
        dispatch(loginUser({ email, password }));
    };
    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    return (
        <div style={loginStyles.pageWrapper}>
            <div style={loginStyles.loginCard}>
                <div style={loginStyles.title}>{STRINGS.LOGIN_TITLE}</div>
                <div style={loginStyles.subtitle}>{STRINGS.LOGIN_SUBTITLE}</div>

                <div style={loginStyles.fieldContainer}>
                    <span style={loginStyles.label}>{STRINGS.EMAIL}</span>
                    <FormControl fullWidth variant="outlined">
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            disableUnderline
                            sx={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px 12px",
                            }}
                        />
                    </FormControl>
                </div>

                <div style={loginStyles.fieldContainer}>
                    <span style={loginStyles.label}>{STRINGS.PASSWORD}</span>
                    <FormControl fullWidth variant="standard">
                        <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            sx={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px 12px",
                            }}
                            disableUnderline
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility />: <VisibilityOff /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <Button
                    variant="contained"
                    style={{
                        ...loginStyles.button,
                        backgroundColor: loading || !email || !password ? "#c4c4c4" : "#1976d2",
                        color: "#fff",
                        cursor: loading || !email || !password ? "not-allowed" : "pointer",
                    }}
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : STRINGS.LOGIN_BUTTON}
                </Button>
            </div>
        </div>
    );
}