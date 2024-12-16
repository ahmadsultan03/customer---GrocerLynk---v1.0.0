import React, { useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope, faPhone, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import OnlineShopping from '../../assets/gifs/OnlineShopping.gif';
import ShoppingBag from '../../assets/gifs/ShoppingBag.gif';
import { setUserState } from "../../slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlertBox from "../../components/AlertBox/AlertBox";

//input field method
const InputField = ({ icon, type, placeholder, name, pattern, value, onChange, readOnly, error }) => {
    let [isInputFocus, setInputFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className={`${isInputFocus ? "log-inputfield signiu-input-focus" : "log-inputfield"} ${error ? 'error-input' : ''}`}>
                <FontAwesomeIcon icon={icon} className="signiu-input-icon" />
                <input
                    type={(type === 'password') ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    name={name}
                    pattern={pattern}
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                    required
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
                {(type === 'password') &&
                    ((showPassword) ?
                        <FontAwesomeIcon icon={faEyeSlash} className="signiu-input-icon" onClick={() => setShowPassword(false)} />
                        : <FontAwesomeIcon icon={faEye} className="signiu-input-icon" onClick={() => setShowPassword(true)} />)
                }
            </div>
            {error && <div className="input-error-message">{error}</div>}
        </>
    )
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const page = useSelector((state) => state.page.value);  // to navigate to the page after login

    //signin-signup switching
    let [signupMode, setSignupMode] = useState(false);

    // log in form state
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    // sign up form state
    const [signupFormData, setSignupFormData] = useState({
        name: '',
        email: '',
        phoneno: '',
        password: '',
        confirmPassword: '',
    });

    // Validation errors
    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});

    // alert
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState()
    const [alertMessage, setAlertMessage] = useState('');

    // user login check
    const userCheck = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/customers/login', { email, password })
            console.log('login response ', response);
            dispatch(setUserState(response.data._id))
            navigate(page);
        }
        catch (error) {
            console.log('Failed while authenticating user', error)
            if(error.response.status === 401) {
                setLoginErrors({
                    general: 'Incorrect Email or Password. Please try again.'
                });
            }
        }
    }

    //login input field change handler
    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear specific error when user starts typing
        setLoginErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
            general: ''
        }));
    }

    //sign up input field change handler
    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear specific error when user starts typing
        setSignupErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    }

    // check for the password
    const isPasswordValid = (password) => {
        // Minimum 8 characters, maximum 16 characters
        const lengthRegex = /^[A-Za-z\d@$!%*#?&]{8,16}$/;

        // At least one capital letter, one special character, and one digit
        const characterRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])/;

        return {
            lengthValid: lengthRegex.test(password),
            characterValid: characterRegex.test(password)
        };
    };

    //login form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Email validation
        if (!loginFormData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
            errors.email = 'Email is invalid';
        }

        // Password validation
        if (!loginFormData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setLoginErrors(errors);
            return;
        }

        userCheck(loginFormData.email, loginFormData.password);
    }

    //signup form submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        // Name validation
        if (!signupFormData.name.trim()) {
            errors.name = 'Name is required';
        }

        // Email validation
        if (!signupFormData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(signupFormData.email)) {
            errors.email = 'Email is invalid';
        }

        // Phone number validation
        if (!signupFormData.phoneno.trim()) {
            errors.phoneno = 'Phone number is required';
        } else if (!/^\d{4}-\d{7}$/.test(signupFormData.phoneno)) {
            errors.phoneno = 'Phone number must be in format 0300-0000000';
        }

        // Password validation
        const passwordCheck = isPasswordValid(signupFormData.password);
        if (!signupFormData.password.trim()) {
            errors.password = 'Password is required';
        } else if (!passwordCheck.lengthValid) {
            errors.password = 'Password must be 8-16 characters long';
        } else if (!passwordCheck.characterValid) {
            errors.password = 'Password must include a capital letter, number, and special character';
        }

        // Confirm password validation
        if (!signupFormData.confirmPassword.trim()) {
            errors.confirmPassword = 'Please confirm your password';
        } else if (signupFormData.password !== signupFormData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        // If there are any errors, set them and stop submission
        if (Object.keys(errors).length > 0) {
            setSignupErrors(errors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/customers/createCustomer', signupFormData)
            console.log(response)
            if (response.status === 200) {
                setShowAlert(true)
                setAlertMessage('Account Created Successfully')
                setAlertType('success')

                // Reset form data
                setSignupFormData({
                    name: "",
                    email: "",
                    phoneno: "",
                    password: "",
                    confirmPassword: "",
                });

                // Clear any previous errors
                setSignupErrors({});

                // Set user state and navigate
                dispatch(setUserState(response.data._id))
                navigate(page);
            } else {
                const error = await response.data;
                console.log(error)
                setShowAlert(true)
                setAlertMessage(`Error: ${error.error}`)
                setAlertType('error')
            }
        } catch (error) {
            console.error("Error:", error.message);
            setShowAlert(true)
            setAlertMessage('Error creating account')
            setAlertType('error')
        }
    };

    return (
        <>
            {/* Alert */}
            {(showAlert) && <AlertBox message={alertMessage} type={alertType} onClose={() => { setShowAlert(false) }} />}

            <div className={signupMode ? "signiu-container sign-up-mode" : "signiu-container"}>
                <div className="signiu-sliding-circle">
                </div>

                <div className="signiu-forms-container">
                    {/* Sign in Form */}
                    <div className="signiu-form-wrapper sign-in-wrapper">
                        <h1 className="signiu-form-title">
                            Sign in
                        </h1>
                        <form onSubmit={handleLoginSubmit} className="log-form">
                            <InputField
                                icon={faEnvelope}
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                                value={loginFormData.email}
                                onChange={handleLoginInputChange}
                                error={loginErrors.email}
                            />
                            <InputField
                                icon={faLock}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={loginFormData.password}
                                onChange={handleLoginInputChange}
                                error={loginErrors.password}
                            />
                            {loginErrors.general && <div className="general-error">{loginErrors.general}</div>}
                            <button type="submit" className="signiu-submit-button"> LOGIN </button>
                        </form>
                    </div>

                    {/* Sign up form */}
                    <div className="signiu-form-wrapper sign-up-wrapper">
                        <h1 className="signiu-form-title">
                            Sign up
                        </h1>

                        <form onSubmit={handleSignupSubmit} className="log-form">
                            <InputField
                                icon={faUser}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={signupFormData.name}
                                onChange={handleSignupInputChange}
                                error={signupErrors.name}
                            />
                            <InputField
                                icon={faEnvelope}
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                                value={signupFormData.email}
                                onChange={handleSignupInputChange}
                                error={signupErrors.email}
                            />
                            <InputField
                                icon={faPhone}
                                type="tel"
                                placeholder="Phone No - 03xx-xxxxxxx"
                                name="phoneno"
                                pattern="[0-9]{4}-[0-9]{7}"
                                value={signupFormData.phoneno}
                                onChange={handleSignupInputChange}
                                error={signupErrors.phoneno}
                            />
                            <InputField
                                icon={faLock}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={signupFormData.password}
                                onChange={handleSignupInputChange}
                                error={signupErrors.password}
                            />

                            <InputField
                                icon={faLock}
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={signupFormData.confirmPassword}
                                onChange={handleSignupInputChange}
                                error={signupErrors.confirmPassword}
                            />

                            <button type="submit" className="signiu-submit-button signiu-panel-button">
                                SIGNUP
                            </button>
                        </form>
                    </div>
                </div>

                <div className="signiu-panels-container">
                    {/* left panel */}
                    <div className="signiu-panel signiu-panel-left">
                        <div className="signiu-panel-header">
                            <h2 className="signiu-panel-title">
                            New to Us?
                            </h2>
                            <p className="signiu-panel-description">
                            We're excited to have you onboard! <br />Begin your grocery adventure by creating an account with us and unlock fresh deals and personalized recommendations!
                            </p>
                            <button className="signiu-submit-button signiu-panel-button" onClick={() => setSignupMode(true)}>
                                SIGN UP
                            </button>
                        </div>
                        <div className="signiu-panel-img-wrapper signiu-left-img">
                            <div className="signiu-panel-img ">
                                <img src={OnlineShopping} alt="Online Shopping" />
                            </div>
                        </div>
                    </div>

                    {/* right panel */}
                    <div className="signiu-panel signiu-panel-right">
                        <div className="signiu-panel-header">
                            <h2 className="signiu-panel-title">
                            Ready to Shop Again?
                            </h2>
                            <p className="signiu-panel-description">
                                Discover Freshness – Login to enjoy a seamless grocery shopping experience!
                            </p>
                            <button className="signiu-submit-button signiu-panel-button" onClick={() => setSignupMode(false)}>
                                SIGN IN
                            </button>
                        </div>
                        <div className="signiu-panel-img-wrapper signiu-right-img">
                            <div className="signiu-panel-img ">
                                <img src={ShoppingBag} alt="Shopping Bag" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;