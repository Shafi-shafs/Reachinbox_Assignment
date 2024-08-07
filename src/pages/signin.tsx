import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Signup() {
  return (
    <>
      <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div>
          <img src={logo} alt="logo_reachinbox" className="h-10" />
        </div>
      </div>

      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 py-8 rounded-2xl border border-[#343A40]">
          <div className="text-xl font-semibold mt-6">
            Enter Your credentials
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-[#1E1F23] border border-[#343A40] text-[#CCCCCC]"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-[#1E1F23] border border-[#343A40] text-[#CCCCCC]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] w-full py-3 rounded-md text-sm font-medium cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="my-8 mb-10 text-[#909296]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#C1C2C5]">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-[#5C5F66]">
        © 2024 Reachinbox. All rights reserved.
      </div>
    </>
  );
}

export default Signup;
