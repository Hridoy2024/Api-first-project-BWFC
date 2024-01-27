import React, { useEffect, useState } from "react";
import { fetchApi } from "../FetchApi";
import Container from "./Container";
import Flex from "./Flex";

const Account = () => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    const getAccountData = async () => {
      const accountData = await fetchApi("https://bwfc-api.vercel.app/account");
      setAccount(accountData.data);
    };

    getAccountData();
  }, []);

  // console.log(account);
  return (
    <div className="mt-[106px]" >
      <Container>
        <Flex>
          <div className="w-1/2">
            <h3 className=" font-manrope font-extrabold text-[18px] text-primary mt-[75px]   ">
              {account.subTitle}
            </h3>

            <h1 className="font-manrope font-bold text-[50px] leading-[56px] mt-[25px] w-[532px] ">
              {account.title}
            </h1>

            <p className="font-manrope font-normal text-[18px] leading-[26px] text-secondary w-[512px] mt-[26px]  ">
              {account.paragraph}
            </p>

            <a
              className="font-manrope font-bold text-[16px] leading-[30px] tracking-[-2%] py-[15px] px-[39px] bg-primary text-white rounded-[7px] inline-block mt-[27px]   shadow-buttonShadow "
              href={account.button?.link}
            >
              {account.button?.text}
            </a>
          </div>
          <div className="w-1/2">
            <img src={account.accountImage} alt="" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Account;
