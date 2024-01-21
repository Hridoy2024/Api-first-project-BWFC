import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import Flex from "./Flex";
import { FaAngleDown } from "react-icons/fa6";

const Navber = () => {
  const [nav, setNavber] = useState({});
  useEffect(() => {
    const getData = async () => {
      const navData = await axios.get("https://bwfc-api.vercel.app/navbar");

      setNavber(navData.data);
    };

    getData();
  }, []);

  return (
    <div className="pt-[28px]">
      <Container>
        <Flex className="items-center justify-between ">
          <img src={nav.logo} alt="nav" />

          <ul className="flex items-center justify-center gap-[27px]">
            {nav.navItems?.map((menu, i) => (
              <li className="relative group" key={i}>
                <a
                  className="font-manrope font-normal text-[14px] text-black flex items-center gap-[12px] "
                  href={menu.link}
                >
                  <span className="hover:text-primary">{menu.item}</span>{" "}
                  {menu.dropDown && <FaAngleDown />}
                </a>

                {menu.dropDown && (
                  <ul className="absolute top-7 left-0 duration-150 scale-y-0 origin-top group-hover:scale-y-100  ">
                    {menu.dropDownItem?.map((sub_menu, i) => (
                      <li>{sub_menu.dropItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div>
            {nav.buttonOne?.visibility && (
              <a
                href={nav.buttonOne.link}
                className="font-manrope font-semibold text-[14px] text-black  px-[35px] py-[17px] rounded-[7px]"
              >
                {nav.buttonOne.text}
              </a>
            )}
            {nav.buttonTwo?.visibility && (
              <a
                href={nav.buttonTwo.link}
                className="font-manrope font-semibold text-[14px] text-white bg-primary px-[35px] py-[17px] rounded-[7px] shadow-buttonShadow "
              >
                {nav.buttonTwo.text}
              </a>
            )}
            {nav.buttonThree?.visibility && (
              <a
                href={nav.buttonThree.link}
                className="font-manrope font-semibold text-[14px] text-black  px-[35px] py-[17px] rounded-[7px]"
              >
                {nav.buttonThree.text}
              </a>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navber;
