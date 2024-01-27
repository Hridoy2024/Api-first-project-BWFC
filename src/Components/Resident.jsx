import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";

const Resident = () => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    const getResidentData = async () => {
      const ResidentData = await fetchApi(
        "https://bwfc-api.vercel.app/residence"
      );

      setResident(ResidentData.data);
    };

    getResidentData(resident);
  }, []);

  console.log();

  return (
    <div className="mt-[63px]">
      <Container>
        <div className="px-[28px] py-[40px] border-[1px] border-[#DEE1E6] rounded-[15px] ">
          <Flex className="items-center justify-between">
            <div className="w-9/12">
              <h1 className="font-manrope font-normal text-[22px] leading-[32px] text-secondary  w-[827px]">
                {resident.text}
              </h1>
            </div>
            <div className="w-3/12">
              <a
                className="font-manrope font-bold text-[16px] leading-[30px] text-white bg-orange px-[64px] py-[16px] rounded-[47px] shadow-buttonOrangeShadow"
                href={resident.button?.link}
              >
                {resident.button?.text}
              </a>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Resident;
