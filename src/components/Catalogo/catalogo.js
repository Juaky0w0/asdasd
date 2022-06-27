
import React from 'react';
import '../Catalogo/catalogo.css'
import { CataProd } from './produc'



export const Catalogo = () => {

  return (
    <>
      <div className='xddd'>
        Hola<br />
        xD
      </div>
      <div className='container-products'>
        <div className='cabezera'>
          <h2>Catálogo de Productos</h2>
          <div className='filtros-cabeza'>
            <select className='orden' name="ordenar" id="">
              <option value="volvo">Nombre: Ordenar de A a Z</option>
              <option value="volvo">Nombre: Ordenar de Z a A</option>
            </select>
            </div>
            <div>           
            <input type="search" className='buscar' placeholder='Buscar Producto' />
          </div>
        </div>
        <div className='conteCata'>

          <div className='filtros'>
          <div className='categorias'>
              <h3>Categorias</h3>
              <select className='combocate' name="order" id="categoria">
                <option value="">Todas los Productos</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div> 
                     
            <div className='marcas'>
              <h3>Marcas</h3>
              <select className='combomarca' name="order" id="categoria">
                <option value="">Todas las Marcas</option>
                <option value="marca1">marca1</option>
                <option value="marca2">marca2</option>
                <option value="marca3">marca3</option>
                <option value="marca4">marca4</option>
              </select>
            </div>
          </div>

          <div className='catalogo'>  
          <div className='divCata'>        
              <CataProd />
            </div>         
          </div>

        </div>
      </div>
      <div className='lineamap'>
        <ul className='listamapn'>
          <li><i class="fa-solid fa-angle-left"></i></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li><i class="fa-solid fa-angle-right"></i></li>
        </ul>
      </div> 		
    </>

    
  )
}
