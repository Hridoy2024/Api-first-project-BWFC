import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";

const Feature = () => {
  const [feature, setFeature] = useState({});

  useEffect(() => {
    const getFeatureData = async () => {
      const FeatureData = await fetchApi("https://bwfc-api.vercel.app/feature");
      setFeature(FeatureData.data);
    };

    getFeatureData();
  }, []);

  // console.log(feature);

  return (
    <div className="mt-[113px] bg-no-repeat bg-cover pb-[179px] "
     style={{backgroundImage: `url(${feature.featureShape})`}}>
      <Container>
        <Flex className="items-center justify-center ">
          <div className="w-1/2">
            <img src={feature.featureImage} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="font-manrope font-extrabold text-[18px] text-primary capitalize  ">
              {feature.subTitle}
            </h1>

            <h2 className="font-manrope font-bold text-[50px] leading-[56px] text-black mt-[25px]  ">
              {feature.title}
            </h2>

            <p className="font-manrope font-normal text-[18px] leading-[26px] text-secondary w-[512px] mt-[36px] ">
              {feature.paragraph}
            </p>

            <a
              className="font-manrope font-bold text-[16px] leading-[30px] tracking-[-2%] py-[15px] px-[39px] bg-primary text-white rounded-[7px] inline-block mt-[27px]   shadow-buttonShadow "
              href={feature.button?.link}
            >
              {feature.button?.text}
            </a>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Feature;
