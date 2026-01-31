import { Helmet } from "react-helmet-async";
import LoginImage from "../../assets/home/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

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
    const value = capthchaRef.current.value;
    // if (validateCaptcha(value)) {
    //   disabled(false);
    // } else {
    //   disabled(true);
    // }
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
              <p className="text-gray-400 text-center">
                New here? Create a New Account
              </p>
            </form>
            <div className="divider">Or sign in with</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
