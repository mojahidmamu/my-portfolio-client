import { Helmet } from "react-helmet-async";
import LoginImage from "../../assets/home/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Chrome, Facebook, Github } from "lucide-react";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";

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
        alert(`Welcome ${result.user.displayName}`);
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
        alert(`Welcome ${result.user.displayName}`);
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
        alert(`Welcome ${result.user.displayName}`);
      })
      .catch((error) => {
        console.error("GitHub SignIn Error:", error.message);
      });
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
                  Validata
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
                  <Chrome className="w-5 h-5 text-red-500" />
                </button>

                <button
                  onClick={handleFacebookSignIn}
                  className="btn btn-outline btn-square"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>

                <button
                  onClick={handleGithubSignIn}
                  className="btn btn-outline btn-square"
                >
                  <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
