import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import {BsFacebook,BsInstagram,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
    <Container className='Footeer'>
        <div className="container__footer">
        <div className="box__footer">
            <div className="logo">
            <Image src={`../img/logo.png`} alt='Portada'  fluid={true} className="footerLogo"/>
            </div>
            <div className="terms">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores laborum nulla, aliquam unde quam alias beatae laudantium soluta reiciendis numquam </p>
            </div>
        </div>
        <div className="box__footer">
            <h2>soluciones</h2>
            <button>desarrollo web</button>
            <button>desarrollo escritorio</button>
            <button>desarrollo bots</button>
        </div>
        <div className="box__footer">
        <h2>Compañia</h2>
            <button>acerca de</button>
            <button>trabajos</button>
            <button>servicios</button>
        </div>
        <div className="box__footer">
        <h2>redes sociales</h2>
            <button> <BsFacebook className='Bs' />facebook</button>
            <button> <BsInstagram className='Bs'  />instagram</button>
            <button><BsLinkedin  className='Bs' />linkedin</button>
            <button><BsWhatsapp  className='Bs' />whatsapp</button>
        </div>
        </div>
        <div className="box__copyright">
            <hr />
            <p>todos los derechos reservados © 2023</p>
            <b>Paper Company</b>
        </div>
    </Container>

    </>
  )
}

export default Footer