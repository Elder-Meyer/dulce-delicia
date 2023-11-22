import React from 'react'
import { Paper, Grid, Container, Card, CardMedia, Typography } from '@mui/material';

import { Carrusel } from './Carrusel/Carrusel';
import promo_02 from '../../assets/img/inicio/promo_02.webp'
import promo_03 from '../../assets/img/inicio/promo_03.webp'
import promo_04 from '../../assets/img/inicio/promo_04.webp'
import promo_05 from '../../assets/img/inicio/promo_05.webp'
import promo_06 from '../../assets/img/inicio/promo_06.webp'
import promo_07 from '../../assets/img/inicio/promo_07.webp'
import promo_08 from '../../assets/img/inicio/promo_08.webp'
import promo_09 from '../../assets/img/inicio/promo_09.webp'
import promo_10 from '../../assets/img/inicio/promo_10.webp'
import promo_11 from '../../assets/img/inicio/promo_11.webp'
import promo_12 from '../../assets/img/inicio/promo_12.webp'
import styled from '@emotion/styled';
import { WavyDivider } from '../../components/customs/WavyDivider';
import { SliderProductoNavidad } from './SliderProductoNavidad';
import { SliderProductoPinata } from './SliderProductoPinata';
import { getProductosNavidadData } from '../../utils/fnProductos';
import { useState } from 'react';
import { useEffect } from 'react';


export const Inicio = () => {
  const [productosNavidad, setProductosNavidad] = useState(null);     //estados para almacenar la info de las diferentes colecciones

  const getProductosNavidad = async() => {                //obtenemos los datos en general para poder mandarlos a otros componentes
    const p = await getProductosNavidadData();
    setProductosNavidad(p.docs);
  }

  useEffect(()=>{                                     //ejecuta la funcion al inicio para obtener los datos
    getProductosNavidad();
    console.log(productosNavidad);
  }, []);

  return (
    <>
      {/* SECTION ONE -- CARRUSEL */}
      <Paper component="article" elevation={0}>
        <Carrusel />
      </Paper>
      <WavyDivider invertColors/>

      <Container maxWidth="xl">
        {/* SECTION TWO */}
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
              <Grid container columnSpacing={2} py={5} my={{xs: 0, md:5}}>
                <Grid item container xs={12} lg={12} direction="column" justifyContent="center" alignItems="flex-start">
                  <Typography gutterBottom variant="h4" component="p" color="primary" fontWeight={700}>
                    PRODUCTOS NAVIDEÑOS
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <SliderProductoNavidad CardHover={CardHover} productosNavidad={productosNavidad} />
                </Grid>
              </Grid>
          </Container>
        </Paper>

        {/* SECTION THREE  */}
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            <Grid container spacing={3} p={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    // sx={{display: "block", position: "relative"}}
                    // sx={{transition: "transform .5s ease", "&:hover": { transform: "scale(1.2)"},}}
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_02}
                    title="promo_02"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_03}
                    title="promo_03"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_04}
                    title="promo_04"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_05}
                    title="promo_05"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_06}
                    title="promo_06"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_07}
                    title="promo_07"
                  />
                </CardHover>
              </Grid>


              <Grid item xs={12} sm={4} md={4} lg={4}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_08}
                    title="promo_08"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_09}
                    title="promo_09"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_10}
                    title="promo_10"
                  />
                </CardHover>
              </Grid>
              

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_11}
                    title="promo_11"
                  />
                </CardHover>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardHover>
                  <CardMedia
                    component={"img"}
                    width={"100%"}
                    height={"100%"}
                    image={promo_12}
                    title="promo_12"
                  />
                </CardHover>
              </Grid>
            </Grid>
          </Container>
        </Paper>


        {/* SECTION FOUR */}
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
              <Grid container columnSpacing={2} py={5} my={{xs: 0, md:5}}>
                <Grid item container xs={12} lg={12} direction="column" justifyContent="center" alignItems="flex-start">
                  <Typography gutterBottom variant="h4" component="p" color="primary" fontWeight={700}>
                    BOLSAS PIÑATERAS
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <SliderProductoPinata CardHover={CardHover}/>
                </Grid>
              </Grid>
          </Container>
        </Paper>
        
      </Container>
    </>
  );
}

const CardHover = styled(Card)({
  display: "inline-block", position: "relative", 
  "&:after":{
    content: '""',
    position: "absolute",
    top: 0, right: 0, bottom: 0, left: 0,
    boxShadow: "inset 0 0 0 0 rgba(255,255,255,.5)",
    transition: "box-shadow .1s ease"
  },
  "&:hover:after":{ boxShadow: "inset 0 0 0 15px rgba(255,255,255,.5)" },
  "& > img":{ transition: "transform .5s ease" },
  "&:hover > img": { transform: "scale(1.2)"}

});

