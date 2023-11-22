import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia, Typography } from '@mui/material';
import producto_01 from '../../assets/img/inicio/bolsa_01.webp'
import producto_02 from '../../assets/img/inicio/bolsa_02.webp'
import producto_03 from '../../assets/img/inicio/bolsa_03.webp'
import producto_04 from '../../assets/img/inicio/bolsa_04.webp'
import producto_05 from '../../assets/img/inicio/bolsa_05.webp'
import producto_06 from '../../assets/img/inicio/bolsa_06.webp'
import styled from '@emotion/styled';

export const SliderProductoPinata = ({CardHover}) => {
    return (
        <>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} >
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_01}
                            alt="producto_01"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        TUTSI SURT FIESTA 6/2.2 KG
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 310.70
                    </Typography>
                </BoxContent>
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_02}
                            alt="producto_02"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        PAQUETE FIESTA 16/600 g
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 112.20
                    </Typography>
                </BoxContent>
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_03}
                            alt="producto_03"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        MAXI PIÑATON BAG 6/75 PZS
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 303.30
                    </Typography>
                </BoxContent>
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_04}
                            alt="producto_04"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        CANELS MEGA PIÑATERO 3/4.4 KG
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 451.30
                    </Typography>
                </BoxContent>
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_05}
                            alt="producto_05"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        PIÑATERA ANAHUAC 5/1.5 KG
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 196.00
                    </Typography>
                </BoxContent>
                <BoxContent>
                    <CardHover sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
                        <CardMedia
                            sx={{ userSelect: "none", pointerEvents: "none" }}
                            component="img"
                            height={300}
                            image={producto_06}
                            alt="producto_06"
                        />
                    </CardHover>
                    <Typography variant="h6" color="primary" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        BOLSA FIESTA CANELS 6/1.5 Kg
                    </Typography>
                    <Typography variant="subtitle1" color="text" textAlign="left" sx={{ userSelect: "none", pointerEvents: "none" }}>
                        $ 258.00
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
    padding: "0 1rem",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  });