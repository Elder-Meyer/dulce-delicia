import { AccountBalance, AccountBalanceOutlined, Book, BookOutlined, Label, LabelOutlined, SmartToy, SmartToyOutlined, Store, StoreOutlined, VolunteerActivism, VolunteerActivismOutlined } from "@mui/icons-material";

export const navLinks =[
    {
      title: "Marcas",
      path: "/tematicas", 
      icon: <LabelOutlined />,
      iconSelected: <Label />
    },
    {
      title: "Categorias",
      path: "/chatbot", 
      icon: <SmartToyOutlined />,
      iconSelected: <SmartToy/>
    },
    {
      title: "Temporadas",
      path: "/sobre-nosotros", 
      icon: <AccountBalanceOutlined/>,
      iconSelected: <AccountBalance />
    },
    {
      title: "Personajes",
      path: "/donaciones", 
      icon: <VolunteerActivismOutlined/>,
      iconSelected: <VolunteerActivism />
    },
    {
      title: "Mesas de Dulces",
      path: "/creadores-de-contenido", 
      icon: <BookOutlined/>,
      iconSelected: <Book />
    },
    {
      title: "Reposteria",
      path: "/tienda", 
      icon: <StoreOutlined/>,
      iconSelected: <Store />
    }
  ]