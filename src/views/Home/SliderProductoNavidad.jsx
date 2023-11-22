import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia, Typography } from '@mui/material';
import producto_01 from '../../assets/img/inicio/producto_01.webp'
import producto_02 from '../../assets/img/inicio/producto_02.webp'
import producto_03 from '../../assets/img/inicio/producto_03.webp'
import producto_04 from '../../assets/img/inicio/producto_04.webp'
import producto_05 from '../../assets/img/inicio/producto_05.webp'
import producto_06 from '../../assets/img/inicio/producto_06.webp'
import styled from '@emotion/styled';

export const SliderProductoNavidad = ({CardHover}) => {
  return (
    <>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} >
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_01}
                        alt="producto_01"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    ROCHER 20/16
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 126.70
                </Typography>
            </BoxContent>
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_02}
                        alt="producto_02"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    PAQ DIVIERTETE MAS 6/1Kg
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 172.50
                </Typography>
            </BoxContent>
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_03}
                        alt="producto_03"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    M&M TAZA 18/17 G
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 139.60
                </Typography>
            </BoxContent>
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_04}
                        alt="producto_04"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    DELIPACK PIÑATERO 115P 6/1KG
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 139.30
                </Typography>
            </BoxContent>
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_05}
                        alt="producto_05"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    BOTA ROSA CHICA 60/125 G
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 17.10
                </Typography>
            </BoxContent>
            <BoxContent>
                <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none" }}
                        component="img"
                        height={"100%"}
                        image={producto_06}
                        alt="producto_06"
                    />
                </CardHover>
                <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    KISSES CAJA REGALO ALM 6/72G
                </Typography>
                <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                    $ 67.30
                </Typography>
            </BoxContent>
        </Carousel>
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