import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Footer = () => {
  return (
    <div className="bg-[#1B1C31]">
      <Container>
        <div className="pt-[111px] pb-[126px]">
          <Flex>
            <div className="w-1/2">
              <h1 className="font-manrope font-bold text-[20px] text-white">
                BWFC
              </h1>

              <p className="text-white font-manrope font-medium text-[16px] leading-[26px] opacity-[0.4] mt-[18px] w-[502px]">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment.
              </p>
            </div>
            <div className="w-1/2">
              <Flex>
                <div className="w-4/12">
                  <h3 className="font-manrope font-bold text-[21px] leading-[24px]  text-white">
                    Company
                  </h3>
                  <ul className="mt-[35px]">
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">About Us</a>
                    </li>

                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Careers</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Blog</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>

                <div className="w-4/12">
                  <h3 className="font-manrope font-bold text-[21px] leading-[24px]  text-white">
                    Product
                  </h3>
                  <ul className="mt-[35px]">
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Invoicing Platform</a>
                    </li>

                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Accounting Plateform</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Create Proposal</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Contracts</a>
                    </li>
                  </ul>
                </div>

                <div className="w-4/12">
                  <h3 className="font-manrope font-bold text-[21px] leading-[24px]  text-white">
                    Resources
                  </h3>
                  <ul className="mt-[35px]">
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Proposal Template </a>
                    </li>

                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Invoice Template</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">Tuturoial</a>
                    </li>
                    <li className="font-manrope font-medium text-[16px] leading-[24px] text-white mb-[18px]">
                      {" "}
                      <a href="#">How to write a contract</a>
                    </li>
                  </ul>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>

      <div className="h-[1px] w-full bg-[#404444]"></div>

      <Container>
        <Flex className={`justify-between py-[23px] `}>
          <p className="font-manrope font-medium text-[16px] text-white">
            2024 Jahedul Islam Rasel. All rights reserved. -- Privacy Policy -
            Terms of Services
          </p>

          <p className="font-manrope font-medium text-[16px] text-white">
            Supported by Microsoft Startup
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
