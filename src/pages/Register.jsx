import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser,signInWithGoogle } = useContext(AuthContext);
  const [nameError, SetNameError] = useState(" ");
  const [error, setError] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegisterGoogle = () => {
    signInWithGoogle()
    .then((res) => {
      const user = res.user
      setUser(user);
    }).catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
    });
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (name.length < 4) {
      SetNameError("Name should be more than 5 character");
      return;
    } else SetNameError(" ");

    if (!emailPattern.test(email)) {
      setError("Provide Valid Email");
      return;
    }

    if (!strongPassword.test(password)) {
      setError(
        "Provide Actual Password Rules 6 character, upperCase, and LowerCase, special Character"
      );
      return;
    }
    setError(" ");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(res);
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Create your profile and shop your indoor plant for purifying your
            environment fresh your air take care of your inside.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} action="">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                {nameError && <p className="text-xs text-error">{nameError}</p>}
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                {/* photo */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="url"
                  placeholder="PhotoURL"
                />

                {/* password */}

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <button onClick={handleShow} className="absolute btn btn-xs top-2 right-7">
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </button>
                </div>
                {error && <p className="text-xs text-error">{error}</p>}

                <div>
                  <p className="lg:text-sm">
                    Already Have an Account??{" "}
                    <Link
                      to="/login"
                      className="link link-hover hover:text-green-800 font-semibold"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                <button className="btn bg-green-700 text-white mt-4">
                  Register
                </button>
                <Link onClick={handleRegisterGoogle} to='/' className="btn bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Sign Up with Google
                </Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
