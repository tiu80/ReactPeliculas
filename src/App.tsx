import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearActores from './actores/CrearActores';
import EditarActores from './actores/EditarActores';
import IndiceActores from './actores/IndiceActores';
import './App.css';
import CrearCine from './cines/CrearCine';
import EditarCine from './cines/EditarCine';
import InidiceCines from './cines/IndiceCines';
import CrearGenero from './generos/CrearGenero';
import EditarGenero from './generos/EditarGenero';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import CrearPelicula from './peliculas/CrearPelicula';
import EditarPelicula from './peliculas/EditarPelicula';
import FiltroPeliculas from './peliculas/FiltroPeliculas';
import Menu from './utils/Menu';
import configurarvalidaciones from './validaciones';

configurarvalidaciones();

function App() {

 function NotFound(){
    return <><h5>Pagina Inexistente</h5></>
 }

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/generos/crear" element={<CrearGenero/>}/>
          <Route path="/generos/editar/:id" element={<EditarGenero/>}/>
          <Route path="/generos" element={<IndiceGeneros/>}/>

          <Route path="/actores/crear" element={<CrearActores/>}/>
          <Route path="/actores/editar/:id" element={<EditarActores/>}/>
          <Route path="/actores" element={<IndiceActores/>}/>

          <Route path="/cines/crear" element={<CrearCine/>}/>
          <Route path="/cines/editar/:id" element={<EditarCine/>}/>
          <Route path="/cines" element={<InidiceCines/>}/>

          <Route path="/peliculas/crear" element={<CrearPelicula/>}/>
          <Route path="/peliculas/editar/:id" element={<EditarPelicula/>}/>
          <Route path="/peliculas/Filtrar" element={<FiltroPeliculas/>}/>

          <Route path="*" element={NotFound()}/>

        </Routes>
      </div>
    </BrowserRouter>
    </>
  );

}

export default App;
