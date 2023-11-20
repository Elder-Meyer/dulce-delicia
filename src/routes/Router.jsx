import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// nav && foot components
import { NavBar }               from '../components/Layout/NavBar/NavBar'
import { Footer }               from '../components/Layout/Footer/Footer'
// routes components
const Categorias            = lazy(() => import('../views/Categorias/Categorias').then((module) => ({ default: module.Categorias })))
const SobreNosotros         = lazy(() => import('../views/AboutUs/SobreNosotros').then((module) => ({ default: module.SobreNosotros })))
const Temporadas            = lazy(() => import('../views/Temporadas/Temporadas').then((module) => ({ default: module.Temporadas })))    
const Personajes            = lazy(() => import('../views/Personajes/Personajes').then((module) => ({ default: module.Personajes })))   
const MesasDeDulces         = lazy(() => import('../views/MesasDeDulces/MesasDeDulces').then((module) => ({ default: module.MesasDeDulces })))


const Acceso                = lazy(() => import('../views/Access/Acceso').then((module) => ({ default: module.Acceso })))
const AvisoDePrivacidad     = lazy(() => import('../views/NoticePrivacy/AvisoDePrivacidad').then((module) => ({ default: module.AvisoDePrivacidad })))
const Error                 = lazy(() => import('../views/Error/Error').then((module) => ({ default: module.Error })))
import { Inicio } from '../views/Home/Inicio'
const PreguntasFrecuentes   = lazy(() => import('../views/FAQ/PreguntasFrecuentes').then((module) => ({ default: module.PreguntasFrecuentes })))
const Registro              = lazy(() => import('../views/Register/Registro').then((module) => ({ default: module.Registro })))
const RestorePassword       = lazy(() => import('../views/RestorePass/RestorePassword').then((module) => ({ default: module.RestorePassword })))
const Solicitud             = lazy(() => import('../views/Request/Solicitud').then((module) => ({ default: module.Solicitud })))
const DetalleProduct        = lazy(() => import('../views/Shop/DetalleProduct').then((module) => ({ default: module.DetalleProduct })))
const Tienda                = lazy(() => import('../views/Shop/Tienda').then((module) => ({ default: module.Tienda })))
// profiles components        
const Administrador                  = lazy(() => import('../views/Profiles/Administrador/Administrador').then((module) => ({ default: module.Administrador })))
const Colaborador                    = lazy(() => import('../views/Profiles/Colaborador/Colaborador').then((module) => ({ default: module.Colaborador })))
const Consultor                      = lazy(() => import('../views/Profiles/Consultor/Consultor').then((module) => ({ default: module.Consultor })))
const Supervisor                     = lazy(() => import('../views/Profiles/Supervisor/Supervisor').then((module) => ({ default: module.Supervisor })))
// aditional components       
import { AuthProvider }                 from '../context/AuthContext'
import { ProtectedRoute }               from '../components/customs/ProtectedRoute'
import { ProtecteRoutAdmi }             from '../components/customs/ProtecteRoutAdmi'
import { ProtecteRoutCol }              from '../components/customs/ProtecteRoutCol'
import { ProtectedRoutSuper }           from '../components/customs/ProtectedRoutSuper'
import ScrollToTop                      from '../components/customs/ScrollToTop'
import { getProducts } from '../utils/fnTienda'
import { getTematicas } from '../utils/fnTematica'
import { CarritoProvider } from '../context/CarritoContext'
import { Box, Fab } from '@mui/material'
import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import { BtnScrollTop } from '../components/customs/btnScrollTop'
import { LoaderAnimation } from '../components/customs/LoaderAnimation'


export const Router = (props) => {

  const [productos, setProductos] = useState(null);
  const [tematicas, setTematicas] = useState(null);

  const getProductsData = async() =>{
    const p = await getProducts();
    setProductos(p.docs);
  }

  const getTematicasData = async() =>{
    const t = await getTematicas();
    setTematicas(t.docs);
  }

  useEffect(() => {
    getProductsData();
    getTematicasData();
  }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>    
      <BrowserRouter>
        <AuthProvider>
          <CarritoProvider>
            <Box id="back-to-top-anchor" />
            <NavBar />
              <ScrollToTop>
                <Suspense fallback={<LoaderAnimation/>}>
                  <Routes>
                    {/*rutasDeAplicacion*/}
                    <Route path='/'                       element={<Navigate to='/inicio'/>}/>
                    <Route path='/inicio'                 element={<Inicio/>} />
                    <Route path='/categorias'             element={<Categorias/>} />
                    <Route path='/temporadas'             element={<Temporadas/>} />
                    <Route path='/personajes'             element={<Personajes/>} />
                    <Route path='/mesas-de-dulces'        element={<MesasDeDulces/>} />

                    <Route path='/sobre-nosotros'         element={<SobreNosotros/>} />
                    <Route path='/tienda'                 element={<Tienda/>} />
                    <Route path='/tienda/:id'             element={<DetalleProduct productos={productos}/> } />
                    <Route path='/aviso-de-privacidad'    element={<AvisoDePrivacidad/>} />
                    <Route path='/preguntas-frecuentes'   element={<PreguntasFrecuentes/>} />
                    

                    {/* Perfiles -- usuarios */}
                    <Route path='/user/consultor'     element={<ProtectedRoute>       <Consultor/>      </ProtectedRoute>} />
                    <Route path='/user/colaborador'   element={<ProtecteRoutCol>     <Colaborador/>    </ProtecteRoutCol>  } />
                    <Route path='/user/supervisor'    element={<ProtectedRoutSuper>   <Supervisor/>   </ProtectedRoutSuper>    } />
                    <Route path='/user/administrador' element={<ProtecteRoutAdmi>   <Administrador/>    </ProtecteRoutAdmi>   } />
                    {/* acceso -- registro */}
                    <Route path='/acceso'               element={<Acceso/>} />
                    <Route path='/acceso/restaurar-pass'element={<RestorePassword/>} />
                    <Route path='/registro'             element={<Registro/>} />
                    <Route path='/registro/colaborador' element={<Solicitud/>} />
                    {/* vista -- error */}
                    <Route path="*" element={<Error/>} />
                  </Routes>
                </Suspense>

                <BtnScrollTop {...props}>
                  <Fab size="small" aria-label="scroll back to top" 
                    sx={{
                      bgcolor: "primary.main", color: "background.paper", 
                      '&:hover': {
                        bgcolor: 'background.paper',
                        color: "primary.main",
                        border: "1px solid",
                      },
                    }}
                  >
                      <KeyboardDoubleArrowUp />
                  </Fab>
                </BtnScrollTop>
              </ScrollToTop>

            <Footer/>
          </CarritoProvider>
        </AuthProvider>
      </BrowserRouter>
    </Box>
  )
}
