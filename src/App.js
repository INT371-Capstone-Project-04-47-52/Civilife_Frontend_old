import "./App.css";
import React,{ Component } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginGame from "./sceneGame/LoginGame";
import CustomCharacters from "./sceneGame/CustomCharacter"
import Home from "./sceneGame/Home";
import axios from "axios";
import Context from "./Context";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      // cart: {},
      // products: []
      // ,closetId:null
    
    };
    this.routerRef = React.createRef();
  }
  async componentDidMount() {
    let user = localStorage.getItem("user");
    const players = await axios.get(`${process.env.REACT_APP_API_URL}/allPlayers`);
    user = user ? JSON.parse(user) : null;
    // cart = cart ? JSON.parse(cart) : {};
    this.setState({ user, 
      // products: products.data
      // , cart 
    });
  }

  login = async (email, password) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email,  password }
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
   
    if(res.status === 200) {
      const  email  = res.data.email
      const user = {
        userId: 3,
        email,
        token: "Bearer " + res.data.token,
        // accessLevel: res.data.account.role === 'ADMIN' ? 0 : 1,
        // role: res.data.account.role
      
      }

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));

      return true;
    } else {
      return false;
    }
  }


  logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
   window.location.reload(false);
  };

  render() {
    return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginGame/>}/>
      <Route path="/ChooseCharacter" element={<CustomCharacters/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
      </div>

  )
  
}
}
