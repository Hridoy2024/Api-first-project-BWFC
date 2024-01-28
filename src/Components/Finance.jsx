import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";

const Finance = () => {
  const [finance, setFinance] = useState({});

  useEffect(() => {
    const getFinanceData = async () => {
      const financeData = await fetchApi("https://bwfc-api.vercel.app/finance");
      setFinance(financeData.data);
    };

    getFinanceData();
  }, []);

  // console.log(finance);
  return (
    <div className="mt-[115px]" >
      <Container>
        <Flex>
          <div className="w-1/2">
            <h3 className="font-manrope font-extrabold text-[18px] text-primary  ">
              {finance.sunbTitle}
            </h3>

            <h1 className="font-manrope font-bold text-[50px] leading-[56px] mt-[25px] w-[532px] ">
              {finance.heading}
            </h1>

            <p className="font-manrope font-normal text-[18px] leading-[26px] text-secondary w-[512px] mt-[26px]  ">
              {finance.paragraph}
            </p>

            <a
              className="font-manrope font-bold text-[16px] leading-[30px] tracking-[-2%] py-[15px] px-[39px] bg-primary text-white rounded-[7px] inline-block mt-[27px]   shadow-buttonShadow "
              href={finance.button?.link}
            >
              {finance.button?.text}
            </a>
          </div>

          <div className="w-1/2">
            <img src={finance.image} alt="" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Finance;
