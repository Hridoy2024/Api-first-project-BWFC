import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Tracking = () => {
  return (
    <div className="bg-primary  mt-[100px]">
      <Container>
        <Flex>
          <div className="w-1/2">
            <h2 className="font-manrope font-bold text-[14px] text-white mt-[91px]">
              Why Choose Us
            </h2>

            <h1 className="font-manrope font-extrabold text-[50px] leading-[60px] tracking-[-1.5px] text-white w-[528px] mt-[13px] ">
              Track your crytpo portfolio on the best way possible
            </h1>

            <p className="font-manropefont-normal text-[18px] leading-[30px] tracking-[-0.36px] text-white mt-[29px] w-[446px] mb-[58px]  ">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div className="w-1/2">
            <form className="mt-[128px] ml-[207px]" action="">
              <input
                className=" mt-[22px] outline-none font-manrope  w-[356px] h-[60px] bg-[#F2F3F4] px-[12px] py-[18px] rounded-[5px] placeholder:font-normal placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-[#BBB5E0] placeholder:tracking-[-2%] opacity-[0.2]"
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />

              <input
                className=" mt-[22px] outline-none font-manrope  w-[356px] h-[60px] bg-[#F2F3F4] px-[12px] py-[18px] rounded-[5px] placeholder:font-normal placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-[#BBB5E0] placeholder:tracking-[-2%] opacity-[0.2]"
                type="email"
                name=""
                id=""
                placeholder="Password"
              />

              <button
                className="w-[356px] h-[60px] rounded-[5px] bg-orange text-white font-manrope font-bold text-[16px] mt-[24px]  "
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Tracking;
