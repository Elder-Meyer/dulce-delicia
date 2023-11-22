import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { LoaderAnimation } from '../../components/customs/LoaderAnimation';

export const SliderProductoNavidad = ({CardHover, productosNavidad}) => {
  return (
    <>
      {productosNavidad ? (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {productosNavidad.map((producto, index) => (
            <BoxContent key={index}>
              <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                <CardMedia
                  sx={{ userSelect: "none", pointerEvents: "none" }}
                  component="img"
                  height={"100%"}
                  image={producto.data().imagen}
                  alt={producto.data().nombre}
                />
              </CardHover>
              <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                {producto.data().nombre}
              </Typography>
              <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                $ {producto.data().precio}
              </Typography>
            </BoxContent>
          ))}
        </Carousel>
      ) : (
        <LoaderAnimation section />
      )}
    </>
  )
}


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 304 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 304, min: 0 },
      items: 1,
    },
  };

  const BoxContent = styled(Box)({
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  });