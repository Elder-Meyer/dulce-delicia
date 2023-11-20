import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import Face2Icon from '@mui/icons-material/Face2';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CakeIcon from '@mui/icons-material/Cake';

export const navLinks =[
    {
      title: "Categorias",
      path: "/categorias", 
      icon: <CategoryOutlinedIcon />,
      iconSelected: <CategoryIcon/>
    },
    {
      title: "Temporadas",
      path: "/temporadas", 
      icon: <WbSunnyOutlinedIcon/>,
      iconSelected: <WbSunnyIcon />
    },
    {
      title: "Personajes",
      path: "/personajes", 
      icon: <Face2OutlinedIcon/>,
      iconSelected: <Face2Icon />
    },
    {
      title: "Mesas de Dulces",
      path: "/mesas-de-dulces", 
      icon: <TableRestaurantOutlinedIcon/>,
      iconSelected: <TableRestaurantIcon />
    },
    {
      title: "Reposteria",
      path: "/tienda", 
      icon: <CakeOutlinedIcon/>,
      iconSelected: <CakeIcon />
    }
  ]