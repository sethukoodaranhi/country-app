import * as yup from "yup";

const loginSchema = yup.object({
    user: yup.string().required("Username or Email is Required")
        .test("either-username-or-pswd", "Enter a valid username or email", (value) => {
            const usernameRegex = /^[a-zA-Z0-9_]{3,}$/
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return usernameRegex.test(value) || emailRegex.test(value)
        }),
    password: yup.string().required("Password is required").min(8, "Minimum 8 characters required")
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?/.,:;'"[\]{}|\\])/, "Password must include at least one uppercase letter, one number, and one special character"),

}).required();
export default loginSchema;