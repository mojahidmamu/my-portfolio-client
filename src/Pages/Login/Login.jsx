import { Helmet } from "react-helmet-async";
import LoginImage from "../../assets/home/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { Chrome, Facebook, Github, Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaPhone } from "react-icons/fa";

import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../../firebase/firebase.config";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const Login = () => {
  const capthchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false); // enable login
    } else {
      setDisabled(true); // disable login
      alert("Captcha is incorrect!");
    }
  };

  // Google Facebook Github Login Functionality
  // Google Login
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Google User:", result.user);
        alert(
          `✅ Welcome ${result.user.displayName}. You have successfully logged in Google/Gmail!`,
        );
      })
      .catch((error) => {
        console.error("Google SignIn Error:", error.message);
      });
  };

  // Facebook Login
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log("Facebook User:", result.user);
        alert(
          `✅ Welcome ${result.user.displayName} ! You have successfully logged in with Facebook.`,
        );
      })
      .catch((error) => {
        console.error("Facebook SignIn Error:", error.message);
      });
  };

  // GitHub Login
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("GitHub User:", result.user);
        alert(
          `✅ Welcome ${result.user.displayName} ! You have successfully logged in with GitHub.`,
        );
      })
      .catch((error) => {
        console.error("GitHub SignIn Error:", error.message);
      });
  };

  // Phone Login
  const handlePhoneLogin = async () => {
    try {
      const phoneNumber = prompt(
        "Enter phone number with country code\nExample: +8801XXXXXXXXX",
      );

      if (!phoneNumber) return;

      // create recaptcha
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "normal" },
        auth,
      );

      const appVerifier = window.recaptchaVerifier;

      // send OTP SMS
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier,
      );

      const otp = prompt("Enter OTP sent to your phone");
      if (!otp) return;

      // verify OTP (ONLY ONCE)
      const result = await confirmationResult.confirm(otp);

      console.log("Logged in user:", result.user);
      alert("✅ Phone login success!");
    } catch (error) {
      console.error("PHONE LOGIN ERROR:", error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Portfolio | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-row lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <img src={LoginImage} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-600">
                    Reload Captcha
                  </span>
                  {/*  */}
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  ref={capthchaRef}
                  type="text"
                  placeholder="Type here the captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Valid Captcha
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  // disabled={disabled}
                  onClick={handleLogin}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              {/*  */}
              <p className="text-gray-400 text-center flex justify-center items-center gap-3">
                {" "}
                New here?{" "}
                <span className="font-bold border rounded-md">
                  <Link to="/register">
                    <div className="divider"> Create a New Account</div>
                  </Link>
                </span>
              </p>
            </form>
            <div className="divider">Or Login with</div>

            {/* Login with google and facebook and Github */}
            <div className="card-body px-3">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-square"
                >
                  <FcGoogle className="w-6 h-6" />
                </button>

                <button
                  onClick={handleFacebookSignIn}
                  className="btn btn-outline btn-square"
                >
                  <FaFacebook className="w-6 h-6 text-blue-600" />
                </button>

                <button
                  onClick={handleGithubSignIn}
                  className="btn btn-outline btn-square"
                >
                  <FaGithub className="w-6 h-6" />
                </button>
                {/* Phone */}
                <button
                  onClick={handlePhoneLogin}
                  className="btn btn-outline btn-square hover:bg-green-50 transition"
                >
                  <FaPhone className="w-5 h-5 text-green-600" />
                </button>
              </div>
            </div>
            {/*  */}
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
