import { useContext, useRef, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Slider from "../components/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../components/Spinner";

const Login = () => {
  const { signInUser, forgetPassword,loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

   if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  const resetPassword = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        toast("Password Reset Email Send");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password)
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(`${location.state ? location.state : "/"}`);
        toast("User Login Successful!!")
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError("Invalid email or password");
        } else {
          setError("User not found please Register !");
        }
      });
  };

  return (
    <div>
      <Slider></Slider>

      {/* Desktop: Text on image  Mobile: Text below image */}

      <div className="hero mt-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Login to your profile and shop your indoor plant for purifying
              your environment fresh your air take care of your inside.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} action="">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                    required
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <button
                      onClick={handleShow}
                      className="absolute btn btn-xs top-2 right-7"
                    >
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </div>
                  <div>
                    <Link onClick={resetPassword} className="link link-hover">
                      Forgot password?
                    </Link>
                  </div>
                  {error && <p className="text-xs text-error">{error}</p>}
                  <div>
                    <p>
                      Don't Have an Account?{" "}
                      <Link
                        to="/register"
                        className="link link-hover hover:text-green-800"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                  <button className="btn bg-green-700 text-white mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
