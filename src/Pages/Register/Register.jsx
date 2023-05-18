import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiSunkenEye, GiEyelashes } from "react-icons/gi";
import Navbar from "../Share/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorText("😔 Password at least 6 character longer!");
      return;
    }

    setSuccessText("");
    setErrorText("");
    createUserWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessText("😃 User Create Success!!!");
        updateUserProfile(name, photo)
          .then(() => {
            console.log("User Profile update");
          })
          .catch((error) => {
            setErrorText(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleEyeIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="px-3 py-5 loginBg">
        <div className="w-full bg-indigo-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 sm:w-4/5  md:w-3/5 xl:w-2/5 2xl:w-1/3 sm:mx-auto shadow-blue-100 shadow-md">
          <div className="card-body">
            <h2 className="text-center text-2xl sm:text-3xl font-bold">
              Create New Account
            </h2>
            <form onSubmit={handleForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  className="input shadow-blue-200 shadow-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input shadow-blue-200 shadow-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="photo url"
                  className="input shadow-blue-200 shadow-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="password"
                    className="input w-full shadow-blue-200 shadow-md input-bordered"
                  />
                  <span
                    title="show password"
                    className="absolute right-4 top-4 text-xl"
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
              <p className="text-red-600 mt-3">{errorText}</p>
              <p className="text-success mt-3">{successText}</p>
              <div className="form-control mt-4">
                <button className="btn bg-indigo-400 opacity-80 hover:bg-indigo-500 text-black border-indigo-500 shadow-blue-200 shadow-md btn-error">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link className="text-black underline" to="/login">
                  <strong>Login</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
