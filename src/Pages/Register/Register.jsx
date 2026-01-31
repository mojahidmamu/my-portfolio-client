import { Helmet } from "react-helmet-async";
import SingUpImage from "../../assets/home/authentication1.png";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | SingUp</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">SignUp now!</h1>
            <img src={SingUpImage} alt="" />
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <p className="text-gray-400 text-center"> Already registered? <span className="font-bold">Go to log in</span></p>
             
            </form>
            <div className="divider">Or sign in with</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
