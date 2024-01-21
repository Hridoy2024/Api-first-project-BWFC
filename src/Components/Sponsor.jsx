import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import Flex from "./Flex";

const Sponsor = () => {
  const [sponsor, Setsponsor] = useState({});
  useEffect(() => {
    const getSponsers = async () => {
      const sponsorData = await axios.get(
        "https://bwfc-api.vercel.app/sponsor"
      );
      Setsponsor(sponsorData.data);
    };

    getSponsers();
  }, []);

  console.log(sponsor);
  return (
    <div className="pt-[71px]">
      <Container>
        <h1 className="font-manrope font-normal text-[22px] text-center  ">
          {sponsor.title}
        </h1>

        <Flex className=" items-center justify-between mt-[36px]">
            {sponsor.logos?.map((companylogo, i) =>(
                <img key={i} src={companylogo.src} alt="logo" />
            ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Sponsor;
