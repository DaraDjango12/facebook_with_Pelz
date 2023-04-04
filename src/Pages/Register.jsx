import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "@mui/material";

const Register = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#f0f2f5]">
      <div >
        <h2 className=" text-center text-6xl lg:text-7xl text-blue-500 font-bold">facebook</h2>
        <div className="border w-[300px] rounded-lg mt-2 sm:w-[450px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex w-full p-4 justify-between">
            <div className="text-center w-full">
              <p className="text-4xl font-bold">Create New Account</p>
              <small>Its quick and easy</small>
            </div>
            <AiOutlineClose />
          </div>

          <hr />

          <div className="px-4">
            <div className="flex gap-4 mt-2">
              <input
                className="border w-full h-[2.8em] rounded-lg "
                placeholder="  Firstname"
              />
              <input
                className="border w-full rounded-lg h-[2.8em]"
                placeholder="  Surname"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="  Mobile Number or email address"
                className="border w-full mt-2 h-[2.8em] rounded-lg"
              />
            </div>
            <div className="w-full ">
              <input
                type="password"
                placeholder="  New Password"
                className="border w-full mt-2 h-[2.8em] rounded-lg"
              />
            </div>

            <div className="mt-2">
              <div>
                <label className=" text-sm">Date of birth ?</label>
                <div>
                  <input
                    className="rounded-lg w-full border p-2 h-[3em]"
                    type="date"
                    placeholder="Select ur date of birth"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="mt-2">Gender</label>
                <div className="flex gap-4 w-full">
                  <div className="border flex justify-around h-[3em] w-full rounded-lg items-center">
                    <p>Female</p>
                    <div>
                      <input type="Radio" value="Female" />
                    </div>
                  </div>

                  <div className="border flex justify-around h-[3em] rounded-lg items-center w-full">
                    <p>Male</p>
                    <div>
                      <input type="radio" value="Male" />
                    </div>
                  </div>

                  <div className="border flex justify-around h-[3em] rounded-lg items-center w-full">
                    <p>Custom</p>
                    <div>
                      <input type="radio" value="Custom" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs mt-2">
                People who use our service may have uploaded your contact
                information to Facebook <Link to="#">Learn more.</Link>
              </p>

              <p className="text-xs mt-2">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
            </div>
            <div className="flex justify-center">
              <button className=" border px-8 py-2 rounded-lg text-white bg-[green] font-bold mt-6 w-[60%]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="my-2 text-center">
            <Link to="#">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
