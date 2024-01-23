import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";
import { IoPlay } from "react-icons/io5";

const Banner = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const getBanner = async () => {
      const bannerData = await fetchApi("https://bwfc-api.vercel.app/banner")
      setBanner(bannerData.data);
    };

    getBanner();
  }, []);

  console.log(banner.bannerbgshape);

  return (
    <div
      className={`bg-no-repeat bg-cover w-full`}
      style={{ backgroundImage: `url(${banner.bannerbgshape})` }}
    >
      <Container>
        <Flex>
          <div className="w-1/2">
            <h1 className="font-manrope font-extrabold text-[54px] leading-[80px] mt-[174px]">
              {banner.bannerheading}
            </h1>

            <p className="font-manrope font-normal text-[20px] leading-[30px] mt-[22px] w-[446px] ">
              {banner.bannerparagraph}
            </p>

            <div className="flex items-center justify-start  gap-[50px] mt-[26px]">
              <a className="font-manrope font-bold text-[16px] leading-[30px] py-[15px] px-[39px] bg-primary rounded-[47px] text-white shadow-buttonShadow" href={banner.bannerButton?.link}>
                {banner.bannerButton?.text}
              </a>

              <a href={banner.video ?.link} className="flex items-center justify-center gap-[11px]  ">
                <div className="w-[60px] h-[60px] bg-[#22D497] rounded-full flex items-center justify-center    ">
                <IoPlay size={25} className="text-white" />
                </div>

                <span className="font-manrope font-semibold text-[17px] leading-[30px] text-primary " >{banner.video?.text}</span>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={banner.bannerrightimg}
              className="w-[542px] mt-[202px] scale-[1.3]"
              alt=""
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
