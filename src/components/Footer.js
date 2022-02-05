import './footerstyle.css';


const Footer = () => {
  return (
    <div className='footer'> 
    <hr className='hr' />
    <a href='/'><b> Home </b></a>
    <a href='/pricing'><b> Pricing </b> </a>
    <a href='/about'><b> About </b></a>
    <a className='si' href='http://www.facebook.com'  target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
    <a className='si' href='http://www.instagram.com'  target="_blank" rel="noreferrer"><i class="fab fa-instagram-square"></i></a>
    <a className='si' href='http://www.youtube.com'  target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
    </div>
  )
}

export default Footer
