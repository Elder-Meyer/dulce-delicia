import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

export const AccordionDes = () => {

  return (
    <Container>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">1.- ¿Cómo puedo comprar en Azúcar Dulcerías?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                ¡Es muy sencillo! Solo debes agregar los artículos que deseas a tu carrito y cuando estés listo(a) para pagar, entra a tu carrito de compra y dale clic en finalizar pedido, después ingresa tus datos de envío, elije la forma de pago.
                </Typography>
                <Typography variant="subtitle2" color="text" gutterBottom>
                ¡Listo! ¡Tu pedido llegará entre 2 y 5 días hábiles después de haber confirmado tu pago!
                </Typography>
                <Typography variant="subtitle2" color="text" gutterBottom>
                <p>Consulta nuestra página&nbsp;<a href="https://azucardulcerias.com/pages/como-comprar">¿Cómo comprar?&nbsp;</a>para más información.</p>
                </Typography>
                
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">2.- ¿Necesito abrir una cuenta para poder comprar?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                No es necesario que abras una cuenta con nosotros, pero si es recomendable, ya que, si te registras, nuestro sitio guardará tu información para que tus próximas compras sean mucho más rápidas. Además, podrás recibir promociones especiales.
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">3.- Tengo una cuenta y olvidé mi contraseña, ¿cómo puedo recuperarla?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Entra a la sección de cuentas y haz clic en recuperar contraseña. Te enviaremos un correo con las instrucciones para restaurar tu contraseña.
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">4.- ¿Facturan? ¿Los precios incluyen impuestos ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                ¡Sí facturamos! Para solicitar tu factura, al momento de tu compra enviar datos fiscales, uso de CFDI y método de pago a tienda.online@azucardulcerias.com
                </Typography>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Te enviaremos tu factura una vez que tu pedido se haya confirmado y entregado.
                </Typography>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Todos nuestros precios incluyen impuestos según sea el caso (IVA, IEPS o exentos).
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">5.- ¿Hay algún costo de envío?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                En compras mayores de $500 pesos (Quinientos pesos) o más el costo de envío es gratis a toda la República Mexicana.
                </Typography>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Si tu compra es menor a $500.00, el envío en la ciudad de México tiene un costo de $99.90 y en el interior de la república $149.90
                </Typography>
                <Typography variant="subtitle2" color="primary.light" gutterBottom>
                Consulta más detalles en nuestra página de envíos
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">6.- ¿A qué ciudades hacen envíos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Enviamos a todo México sin excepción. Por el momento no hacemos envíos a otros países.
                </Typography>
                <Typography variant="subtitle2" color="primary.light" gutterBottom>
                Consulta nuestra más detalles en nuestra página de envíos
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='subtitle1' color="primary">7.- ¿Cuáles son las formas de pago?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text" gutterBottom>
                Aceptamos pagos con tarjetas bancarias Visa, Mastercard y American Express. También puedes pagar usando tu cuenta Paypal. Si no cuentas con tarjeta de crédito o débito, puedes pagar en efectivo en cualquier tienda Oxxo de la República Mexicana. Actualmente hemos incorporado el uso de la pasarla de pagos Openpay.
                </Typography>
            </AccordionDetails>
        </Accordion>


        
        


        
    </Container>
  )
}
