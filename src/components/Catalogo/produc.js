import React, {useState} from 'react';
import Slider from "react-slick";
import '../Catalogo/catalogo.css'
import { listadePro} from '../data';
import { Modal } from '../Modal';
import styled from 'styled-components';
import img1a from '../../img/prod1.png'

export function CataProd(){
    const [estadoModal3, cambiarEstadoModal3] = useState(false);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };    
    return(
        <>
        <div className="contenedorTarjetas">
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                 <div className="btnprod">
                 <a  className="cons" href=""><i class="fa fa-whatsapp "></i> CONSULTAR</a>
                <a className="verpro" onClick={() => cambiarEstadoModal3(!estadoModal3)}>VER PRODUCTO</a>
                 </div>                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                 <button className="prodagot">AGOTADO</button>
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        <div className="catprod">
            <Slider {...settings}>
             {listadePro.map(item=>(
                 <div className="cardPro">
                 <div className="carttopPro">
                 <h4>{item.title}</h4>
                 <p>{item.subtitle}</p>
                 <p>{item.marca}</p>
                 <img src={item.linkimg} alt={item.title}/>                 
                 </div>
                
             </div>
            ))}      
            </Slider> 
        </div>
        </div>

        <Modal
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo="Aceite Distro DT-11"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'start'}
				padding={'40px'}
			>
				<Contenido>
					<img src={img1a} alt="" />
                    <p>Aceite Distro DT-11 marca NYNAS...</p>
				</Contenido>
			</Modal>      
    </>
    );
}

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;