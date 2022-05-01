import logo from "./images/logotrip.jpg";
import './App.css';
import tokyo from "./images/tokyo.jpg";
import newyork from "./images/newyork.jpg";
import london from "./images/londres.jpg";
import rio from "./images/rio.jpg";
import icon1 from "./images/pacoteicon.png";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";
import insta from "./images/insta.png";
import zap from "./images/zap.png";
import face from "./images/face.png";
import twitter from "./images/twitter.png";


function App() {
  return (
    <div className="App">

      <div className="cabecalho">
        <div className="nav">
          <img src={logo} />

          <a className="navlinks" href="#"> Home </a>
          <a className="navlinks" href="#"> Pacotes </a>
          <a className="navlinks" href="#"> Destinos </a>
          <a className="navlinks" href="#"> Minhas viagens </a>
          <a className="navlinks" href="#"> Login  </a>

        </div>

      </div>
      <div className="conteudo">
        <div className="itemsHeader1"> 
        <h2>As melhores viagens, pelos melhores preços </h2>
        <p> Confira aqui os melhores pacotes que separamos para você!
    
        </p>
         </div>

        <div className="destinos">

           <div className="conteiner">
           <a href="#"><img src={tokyo} className="pacotes" />
           <h3>Tokyo - Japão</h3>
             <img src={icon1} className="icon"/>
             <p> 03 Ago 2022 - 12 Ago 2022 </p>
             <p className="infovalor">Valores a partir de</p>
             <h4 className="valor">R$ 2100</h4>
             </a>
           </div>

           <div className="conteiner">
           <a href="#"><img src={london} className="pacotes"/>
            <h3>Londres - Inglaterra</h3>
            <img src={icon1} className="icon"/>
            <p> 16 Out 2022 - 26 Out 2022</p>
            <p className="infovalor">Valores a partir de</p>
             <h4 className="valor">R$ 1700</h4></a>  
          </div>

           <div className="conteiner">
           <a href="#"><img src={newyork} className="pacotes" />
             <h3>Nova Iorque - EUA</h3>
             <img src={icon1} className="icon"/>
             <p> 08 Jun 2022 - 19 Jun 2022</p>
             <p className="infovalor">Valores a partir de</p>
             <h4 className="valor">R$ 2000</h4> </a> 
           </div>

           <div className="conteiner">
           <a href="#"><img src={rio} className="pacotes" />
             <h3>Rio de Janeiro - Brasil</h3>
             <img src={icon1} className="icon"/>
             <p> 10 Jul 2022 - 15 Jul 2022</p>
             <p className="infovalor">Valores a partir de</p>
             <h4 className="valor">R$ 700</h4></a>
           </div>

            <div className="vermais">
            <a href="#"><h2>Ver mais </h2></a>
            </div>

      
           


         
        </div>

        


      </div>

      <div className="galeria">
      <div className="content">
        <div className="slides">
            <input className="input" type="radio" name="slide" id="slide1"/>
            <input className="input" type="radio" name="slide" id="slide2"/>
            <input className="input" type="radio" name="slide" id="slide3"/>
            <input className="input" type="radio" name="slide" id="slide4"/>
            <input className="input" type="radio" name="slide" id="slide5"/>
            <input className="input" type="radio" name="slide" id="slide6"/>

            <div className="slide s1">
            <img src={slide1} />

            </div>

            <div className="slide">
            <img src={slide2}/>
                
            </div>

            <div className="slide">
            <img src={slide3}/>
                
            </div>

            <div className="slide">
            <img src={slide4}/>
                
            </div>

            <div className="slide">
            <img src={slide5}/>
                
            </div>

            <div className="slide">
            <img src={slide6}/>
                
            </div>

            <div className="navigation">
                <label className="bar" for="slide1"></label>
                <label className="bar" for="slide2"></label>
                <label className="bar" for="slide3"></label>
                <label className="bar" for="slide4"></label>
                <label className="bar" for="slide5"></label>
                <label className="bar" for="slide6"></label>
            </div>
            </div>

        </div>
        </div>

        <div className="footer">

          <div className="redes">
            <a href="#"><img className="redesres" src={insta}/></a>
            <a href="#"><img className="redesres" src={zap}/></a>
            <a href="#"><img className="redesres" src={face}/></a>
            <a href="#"><img className="redesres" src={twitter}/></a>

          </div>

          <div className="footerlinks">

          <a className="fotlinks" href="#"> Home </a>
          <a className="fotlinks" href="#"> Pacotes </a>
          <a className="fotlinks" href="#"> Destinos </a>
          <a className="fotlinks" href="#"> Minhas viagens </a>
          <a className="fotlinks" href="#"> Login  </a>


          </div>

        </div>
        <div className="infofooter">

            <h3>Projeto front-end em react de uma companhia de viagens</h3>
            <p>Projeto criado por Ademir Alves Equipe 1 PROA 2022 </p>
            
          </div>

  
    </div>





  );
}





export default App;
