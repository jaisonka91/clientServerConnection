import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const MOUNT_NODE = document.getElementById("mount");

class Test extends Component {

  componentDidMount(){
    axios.get('/api').then((data)=>{
      console.log(data,'.>>>>>>>>>>>ss')
    })
  }

  render() {
    return (
      <div>
        <h1>hihihihihiihhhhhhi</h1>
      </div>
    );
  }
}

ReactDOM.render(<Test />, MOUNT_NODE);
