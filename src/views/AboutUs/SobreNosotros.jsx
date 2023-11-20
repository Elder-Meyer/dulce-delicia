import React, { lazy, useEffect }   from 'react'
import { Grid,  Typography, Box, Divider, Container, Toolbar, Paper } from '@mui/material';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import { HomeRounded, BusinessRounded } from '@mui/icons-material';
const AvatarItem = lazy(() => import('./AvatarItem').then((module)=> ({default: module.AvatarItem})))
import elder from '../../assets/img/sobre-nosotros/elder.webp'

export const SobreNosotros = () => {

  useEffect(() => {
    contadorVisitas("sobre-nosotros");
  }, [])

  return (
    <Box>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros", icono: <BusinessRounded/>}]}/>
      
      <Container maxWidth="lg">
        <Grid container spacing={3} p={1}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography variant='h4'  textAlign='left'>Azúcar Dulcerías</Typography>
          </Grid>            
          <Grid item xs={12} sm={12} md={9} lg={9} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Typography gutterBottom variant='subtitle1' textAlign='left'>
              Azúcar Dulcerías es una cadena de dulcerías con amplio surtido, excelente servicio y precios competitivos. Nos esforzamos para que nuestros clientes tengan la mejor experiencia de compra, accedan al mejor surtido de productos y aprovechen nuestros precios y promociones.
            </Typography>
            <Typography gutterBottom variant='subtitle1' textAlign='left'>
              Desde hace más de 30 años somos mayoristas y trabajamos directamente con fabricantes para llevarte los mejores precios y los productos más novedosos.
            </Typography>
            <Typography  variant='subtitle1' textAlign='left'>
              En nuestras tiendas encontrarás más de 2,000 productos para surtir tu tienda, armar una fiesta, poner una mesa de dulces, comprar un regalo o simplemente satisfacer tus antojos.  
            </Typography>
            <Toolbar/>
            <Typography  variant='h5' textAlign='left'>
              Nuestros valores
            </Typography>
            <Typography  variant='subtitle1' textAlign='left'>
              <ul>
                <li>Lo más importante son nuestros cllientes</li>
                <li>Trabajar en equipo es mejor que trabajar de forma individual.</li>
                <li>Los proveedores son nuestros socios más importantes.</li>
                <li>Cuidamos y respetamos nuestro lugar de trabajo.</li>
                <li>Si es para el beneficio de la empresa, es para el beneficio de todo el equipo.</li>
                <li>Siempre estamos dispuestos a aprender y enseñar.</li>
              </ul>
            </Typography>
            <Paper elevation={0}>            
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/YhY4ocpPRxM?si=kmqJdMVMsf4gs30e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Paper>
          </Grid>  

        </Grid>
      </Container>

      <Divider sx={{mb: 4}}/>

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary.light" fontWeight={500} textAlign='center'>¡Información Importante!</Typography>
          <Container maxWidth="md">
            <Typography variant="body1"  textAlign='center'>
              Este sitio web es un proyecto de práctica de TI (Tecnologías de la información).
              Estoy duplicando un sitio existente para el desarrollo de una PWA (Progressive Web Apps).
              Este proyecto está inspirado en el sitio original "Azucar Dulcerias" que puedes encontrar en <a href='https://www.azucardulcerias.com/'>https://www.azucardulcerias.com/</a>, 
              si estás interesado en el sitio puedes visitarlo. 
              Este sitio web no tiene fines comerciales. Todos los derechos de diseño y contenido pertenecen al sitio original mencionado anteriormente.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="center" sx={{pb: 5}}>
          <Grid item p={2}>
            <AvatarItem 
              alt={"Elder Meyer (Dev de este sitio)"}
              imagen={elder} 
              firstcolor={"#00434c"} 
              secondcolor={"#44b4d0"}
              enlace='https://elder-meyer.web.app/'
            />
          </Grid>
          <Grid item p={2}>
            <AvatarItem 
              alt={"Sitio original | ve a verlo :)"}
              imagen={"https://www.azucardulcerias.com/cdn/shop/files/a_e7cb0aa6-2128-45e1-925c-d695ea3ab659_550x.png"} 
              firstcolor={"#FFA3D1"} 
              secondcolor={"#FF4BA3"}
              enlace='https://www.azucardulcerias.com/'
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
