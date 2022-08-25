import Sidenav from "./Components/Sidenav";
import Topnav from "./Components/Topnav";
import {
  EditOutlined,
  BankOutlined,
  PlusOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <div className="bg-white2 overflow-x-hidden">
      <Sidenav />
      <Topnav />
      <div className="py-12 px-4  md:pt-16 ml-12 md:flex  lg:w-full h-full">
        <div className=" bg-white w-full mt-2 md:mt-0 rounded-md overflow-hidden relative md:w-1/3 shadow-md pb-10 ">
          <div className="bg-[url('https://images.unsplash.com/photo-1474696100102-01b8519f06f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-no-repeat h-28" />
          <div className="flex items-center w-full justify-center absolute top-12 ">
            <div className="rounded-full h-32 w-32 bg-gray-light " />
          </div>
          <div className="mt-20 flex flex-col items-center justify-center w-full ">
            <div className="text-center">
              <h3 className="font-bold text-gray-dark">
                Mitramas Infoss Global
              </h3>
              <p className="text-gray text-xs">Layanan IT</p>
              <div className="flex mt-12 items-center justify-center text-green">
                <EditOutlined />

                <p className="ml-2 p-0 m-0 font-semibold">Sunting Profile</p>
              </div>
            </div>
            <div className="mt-12 w-full px-5">
              <div className="">
                <p className="text-gray text-xs">Status Perusahaan</p>
                <div className="flex justify-between ">
                  <h2 className="font-bold text-md text-green text-smen">
                    Aktif
                  </h2>
                  <label
                    for="default-toggle"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-green2 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Singkatan</p>
                <div className="flex justify-start ">
                  <h2 className="font-light text-gray-dark text-sm">MIG</h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Alamat Perusahaan</p>
                <div className="flex justify-start ">
                  <h2 className="font-light text-gray-dark text-sm">
                    Jl. Tebet Raya No. 42 Jakarta Selatan
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Penanggung Jawab IPC</p>
                <div className="flex justify-start ">
                  <h2 className="font-light text-gray-dark text-sm">
                    Jhon Doe
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Tanggal PKP</p>
                <div className="flex justify-start ">
                  <h2 className="font-light text-gray-dark text-sm">
                    25 Agustus 2022
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Email</p>
                <div className="flex justify-start ">
                  <h2 className="text-green font-light text-sm">
                    mig@mitrasolusi@gmail.com
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">No Telp</p>
                <div className="flex justify-start ">
                  <h2 className="text-green font-light text-sm">
                    021-5678-1234
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray text-xs">Situs Web</p>
                <div className="flex justify-start ">
                  <h2 className="text-green font-light text-sm">
                    mig@mitrasolusi@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-6 w-full h-full md:pr-4">
          <div className="bg-white mt-6 md:mt-0 p-5 py-8 shadow-md rounded-md">
            <div className="flex w-full justify-between">
              <p className="font-bold">Lokasi</p>
              <p className="text-green2">Lihat Semua</p>
            </div>
            <div className="flex flex-col md:flex-row w-full md:mt-8">
              <div className="rounded-md  md:mx-2 bg-green2 mt-2  md:flex-1 text-white flex items-center justify-between p-2 md:p-4 box-border">
                <BankOutlined className="text-5xl p-0 m-0" />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">20</h1>
                  <p className="text-light text-xs">Induk</p>
                </div>
              </div>
              <div className="rounded-md  md:mx-2 bg-green2 mt-2  md:flex-1 text-white flex items-center justify-between p-2 md:p-4 box-border">
                <BankOutlined className="text-5xl p-0 m-0" />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">20</h1>
                  <p className="text-light text-xs">Induk</p>
                </div>
              </div>
              <div className="rounded-md  md:mx-2 bg-green2 mt-2  md:flex-1 text-white flex items-center justify-between p-2 md:p-4 box-border">
                <BankOutlined className="text-5xl p-0 m-0" />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">20</h1>
                  <p className="text-light text-xs">Induk</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-full md:mt-2">
            <div className="md:w-full">
              <div className="bg-white mt-6 p-5 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold">Akun Bank</h2>
                  <button className="flex items-center bg-green2 text-white p-2 rounded-md text-xs">
                    <PlusOutlined className="mr-2 " />
                    Tambah Akun Bank
                  </button>
                </div>
                <div className="mt-8 flex">
                  <div className="rounded-lg w-28 md:w-48 h-20 md:h-20 bg-gradient-to-r relative from-yellow to-green2 ">
                    <p className="text-white font-bold absolute right-2 bottom-3">
                      visa
                    </p>
                  </div>
                  <div className="w-full ml-2 md:ml-6 flex flex-col justify-between">
                    <div className="flex w-full text-gray-dark justify-between">
                      <h4 className="font-semibold text-xs">Bank KB Bukopin</h4>
                      <div className="flex">
                        <EditOutlined className="text-xs md:text-lg text-green mr-2" />
                        <DeleteOutlined className="text-xs md:text-lg text-orange" />
                      </div>
                    </div>
                    <div className="text-gray text-xs mt-">
                      <p>**** 0921 - Ilham Udin</p>
                      <p className="text-light">IDR</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-8 flex">
                  <div className="rounded-lg w-28 md:w-48 h-20 md:h-20 bg-gradient-to-r relative from-blue to-orange ">
                    <p className="text-white font-bold absolute right-2 bottom-3">
                      visa
                    </p>
                  </div>
                  <div className="w-full ml-2 md:ml-6 flex flex-col justify-between">
                    <div className="flex w-full text-gray-dark justify-between">
                      <h4 className="font-semibold text-xs">Bank KB Bukopin</h4>
                      <div className="flex">
                        <EditOutlined className="text-xs md:text-lg text-green mr-2" />
                        <DeleteOutlined className="text-xs md:text-lg text-orange" />
                      </div>
                    </div>
                    <div className="text-gray text-xs mt-">
                      <p>**** 0921 - Ilham Udin</p>
                      <p className="text-light">USD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-6 p-5 shadow-md rounded-md h-max">
                <div className="flex w-full md:pb-12 md:pt-2 justify-between">
                  <p className="font-semibold">Relasi</p>
                  <p className="text-green text-sm">Lihat Semua</p>
                </div>
                <div className="mt-2 flex items-center text-gray-dark">
                  <ShareAltOutlined className="text-2xl mr-4" />
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">20</h1>
                    <p className="text-light text-xs text-gray">Memiliki</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-dark">
                  <ShareAltOutlined className="text-2xl mr-4" />
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">180</h1>
                    <p className="text-light text-xs text-gray">Menggunakan</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-dark">
                  <ShareAltOutlined className="text-2xl mr-4" />
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">67</h1>
                    <p className="text-light text-xs text-gray">Meminjam</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:ml-6 md:mb-6 ">
              <div className="bg-white mt-6 p-5 rounded-md md:h-full md:w-full shadow-md">
                <p className="font-semibold">Aktivitas</p>
                <div className="mt-4 md:mt-8">
                  <p className="text-sm text-gray-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sapiente soluta laboriosam, eaque mag
                  </p>
                  <p className="text-gray mt-2 text-sm">Hari ini 09:00</p>
                </div>
                <div className="mt-4 md:mt-8">
                  <p className="text-sm text-gray-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sapiente soluta laboriosam, eaque mag
                  </p>
                  <p className="text-gray mt-2 text-sm">Hari ini 09:00</p>
                </div>
                <div className="mt-4 md:mt-8">
                  <p className="text-sm text-gray-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sapiente soluta laboriosam, eaque mag
                  </p>
                  <p className="text-gray mt-2 text-sm">Hari ini 09:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
