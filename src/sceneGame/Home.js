import background from "../assetGame/HomePage/MainBG.jpg";
import { Link } from "react-router-dom";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    };                  // state to control the state of popup
  }
  
  handleOpen = () => {
    this.setState({ isOpen: true });
  }
  
  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div
        className="App bg-cover bg-no-repeat bg-center fixed w-screen h-screen bg-fixed "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute bg-sky-400 right-0  w-3/12 border border-gray-800 text-left p-2 m-2 rounded-xl">
          <div className="columns-2">
            <div className=" ">
              <label for="email" className="block text-gray-800 font-bold">
                Username
              </label>
              <p className=" text-gray-600 border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600 bg-sky-100">
                Kpinnoes
              </p>
              {/* <input type="text" name="name" id="name" placeholder="username" class="w-full border-gray-600 py-1 pl-3 rounded-lg border-1  outline-none focus:ring-indigo-600 :ring-indigo-600" />
               */}
            </div>
            <div className="">
              <label for="email" className="block text-gray-800 font-bold">
                ตั้งค่า
              </label>

              <i className="material-icons">settings</i>

              {/*เปิดปิด popup */}
              <div>
      
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

        <div className="bg-green-200 w-2/6 border border-gray-800 text-left p-2 m-2 rounded-xl">
        
          {/* <div className="">
          <p className="">เงิน: </p>    <div className="w3-light-grey w3-round-xlarge ">
              <div
                className="w3-container  w3-center text-sm bg-green-500 text-white w3-round-xlarge"
                style={{ width: "80%" }}
              >
                15,000
              </div>
            </div>
          </div> */}
           <div>
           <label>ชื่อ : นรานี</label> <label>นามสกุล : ศรีสุกุล </label> <br></br>
            <label>เงิน : </label>
            <div className=" w3-light-grey w3-round-xlarge">
              <div
                className="w3-container  w3-center  text-sm bg-green-500 text-white w3-round-xlarge"
                style={{ width: "70%" }}
              >
                13,480 บาท
              </div>
            </div>
          </div>
          <div>
            <label>พลังงาน : </label>
            <div className=" w3-light-grey w3-round-xlarge">
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
            <div className="w3-light-grey w3-round-xlarge">
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
        <div className="bg-yellow-200 w-3/12 border border-gray-800 text-left p-2 m-2 rounded-xl">
          <div className="">
            <p className="font-bold">ภารกิจประจำวัน</p>
            <p>1.เดินทางด้วยรถรถโดยสาร ✅</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
