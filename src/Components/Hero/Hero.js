import './hero.css'
//import  '../Assests/hero-img.png'
// import sofaSlide from "../Assests/hero-img.png";
// import sofaSlide from '../Assests/products/hero-img.png'
import sofaSlide from "../Assests/Images/hero-img.png"
const Hero = () => {
    return(
        <div className="hero">
           
           <div className='hero-left'>
                <span>50% off For Your </span><br></br> <span>First Shopping</span><br></br>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br></br> <span> Quis lobortis consequet</span><br></br>
                <button>Visit Collection</button>
           </div>
           <div className='hero-right'>
            <img src={sofaSlide} alt=' '/>

           </div>

        </div>
    )
}
export default Hero