import React from 'react'
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, Face2 } from '@mui/icons-material';
import Avengers from '../../assets/img/personajes/Avengers.avif';
import Barbie from '../../assets/img/personajes/Barbie.avif';
import Cars from '../../assets/img/personajes/Cars.avif';
import CivilWar from '../../assets/img/personajes/CivilWar.avif';
import Distroller from '../../assets/img/personajes/Distroller.avif';
import DragonBall from '../../assets/img/personajes/DragonBall.avif';
import Frozen from '../../assets/img/personajes/Frozen.avif';
import HelloKitty from '../../assets/img/personajes/HelloKitty.avif';
import Minions from '../../assets/img/personajes/Minions.avif';
import Mickey from '../../assets/img/personajes/Mickey.avif';
import Minnie from '../../assets/img/personajes/Minnie.avif';
import PawPatrol from '../../assets/img/personajes/PawPatrol.avif';
import Peppa from '../../assets/img/personajes/Peppa.avif';
import LasPrincesas from '../../assets/img/personajes/LasPrincesas.avif';
import Sofia from '../../assets/img/personajes/Sofia.avif';
import Shopkins from '../../assets/img/personajes/Shopkins.avif';
import starWars from '../../assets/img/personajes/starWars.avif';
import ToyStory from '../../assets/img/personajes/ToyStory.avif';
import Unicornio from '../../assets/img/personajes/Unicornio.avif';

export const Personajes = () => {
  return (
    <Box>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "personajes", ruta: "/personajes", icono: <Face2/>}]}/>
      
      <Container maxWidth="lg">
        <Grid container spacing={3} p={1}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Avengers} alt="Avengers" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Avengers</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Barbie} alt="Barbie" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Barbie</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Cars} alt="Cars" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Cars</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={CivilWar} alt="CivilWar" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Civil War</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Distroller} alt="Distroller" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Distroller</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={DragonBall} alt="DragonBall" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Dragon Ball</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Frozen} alt="Frozen" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Frozen</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={HelloKitty} alt="HelloKitty" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Hello Kitty</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Minions} alt="Minions" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Mi Villano Favorito</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Mickey} alt="Mickey" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Mickey Mouse</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Minnie} alt="Minnie" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Minnie Mouse</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={PawPatrol} alt="PawPatrol" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Paw Patrol</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Peppa} alt="Peppa" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Peppa Pig</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={LasPrincesas} alt="Las princesas" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Princesas</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Sofia} alt="Sofia" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Princesa Sofia</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Shopkins} alt="Shopkins" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Shopkins</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={starWars} alt="starWars" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Star Wars</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={ToyStory} alt="ToyStory" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Toy Story</Typography>
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper elevation={0}>
              <img src={Unicornio} alt="Unicornio" width="100%" height="100%"/>
              <Typography variant='h5' color='primary' textAlign='center'>Unicornio</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>


    </Box>
  )
}
