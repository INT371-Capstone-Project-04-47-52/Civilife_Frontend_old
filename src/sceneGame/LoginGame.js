import background from "../assetGame/LoginPage/Home.png";
import nameCivilife from "../assetGame/LoginPage/nameCivilife.png";
import startButton from "../assetGame/LoginPage/startButton.png";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";
class LoginGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })     
  };
  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    return !this.props.context.user ? (
      <div
        className="App bg-cover bg-no-repeat bg-center fixed w-screen h-screen bg-fixed "
        style={{ backgroundImage: `url(${background})` }}
      >
        <img className="w-128 mx-auto mt-24" alt="" src={nameCivilife} />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <div className="mt-24 flex">
          <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
            <form
              onSubmit={this.loginData}
              className="mt-2 flex flex-col lg:w-1/2 w-8/12 "
            >
              <div className="bg-sky-400 px-8 py-2 rounded-xl">
                <p className="text-white text-3xl ">ลงชื่อเข้าใช้</p>
                <div className="flex flex-wrap border-2 border-gray-200 rounded-xl items-stretch w-full mb-4 relative h-15 bg-white items-center mb-6 pr-10">
                  <div className="flex -mr-px justify-center w-15 p-4">
                    <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                      <i className="fas fa-user-circle"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                    placeholder="Username"
                  />
                </div>
                <div className="flex flex-wrap items-stretch border-2 border-gray-200 rounded-xl w-full relative h-15 bg-white items-center  mb-4">
                  <div className="flex -mr-px justify-center w-15 p-4">
                    <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <div className="flex -mr-px">
                    <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                      <i className="fas fa-eye-slash"></i>
                    </span>
                  </div>
                </div>
              </div>
            </form>
            {/* {this.state.error && (
            <div className="has-text-danger">{this.state.error}</div>
          )} */}
          </div>
          
        </div>
        <nav>
          <Link to="/ChooseCharacter">
            <button>
              <img
                className="w-1/2 mx-auto py-5"
                alt=""
                src={startButton}
              />
            
              </button>
            
            
          </Link>
        </nav>
      </div>
     ) : (
      <Redirect to="/Customer" />
  ); 
  }
}

export default LoginGame;
