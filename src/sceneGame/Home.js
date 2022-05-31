import background from "../assetGame/HomePage/MainBG.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Popup from "./Popup";
import aboutGame from "../assetGame/HomePage/AboutGame.png";
import Bank from "../assetGame/HomePage/Bank.jpg"
import Market from "../assetGame/HomePage/Market.jpg"
import Happy from "../assetGame/HomePage/Happy.jpg"
import Travel from "../assetGame/HomePage/Travel.png"
import Resturant from "../assetGame/HomePage/Restuarant.png"
import Hospital from "../assetGame/HomePage/Hospital.jpg"
import Result from "../assetGame/HomePage/Result.jpg"
// To include the default styles

// Not using an ES6 transpiler

function Home() {
  // var slider = document.getElementById("myRange");
  // var output = document.getElementById("demo");
  // output.innerHTML = slider.value;

  // slider.oninput = function() {
  //   output.innerHTML = this.value;
  // }

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="App bg-cover bg-no-repeat bg-center fixed w-screen h-screen bg-fixed "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute bg-sky-400 right-0  w-3/12 border border-gray-800 text-left p-2 m-2 rounded-xl">
        <div className="columns-2">
          <div class=" ">
            <label for="email" class="block text-gray-800 font-bold">
              Username
            </label>
            <p className=" text-gray-600 border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600 bg-sky-100">
              Kpinnoes
            </p>
            {/* <input type="text" name="name" id="name" placeholder="username" class="w-full border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600" />
             */}
          </div>
          <div class="">
            <label for="email" class="block text-gray-800 font-bold">
              ตั้งค่า
            </label>

            <div>
              <button onClick={togglePopup}>
                <i class="material-icons">settings</i>
              </button>
              {isOpen && (
                <Popup
                  content={
                    <div>
                      {/* <img className="w-1/2 mx-auto " src={aboutGame} alt="Logo" /> */}
                      <p1 className="text-5xl text-center justify-center mx-auto flex">
                        ตั้งค่าเกม
                      </p1>
                      {/* เราจะมาช่วยคุณบริหารจัดการเวลาชีวิต
โดยการให้คุณได้จำลองเป็นพนักงานบริษัท
โดยระหว่างการทำกิจกรรมจะมี “ภารกิจ” 
ระหว่างที่คุณเล่นเกมต้องทำให้ตัวละครได้ไป 
 “ ทำงาน คำนวณค่าใช้จ่าย เส้นทางการเดินทาง ในแต่ละวัน”
เพื่อให้เกมถึงความสำเร็จให้เร็วขึ้นจะต้องเล่นจนตัวละครได้ทดลองใช้ชีวิตประจำเป็นเวลา 1 เดือน
เราจะสามารถที่จะคำนวณค่าใช้จ่าย 
และประเมินการเล่นของคุณให้ว่าคุณสามารถจำลองชีวิตได้อย่างไร   */}
                      <div>
                        <div>ปรับเสียงเอฟเฟกต์</div>{" "}
                        <div class="w3-light-grey w3-round-xlarge ">
                          <div
                            className="w3-container  w3-center text-sm bg-blue-500 text-white w3-round-xlarge"
                            style={{ width: "80%" }}
                          >
                            15,000
                          </div>
                        </div>
                        <div>เสียงเกม</div>{" "}
                        <div class="w3-light-grey w3-round-xlarge ">
                          <div
                            className="w3-container  w3-center text-sm bg-green-500 text-white w3-round-xlarge"
                            style={{ width: "80%" }}
                          >
                            15,000
                          </div>
                        </div>
                      </div>
                      <div className="columns-2">
                        {" "}
                        <div className="flex  justify-center">
                          <nav>
                            <Link to="/Home">
                              <button className="my-8 bg-sky-500 text-white text-2xl font-bold py-2 px-12 border-b-8 hover:border-b-16 hover:border-t-2 border-sky-600 hover:border-blue rounded-lg">
                                คู่มือเกม
                              </button>
                            </Link>
                          </nav>
                        </div>
                        <div className="flex  justify-center">
                          <nav>
                            <Link to="/Home">
                              <button className="my-8 bg-pink-500 text-white text-2xl font-bold py-2 px-12 border-b-8 hover:border-b-16 hover:border-t-2 border-pink-600 hover:border-blue rounded-lg">
                                วิธีการเล่น
                              </button>
                            </Link>
                          </nav>
                        </div>
                      </div>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>

            {/*เปิดปิด popup */}
            <div>
              {/* <Popup
          trigger={<button>click to open</button>}
          content={<button onClick={this.handleClose}>click to close</button>}
          on='click'
          open={this.state.isOpen}
          onOpen={this.handleOpen}
        /> */}
            </div>
            {/* <div className="popup">
                <div className="popup_inner">
                  <h1>{this.props.text}</h1>
                  <button onClick={this.props.closePopup}>close me</button>
                </div>
              </div> */}
            {/* <input type="text" name="name" id="name" placeholder="username" class="w-full border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600" />
             */}
          </div>
        </div>
      </div>
      <div className="absolute right-0 m-8"></div>

      <div className="bg-yellow-200 w-2/6 border border-gray-800 text-left p-5 m-2 rounded-xl">
        <p>
          <label>ชื่อ : นรานี</label> <label>นามสกุล : ศรีสุกุล </label>
        </p>
        <div className="">
          <div>
            <p>เงิน: </p>
          </div>

          <div class="w3-light-grey w3-round-xlarge ">
            <div
              className="w3-container  w3-center text-sm bg-green-500 text-white w3-round-xlarge"
              style={{ width: "80%" }}
            >
              15,000
            </div>
          </div>
        </div>
        <div>
          <label>พลังงาน : </label>
          <div class=" w3-light-grey w3-round-xlarge">
            <div
              className="w3-container  w3-center  text-sm bg-sky-500 text-white w3-round-xlarge"
              style={{ width: "20%" }}
            >
              20%
            </div>
          </div>
        </div>
        <div>
          <label>ความสุข : </label>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              className="w3-container  w3-center text-sm bg-orange-400 text-white w3-round-xlarge"
              style={{ width: "55%" }}
            >
              55%
            </div>
          </div>
        </div>
      </div>

      {/* <img className="w-128 mx-auto mt-24" alt="" src={nameCivilife} />
      <nav>
        <Link to="chooseCharacter">
          <button>
            <img className="w-64 mx-auto mt-24 ml-6" alt="" src={startButton} />
          </button>
        </Link>
      
      </nav> */}
      <div className="bg-yellow-200 w-3/12 border border-gray-800 text-left p-5 m-2 rounded-xl">
        <div className="">
          <p className="font-bold">ภารกิจประจำวัน</p>
          <p>1.เดินทางด้วยรถรถโดยสาร ✅</p>
          <p>2.รับประทานอาหารมื้อเช้า ✅</p>
          <p>3.เดินทางให้ทันภายใน 9.00 น. ✅</p>
        </div>
      </div>
<div className="m-8 ">
  {/*import Bank from "../assetGame/HomePage/Bank.jpg"
import Market from "../assetGame/HomePage/Market.jpg"
import Happy from "../assetGame/HomePage/Happy.jpg"
import Travel from "../assetGame/HomePage/Travel.png"
import Resturant from "../assetGame/HomePage/Restuarant.png"
import Hospital from "../assetGame/HomePage/Hospital.jpg"
import Result from "../assetGame/HomePage/Result.jpg" */}
              {/* <div className="flex  justify-center">
                <nav>
                  <Link to="/Bank">
                    <button className="my-8 bg-green-500 text-white text-2xl font-bold py-2 px-12 border-b-8 hover:border-b-16 hover:border-t-2 border-green-600 hover:border-blue rounded-lg">
                      ธนาคาร
                    </button>
                  </Link>
                </nav>
              </div> */}
     </div>
    </div>
  );
}

export default Home;
