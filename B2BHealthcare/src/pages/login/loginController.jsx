import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { toast } from "react-toastify";
import { STRINGS } from "../../utils/constants";

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async ({ email, password }, thunkAPI) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            return userCredential.user;
        } catch (error) {
            let message;

            // Firebase error mapping
            switch (error.code) {
                case "auth/user-not-found":
                    message = "User not found";
                    break;

                case "auth/wrong-password":
                    message = "Incorrect password";
                    break;

                case "auth/invalid-email":
                    message = "Invalid email format";
                    break;

                case "auth/too-many-requests":
                    message = "Too many attempts. Try later";
                    break;

                default:
                    message = error.message;
            }

            toast.error(message);

            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const loginSlice = createSlice({
    name: "loginController",
    initialState: {
        email: "",
        password: "",
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
                toast.success(STRINGS.LOGIN_SUCCESS);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;