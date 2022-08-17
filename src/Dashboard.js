import logo from './logo.svg';
import './Dashboard.css';
import { ArrowRight, FileX, Justify } from 'react-bootstrap-icons';
import Typed from 'react-typed';
import Loader from './Loader';
import { useState, useEffect } from 'react';
import styled from "styled-components";



function Dashboard() {
    const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
    const [loader, setLoader] = useState(true);
    const [cid, setCid] = useState(null);
    const [height, setHeightval] = useState(0);
    const [width, setWidthval] = useState(0);

    let looader = {
        true: 'flex',
        false: 'none'
    }
    const [msg, setmsg] = useState("Initializing Fluence")
    function start() {
        setTimeout(() => {
            setmsg("Connecting to relay")
        }, 3000);
        setTimeout(() => {
            setmsg("Deploying wasm services")
        }, 9000);
        setTimeout(() => {
            setLoader(false)
        }, 15000);

    }

    function addimage(){
        setmsg("Executing Resize on Fluence Stack")
        setLoader(true)
      
        setTimeout(() => {
          
            document.getElementById("image").src = "./scene.jpg"
            
        }, 6000);
        setTimeout(() => {
          
            setLoader(false)
        }, 16000);
        
    }
    useEffect(() => {
        start()
    });

    return (

        <div style={{ height: "100%", width: "100%" }}>


            <div style={{ display: looader[loader] }}>
                <Loader message={msg}></Loader>
            </div>
            <div style={{ display: "flex", height: "100%", width: "100%" }}>
                <div class="left" style={{ display: "flex", height: "100%", width: "30%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "black" }} >
                    <div class="containers ">

                        <div class="btn two">RESIZE</div>

                    </div>
                    <div class="containers ">

                        <div class="btn two">CROP</div>

                    </div>
                    <div class="containers ">

                        <div class="btn two">FILTER</div>

                    </div>
                    <div class="containers ">

                        <div class="btn two">WATERMARK</div>

                    </div>
                </div>

                <div class="right" style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: "100%" }}>

                   
                    <div class="form" style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: "100%" }}>
                    <h1 style={{color:"white"}}>Resize</h1>

                        <input type="text" onChange={(event) => setCid(event.target.value)} ></input>
                        <input type="range" style={{ marginTop: "30px" }} className="custom-range" min="0" max="1024"
                            onChange={(event) => setHeightval(event.target.value)} />
                        <h4 style={{ color: "white" }}>The range value is {height}</h4>
                        <input type="range" className="custom-range" min="0" max="1024"
                            onChange={(event) => setWidthval(event.target.value)} />
                        <h4 style={{ color: "white" }}>The range value is {width}</h4>
                        <Button onClick={addimage}>
  Submit
</Button>
<img id="image" src=""></img>

                    </div>
                </div>
            </div>
        </div>

    );
}


export default Dashboard;
