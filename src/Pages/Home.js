
//import { products } from "../Components/Assests/products"

import BestSales from "./Home/BestSales/BestSales"
import BigDiscount from "./Home/Discount/BigDiscount"
import ServiceData from "./Home/ServiceData/ServiceData"
import NewArrivals from "./Home/NewArrival/NewArrivals"

import Hero from "../Components/Hero/Hero"



const Home = () => {
    return( 
        <div>
           <Hero />
            
            <ServiceData />
            <BigDiscount />
            <NewArrivals />
            <BestSales />
            
            

        </div>
    )
}
export default Home;