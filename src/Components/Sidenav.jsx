import React from "react";
import { HomeOutlined, ContainerOutlined } from "@ant-design/icons";
const icon = [
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs " />,
  },
  {
    t: "Home",
    i: <ContainerOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <ContainerOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <ContainerOutlined className="text-gray text-xs mt-5" />,
  },
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <ContainerOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <ContainerOutlined className="text-gray text-xs" />,
  },
  {
    t: "Home",
    i: <HomeOutlined className="text-gray text-xs mt-5" />,
  },
];
const Sidenav = () => {
  return (
    <div className="fixed left-0 h-screen w-12 bg-white flex flex-col shadow-sm">
      <img
        className="mt-6 m-auto my-0"
        width="20"
        height="20"
        src="./logo.png"
        alt="logo"
      />
      <div className="flex flex-col mt-4 items-center box-border justify-around h-full pb-12">
        {icon.map((icon, index) => (
          <div className="p-3 box-border box hover:bg-gray-light cursor-pointer hover:border-l-4 border-green2 ">
            {icon.i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
