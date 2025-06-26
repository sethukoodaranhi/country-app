import { Button, Form } from "react-bootstrap"
import { Icon } from "@iconify/react";
import loginSchema from "../../schemaValidations/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })
    const naviagate=useNavigate()
    const loginHanlder = (data) => {
        naviagate('/home')
    }
    const socialMediaIcons = ["meteor-icons:google", "icon-park-outline:facebook", "streamline:linkedin", "basil:twitter-outline"]
    return (
        <div className="row min-vh-100">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                <div className="w-100 p-4 p-md-5" style={{ maxWidth: '500px' }}>
                    <h2 className="mb-3">Sign In</h2>
                    <p>
                        New user? <a href="#" className="create_acc_link">Create an account</a>
                    </p>
                    <Form className="text-start" onSubmit={handleSubmit(loginHanlder)}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control className="form-input"
                                {...register('user')}
                                type="text"
                                size="lg"
                                placeholder="Username or email"
                                isInvalid={!!errors.user}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.user?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control
                                {...register('password')}
                                type="password"
                                size="lg"
                                className="form-input"
                                placeholder="password"
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Keep me signed in"
                            className="mb-3 login-check"

                        />
                        <Button className="w-100 " size="lg" type="submit" variant="success">
                            Sign In
                        </Button>
                        <div className="d-flex align-items-center my-4">
                            <hr className="flex-grow-1" />
                            <span className="px-2 text-muted">Or Sign In With</span>
                            <hr className="flex-grow-1" />
                        </div>
                        <div className="d-flex gap-2 justify-content-center text-center">

                            {
                                socialMediaIcons.map((icon) => (
                                    <div className="icon-container">
                                        <Icon icon={icon} width="24" height="24" />
                                    </div>

                                ))
                            }
                        </div>

                    </Form>
                </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block login-right-image"></div>
        </div>

    )
}

export default Login