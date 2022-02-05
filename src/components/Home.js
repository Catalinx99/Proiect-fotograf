import './homestyle.css'
import poza1 from './poze/poza1.jpg'
import poza2 from './poze/poza2.jpg'
import poza3 from './poze/poza3.jpg'
import poza4 from './poze/poza4.jpg'
import poza5 from './poze/poza5.jpg'
import poza6 from './poze/poza6.jpg'
import poza7 from './poze/poza7.jpg'
import poza8 from './poze/poza8.jpg'
import poza9 from './poze/poza9.jpg'
import poza10 from './poze/poza10.jpg'
import poza11 from './poze/poza11.jpg'


const Home = () => {
  return (
    <div className='poze'>
          <hr className='hr'/>
     <div className='column'>
      <img src={poza4} alt="1"/>
      <img src={poza6} alt="1"/>
      <img src={poza8} alt="1"/>
      <img src={poza2} alt="1"/>
      <img src={poza5} alt="1"/>
      <img src={poza9} alt="1"/>
      </div>
      <div className='column'>
      <img src={poza10} alt="1"/>
      <img src={poza2} alt="1"/>
      <img src={poza4} alt="1"/>
      <img src={poza3} alt="1"/>
      <img src={poza1} alt="1"/>
      </div>
      <div className='column'>
      <img src={poza11} alt="1"/>
      <img src={poza6} alt="1"/>
      <img src={poza7} alt="1"/>
      <img src={poza10} alt="1"/>
      <img src={poza6} alt="1"/>
      <img src={poza2} alt="1"/>
      </div>
    </div>
  )
}

export default Home
