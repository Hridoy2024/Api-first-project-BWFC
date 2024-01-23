import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";

const Payment = () => {
  const [Payment, setPayment] = useState({});

  useEffect(() => {
    const getPaymentData = async () => {
      let paymentData = await fetchApi("https://bwfc-api.vercel.app/payment");

      setPayment(paymentData.data);
    };

    getPaymentData();
  }, []);

  console.log(Payment);
  return (
    <div>
      <Container>
        <div className=" bg-greyBG h-[400px] w-full rounded-[20px] px-[68px]">
          <Flex>
            <div className="w-7/12">
              <h3 className=" font-manrope font-extrabold text-[18px] text-primary mt-[75px]   ">
                {Payment.subTitle}
              </h3>

              <h1 className="font-manrope font-bold text-[50px] leading-[56px] mt-[25px] ">
                {Payment.title}
              </h1>

              <p className="font-manrope font-normal text-[18px] leading-[26px] text-secondary w-[512px] mt-[36px]  ">
                {Payment.paragraph}
              </p>
            </div>
            <div className="w-5/12 relative">
              <img className="absolute top-[-22px] right-[-71px] " src={Payment.paymentShape} alt="" />
        
              <h2 className="font-manrope font-bold text-[24px] leading-[30px] text-primary mt-[75px] ">
                {" "}
                Get Started for Free
              </h2>
              <form action="">
                <input
                  className=" mt-[22px] outline-none font-manrope  w-[356px] h-[60px] bg-white px-[12px] py-[18px] rounded-[5px] placeholder:font-normal placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-banner placeholder:tracking-[-2%]"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                />

                 <input
                  className=" mt-[22px] outline-none font-manrope  w-[356px] h-[60px] bg-white px-[12px] py-[18px] rounded-[5px] placeholder:font-normal placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-banner placeholder:tracking-[-2%]"
                  type="email"
                  name=""
                  id=""
                  placeholder="Password"
                />

                <button className="w-[356px] h-[60px] rounded-[5px] bg-orange text-white font-manrope font-bold text-[16px] mt-[24px] shadow-buttonOrangeShadow " type="submit">Get Started</button>
              </form>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
