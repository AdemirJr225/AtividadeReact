import logo from "./images/logotrip.jpg";
import './App.css';
import tokyo from "./images/tokyo.jpg";
import newyork from "./images/newyork.jpg";
import london from "./images/londres.jpg";




function App() {
  return (
    <div className="App">

      <div className="cabecalho">
        <div className="nav">
          <img src={logo} />

          <a className="navlinks" href="#"> Home </a>
          <a className="navlinks" href="#"> Pacotes </a>
          <a className="navlinks" href="#"> Passagens </a>
          <a className="navlinks" href="#"> Destinos </a>
          <a className="navlinks" href="#"> Login  </a>

        </div>

      </div>
      <div className="conteudo">
        <div className="itemsHeader1"> 
        <h2>As melhores viagens, pelos melhores preços </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    
        </p>
         </div>

        <div className="destinos">
          <img src={tokyo}/>
          <img src={newyork}/>
          <img src={london}/>
        </div>

      

      </div>

      <div className="galeria">
        

      </div>

      













      
    </div>





  );
}





export default App;
