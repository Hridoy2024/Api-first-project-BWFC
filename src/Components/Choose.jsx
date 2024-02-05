import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";

const Choose = () => {
  const [choose, setChoose] = useState({});

  useEffect(() => {
    const getChooseData = async () => {
      const chooseData = await fetchApi("https://bwfc-api.vercel.app/choose");

      setChoose(chooseData.data);
    };

    getChooseData();
  }, []);

  return (
    <div>
      <Container>
        <div className="w-full  bg-greyBG rounded-[20px] py-[56px] px-[81px]">
          <h3 className="font-manrope font-extrabold text-[18px] text-primary text-center  ">
            {choose.subTitle}
          </h3>

          <h1 className="mt-[14px] font-manrope font-bold text-[50px] leading-[69px] tracking-[-1.5%] text-black text-center  ">
            {" "}
            {choose.title}
          </h1>

          <div className="mt-[69px] flex flex-wrap gap-[40px]">
            {choose.items?.map((item, i) => (
              <div
                key={i}
                className={`w-[484px] h-[241px] bg-white rounded-[20px] ${
                  item.visibility ? "flex" : "hidden"
                } px-[30px] gap-[32px]`}
              >
                <div className="w-2/12">
                  <div
                    className="w-[58px] h-[58px] rounded-full   mt-[59px]"
                    style={{ backgroundColor: item.circleColor }}
                  ></div>
                </div>
                <div className="w-10/12 ">
                  <h2 className="font-manrope font-extrabold text-[24px] text-black mt-[59px] ">
                    {item.title}
                  </h2>
                  <p className="font-manrope font-normal text-[18px] w-[317px] leading-[30px] tracking-[-0.36px] text-secondary mt-[22px] ">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Choose;
