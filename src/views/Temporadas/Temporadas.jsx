import React from "react";
import { Bread }              from '../../components/customs/Bread';
import { HomeRounded, WbSunny} from '@mui/icons-material';
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import dia_de_muertos    from '../../assets/img/temporadas/dia-de-muertos_large.avif'
import dia_del_amor      from '../../assets/img/temporadas/dia-del-amor-y-amistad_large.avif'
import dia_del_nino      from '../../assets/img/temporadas/dia-del-nino_large.avif'
import dia_de_las_madres from '../../assets/img/temporadas/dia-del-las-madres_large.avif'
import navidad           from '../../assets/img/temporadas/navidad_large.avif'

export const Temporadas = () => {
  return (
    <Box>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "sección de Temporadas", ruta: "/categorias", icono: <WbSunny/>}]}/>
        <Container maxWidth="lg">
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper elevation={0}>
                <img src={dia_de_muertos} alt="dia de muertos" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Halloween</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper elevation={0}>
                <img src={dia_del_amor} alt="dia del amor y la amistad" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Día del Amor y la Amistad</Typography>
              </Paper>
            </Grid>



            
           
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper elevation={0}>
                <img src={dia_del_nino} alt="dia del niño" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Dia del niño</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper elevation={0}>
                <img src={dia_de_las_madres} alt="dia de las madres" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Día de las madres </Typography>
              </Paper>
            </Grid>



            
           
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Paper elevation={0}>
                <img src={navidad} alt="navidad" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Navidad</Typography>
              </Paper>
            </Grid>
           



            
           

        
          </Grid>
        </Container>
    </Box>
  );
};
