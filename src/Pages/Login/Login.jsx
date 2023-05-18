import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GiSunkenEye, GiEyelashes } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./login.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub, resetPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeIcon = () => {
    setShowPassword(!showPassword);
  };

  const from = location.state?.from?.pathname || "/";

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorText("");
    setSuccessText("");

    loginWithEmail(email, password)
      .then(() => {
        setSuccessText("😃 User login success!!!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleResetPass = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success("Look at your email.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  return (
    <div className={`px-3 py-4 loginBg h-screen`}>
      <div
        className={`sm:w-4/5  md:w-3/5 xl:w-2/5 2xl:w-1/3 sm:mx-auto py-5  shadow-blue-100 shadow-md h-full w-full bg-indigo-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 `}
      >
        <div className={`card-body `}>
          <h2 className="text-center text-3xl font-bold">Please Login</h2>
          <form onSubmit={handleForm}>
            <div className={`form-control `}>
              <label className={`label `}>
                <span className={`label-text `}>Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                required
                placeholder="email"
                className={`input shadow-blue-200 shadow-md input-bordered `}
              />
            </div>
            <div className={`form-control `}>
              <label className="label">
                <span className={`label-text `}>Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="password"
                  className={`input w-full shadow-blue-200 shadow-md input-bordered `}
                />
                <span
                  title="show password"
                  className={`absolute right-4 top-4 text-xl `}
                  onClick={handleEyeIcon}
                >
                  {showPassword ? (
                    <GiSunkenEye></GiSunkenEye>
                  ) : (
                    <GiEyelashes></GiEyelashes>
                  )}
                </span>
              </div>
            </div>
            <label className={`label `}>
              <a
                href="#"
                onClick={handleResetPass}
                className={`label-text-alt link link-hover `}
              >
                Forgot password?
              </a>
            </label>
            <p className={`text-success `}>{successText}</p>
            <p className={`text-red-600 `}>{errorText}</p>
            <div className={`form-control mt-4 `}>
              <button
                className={`btn bg-indigo-400 opacity-80 hover:bg-indigo-500 text-black border-indigo-500 shadow-blue-200 shadow-md btn-error`}
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col sm:flex-row justify-between">
            <button
              onClick={handleGoogleLogin}
              className={`flex lg:mb-4 w-full sm:w-[48%]  btn btn-error bg-transparent items-center shadow-blue-200 shadow-md hover:bg-indigo-500 font-semibold  justify-center border border-indigo-500 rounded-full mt-5 gap-1 text-black md:py-3 `}
            >
              <span>Login With Google</span>
              <span className="text-lg">
                <FaGoogle></FaGoogle>
              </span>
            </button>
            <button
              onClick={handleGithubLogin}
              className={`flex w-full  sm:w-[48%] mb-4  btn btn-error bg-transparent items-center shadow-blue-200 shadow-md font-semibold  justify-center border border-indigo-500 hover:bg-indigo-500 rounded-full mt-5 gap-1 text-black md:py-3 `}
            >
              <span>Login With Github</span>
              <span className="text-xl">
                <FaGithub></FaGithub>
              </span>
            </button>
          </div>
          <p className="text-center">
            Do not have account?{" "}
            <Link className="text-black underline" to="/register">
              <strong>Create</strong>
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
