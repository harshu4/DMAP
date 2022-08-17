import logo from './logo.svg';
import './Loader.css';


function Loader(props) {
    return (
    
        <div class="container">
<div class="loading-retro">
<div class="retro-line retro-green"></div>
<div class="retro-line retro-yellow"></div>
<div class="retro-line retro-red"></div>
<div class="retro-line retro-darkblue"></div>
<div class="loading-circle"></div>

</div>
<h1 style={{color:"white"}}>{props.message}</h1>


</div>
    );
  }


export default Loader;
  