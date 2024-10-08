import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router DOM
import logo from "../assets/logo.png";
import google from "../assets/google.svg";

function Login() {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    Navigate("/");
  }
  if (!token) {
    Navigate("/login");
  }
  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    // window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/onebox";
    
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinboxshafi.netlify.app/";

  };

  return (
    <>
      <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div className="">
          <img src={logo} alt="logo_reachinbox" className=" h-10"></img>
        </div>
      </div>

      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link
              to="/register"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-[#5C5F66]">
        © 2024 Reachinbox. All rights reserved.
      </div>
    </>
  );
}

export default Login;
