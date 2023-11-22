import { CardMedia } from '@mui/material'
import imgMural      from "../../assets/img/inicio/imgSierra.webp"

export const ImgAcceso = () => {
  return (
    <CardMedia
        component="img"
        image={imgMural}
        alt="img-mural"
        sx={{height: "70vh",mt:-1}}
    />
  )
}
