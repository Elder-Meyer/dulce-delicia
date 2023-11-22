import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { AccordionDes } from './AccordionDes';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, LiveHelpRounded } from '@mui/icons-material';
import { Container, Grid, Paper } from '@mui/material';

export const PreguntasFrecuentes = () => {
  return (
    <Box>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "PREGUNTAS FRECUENTES", ruta: "/preguntas-frecuentes", icono: <LiveHelpRounded/>}]}/>

        <Container maxWidth="lg">
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant='h4'  textAlign='cent'>Preguntas Frecuentes</Typography>
            </Grid> 
            <Grid item xs={12} sm={12} md={8} lg={8} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
            
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box sx={{padding:"15px"}}>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <AccordionDes/>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
    </Box>
  )
}
