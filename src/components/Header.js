import './headerstyle.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="headersss">
         <img className='logo' src={logo} alt='logo' />
         <p className='signature'>By Cata</p> 
      <ul className='menu'>
        <li><a href="/">Home</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
     </ul>
    </div>
  )
}

export default Header
