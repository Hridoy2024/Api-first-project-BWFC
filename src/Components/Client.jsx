import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rate } from "antd";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";

const Client = () => {
  const [client, setClient] = useState({});

  useEffect(() => {
    const getClientData = async () => {
      const ClientData = await fetchApi("https://bwfc-api.vercel.app/client");

      setClient(ClientData.data);
    };

    getClientData();
  }, []);

  // console.log(client.sliderItem);

  return (
    <div className="mt-[129px]">
      {" "}
      <Container>
        {" "}
        <h3 className="font-manrope font-bold text-[14px] text-primary">
          {client.subTitle}
        </h3>{" "}
        <h1 className="font-manrope font-extrabold text-[40px] leading-[48px] text-black tracking-[-3%] w-[390px]">
          {client.title}
        </h1>{" "}
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {client.sliderItem?.map((slide, i) => (
            <SwiperSlide key={i}>
              <Flex>
                <div className="w-7/12">
                  <img src={slide.image} alt="" />
                </div>
                <div className="w-5/12 ps-8">
                  <p className=" text-[50px] font-extrabold text-orange">
                    {slide.symbol}
                  </p>

                  <h1 className=" font-manrope font-extrabold text-[20px] leading-[30px] w-[290px]">
                    {slide.heading}
                  </h1>

                  <p
                    className="w-[460px]"
                    dangerouslySetInnerHTML={{ __html: slide.paragraph }}
                  />

                  <div className=" mt-[14px]">
                    <Rate disabled allowHalf defaultValue={slide.rating} />
                  </div>

                  <h3 className=" font-manrope font-extrabold text-[16px] leading-[30px] mt-[5px]">
                    {slide.name}
                  </h3>

                  <h4 className="font-manrope font-normal text-[14px] leading-[24px] text-secondary">
                    {slide.designation}
                  </h4>
                </div>
              </Flex>
            </SwiperSlide>
          ))}

          <div className="flex gap-2">
            <div className="button-prev-slide h-[34px] w-[34px] bg-primary text-white flex items-center justify-center rounded-full cursor-pointer">
              <GrFormPrevious />
            </div>
            <div className="button-next-slide h-[34px] w-[34px] bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
              <GrFormNext />
            </div>
          </div>
        </Swiper>
      </Container>{" "}
    </div>
  );
};

export default Client;
