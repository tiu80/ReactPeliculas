import { useEffect, useState } from 'react';
import ListadoPelicula from './peliculas/ListadoPelicula';
import { landingPageDTO } from './peliculas/peliculas.model';

export default function LandingPage(){

    useEffect(()=>{
        const timerId = setTimeout(()=>{
          setPeliculas({
            enCartelera:[
              {id:1, titulo:"Spider man de regreso a casa", poster:"https://th.bing.com/th/id/R.f1a5c57dd965663a0be63e2aa03dce5b?rik=7tYmYvBzxraoDQ&pid=ImgRaw&r=0"},
              {id:2, titulo:"Thor is Back", poster:"https://th.bing.com/th/id/R.1364ead0da0d73884473f4a1ec9fb815?rik=vyCv0AwrxGRo8w&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f29400000%2fThor-the-avengers-29489278-1866-2560.jpg&ehk=1P5GZMWj1%2fSqovtKy1%2fdaZciPaWtW%2bWgrOx9bwfJ558%3d&risl=&pid=ImgRaw&r=0"},
              {id:3, titulo:"Soonic el heroe", poster:"https://diario.mx/jrz/media/uploads/galeria/2020/02/14/20200214072725345-0-1628015.jpg"}
            ],
            proximosExtrenos:[
              {id:4, titulo:"Soul", poster:"https://lumiere-a.akamaihd.net/v1/images/soul_poster_4_4c70209a.jpeg"}
            ]
          })
        },1000);
    
        return () => clearTimeout(timerId);
      })
    

    const [peliculas,setPeliculas] = useState<landingPageDTO>({});

    return(
        <>
            <h3>En cartelera</h3>
            <ListadoPelicula peliculas={peliculas.enCartelera}/>

            <h3>Proximos Extrenos</h3>
            <ListadoPelicula peliculas={peliculas.proximosExtrenos}/>
        </>
    )
}