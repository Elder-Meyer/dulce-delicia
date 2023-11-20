import React, { useState } from "react";
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';
import { Bread }              from '../../components/customs/Bread';
import { HomeRounded, Category} from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from "@mui/material";

export const Categorias = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "categorias", ruta: "/categorias", icono: <Category/>}]}/>

      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Typography variant="h4" color="primary" textAlign='center'>categorias</Typography>
          </Grid>
          <Grid item xs={12} p={3}>
            <Paper elevation={0} sx={{ p: 2, m: 1 }}>
              
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
