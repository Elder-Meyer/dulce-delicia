import { Box } from '@mui/material'
import { Slideshow, Slide, TextoSlide} from "./Slideshow"
import React from 'react'
import img1 from "../../../assets/img/inicio/banner_1.webp"
import img2 from "../../../assets/img/inicio/banner_2.webp"
import img3 from "../../../assets/img/inicio/banner_3.webp"
import { Link } from 'react-router-dom'

export const Carrusel = () => {
  return (
    <Box component={"main"} sx={{        
        width: "100%",
        overflow: "hidden",
    }}>
        <Slideshow controles={true} autoplay={true} /*velocidad='500' intervalo='3000'*/>
            <Slide>                
                <Link to='/categorias'>
                    <img src={img1} rel='preload' as="image" alt='img-carrusel-catedral-de-huejutla' />
                </Link>
            </Slide>

            <Slide>
                <Link to='/temporadas'>
                    <img src={img2} rel='preload' as="image" alt='img-carrusel-huejutla-centro' />
                </Link>
            </Slide>

            <Slide>
                <Link to='/personajes'>
                    <img src={img3} rel='preload' as="image" alt='img-carrusel-mural-emblematico' />                    
                </Link>
            </Slide>

        </Slideshow>
    </Box>
  )
}
