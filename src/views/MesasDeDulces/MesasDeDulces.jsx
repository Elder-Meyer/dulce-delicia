import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, TableRestaurant } from '@mui/icons-material';
import { Grid } from '@mui/material';

export const MesasDeDulces = () => {
  return (
    <Box>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "mesas de dulces", ruta: "/mesas-de-dulces", icono: <TableRestaurant/>}]}/>

      <Grid container spacing={1}>
        <Grid item xs sx={{p:3}}>
          <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
            <Typography variant="h4" color="primary" textAlign='center'>Mesas de Dulces</Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}
