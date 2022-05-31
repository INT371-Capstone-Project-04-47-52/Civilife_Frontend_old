import background from "../assetGame/CustomCharacter/dressRoom.jpg";
import character from "../assetGame/CustomCharacter/Character.png";
import { Link } from "react-router-dom";
import React from "react";
function CustomCharacter() {


  
    return (
      <div
        className="App bg-cover bg-no-repeat bg-center fixed w-screen h-screen bg-fixed "
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="font-bold text-4xl my-4 mb-6 bg-white">เลือกตัวละคร</p>
        <div className="flex">
          <div className="flex justify-center w-1/2">
            <img className="object-contain h-144 mt-16" src={character} />
          </div>
          <div className="mb-8 mx-8 w-1/2">
            <div class="py-6  px-8  bg-sky-200  rounded-xl shadow-xl text-left ">
              <div class="mb-3">
                <label for="name" class="block text-gray-800 font-bold">
                  ชื่อ:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="ชื่อตัวละคร"
                  class="w-full border-gray-600 py-1 pl-3 rounded-lg border-1 mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="block text-gray-800 font-bold">
                  อาชีพ
                </label>
                <p className="w-full text-gray-600 border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600 bg-sky-100">
                  พนักงานบริษัท
                </p>
                {/* <input type="text" name="name" id="name" placeholder="username" class="w-full border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600" />
                 */}
              </div>
              <div class="mb-3">
                <label for="email" class="block text-gray-800 font-bold">
                  อธิบายประวัติตัวละคร
                </label>
                <p className="w-full text-gray-600 border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600 bg-sky-100">
                  ที่อยู่: คอนโดหรูหรา ประเภทที่อยู่: คอนโด ค่าเช่า: 2,000 /
                  เดือน
                  <br></br>
                  สถานที่ทำงาน : ตึกมหานคร<br></br>
                  ตำแหน่ง : พนักวานบริษัทไอที
                  <br></br>
                  เดินทาง : รถเมล์ แท็กซี่ วิน
                  <br></br>
                  สนใจเครื่องดื่ม : กาแฟเย็น
                  <br></br>
                  เป้าหมาย : เก็บเงินเปิดคาเฟ่ กิจกรรมยามว่าง :
                  อ่านหนังสือในร้านกาแฟ นวดสปา
                </p>
              </div>
              <div class="mb-3">
                <label for="email" class="block text-gray-800 font-bold">
                  เงินเดือน
                </label>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container bg-green-500 w3-round-xlarge w-1/2 text-white my-2">
                    15,000
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="block text-gray-800 font-bold">
                  พลังงาน
                </label>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container bg-sky-500 w3-round-xlarge w-4/5 text-white my-2">
                    80/100
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="block text-gray-800 font-bold">
                  ความสุข
                </label>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container bg-pink-400 w3-round-xlarge w-2/12 text-white my-2">
                    10/100
                  </div>
                </div>
              </div>
              <div className="flex  justify-center">
                <nav>
                  <Link to="/Home">
                    <button className="my-8 bg-green-500 text-white text-2xl font-bold py-2 px-12 border-b-8 hover:border-b-16 hover:border-t-2 border-green-600 hover:border-blue rounded-lg">
                      เริ่มเกม
                    </button>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <Link to="/">
            <div className="absolute left-20 bottom-5 ">
              <button className="my-8 bg-orange-700 text-white text-2xl font-bold py-4 px-16 border-b-8 hover:border-b-16 hover:border-t-2 border-orange-800 hover:border-blue rounded-lg">
                กลับหน้าหลัก
              </button>
            </div>
          </Link>
        </nav>
      </div>
    );
  }

export default CustomCharacter;
