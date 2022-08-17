import logo from './logo.svg';
import './App.css';
import { ArrowRight, FileX } from 'react-bootstrap-icons';
import Typed from 'react-typed';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <nav>
      <div class="logo">
        <img src="https://akbarhlubis.github.io/asset/icon/Logo.png" alt=""/>
      </div>
     
    </nav>
    
  
    <div class="hero" style={{paddingTop:"100px"}}>
      <div class="left-hero">
        <div class="heading">
        <Typed style={{color:"white",fontSize:"40px"}}
                    strings={['Serving Dynamic Media </br> With Decentralization']}
                    typeSpeed={40}
                    loop
                    
                />
        </div>
        <div class="paragraph">
          <span id="typed"></span>
          <p>Utilize the power of  <strong class="kotamie">IPFS and Fluence </strong> to serve your users dynamic content in a <strong class="kotamie">Decentralized Manner</strong>. Let's Embrace Decentralization and make the web more <strong class="rendang"> Accessible and Resistant</strong></p>
          <div class="pills">
          <span class="pill">Try our SDK 📥</span>
          <span class="pill">Use the Dashboard 🎨</span>
          </div>
     
        </div>
      </div>
      <div class="right-hero">
        <div class="img">
          <figure class="imgure">
            <img class="profile" src='imgg.jpg' />
          </figure>
        </div>
        <div class="medsos">
          <span><a href="instagram.com"><i class="bi bi-instagram"></i></a></span>
          <span><a href="instagram.com"><i class="bi bi-github"></i></a></span>
          <span><a href="instagram.com"><i class="bi bi-dribbble"></i></a></span>
        </div>
      </div>
 
    </div>
    
    <footer>
    <p style={{alignSelf:"center",textAlign:"center",color:"white"}}>Powered By</p>
      <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
        <img src="ipfs.png" style={{height:"30px",width:"30px"}}></img>
        <img src="fluence.png" style={{height:"30px",width:"30px"}}></img>
      </div>
      <p class="teks-footer">
        2022 | <strong class="strong-footer">Designed</strong> and <strong class="strong-footer">Builted</strong> With <strong class="api"><a href="github.com">🔥</a></strong> by <strong class="strong-footer">OverclockedBrains</strong>
      </p>
     
    </footer>
    </div>
  );
}

export default App;
