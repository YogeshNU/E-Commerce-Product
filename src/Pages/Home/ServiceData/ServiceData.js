import { serviceData } from "../../../Components/Assests/products"
//import ServicedataCard from "./ServicedataCard"
import './servicedata.css'


const ServiceData =()=>{
    return( 
        <div className="servicedata-layout">
            <div className="servicedata-card">
            {
                
               serviceData.map((product) =>(
                <div className="servicedata-card">
                
                <diV style={{background:`${product.bg}`}}>
                 <img src={product.icon} alt=" "/>
                 <h3>{product.title}</h3>
                 <h4>{product.subtitle}</h4>
                 </diV>
                 </div>
               ))
               
            }
            </div>
        </div>
        
)}
export default ServiceData



