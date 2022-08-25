import React from "react";
import { SearchOutlined, BellOutlined, RightOutlined } from "@ant-design/icons";

function Topnav() {
  return (
    <div className="absolute top-0 left-12 h-12 right-0 flex items-center justify-end md:justify-between px-6">
      <div className="hidden md:flex items-center">
        <p className="text-gray">Perusahaan</p>
        <RightOutlined className="text-gray text-xs mx-2" />
        <p className="font-semibold text-gray-dark">Mirtamas Infosys Global</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <SearchOutlined className="mx-3 text-gray-dark" />
          <BellOutlined className="mx-3 text-gray-dark" />
        </div>
        <div className="flex">
          <img
            class="inline-block h-6 w-6 rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <p className="font-normal text-gray-dark ml-2">Jhon Doe</p>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
