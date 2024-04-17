import { discoutProducts } from "../../../Components/Assests/products";
//import Cards from "./Cards";
import './bigdiscount.css'
import { Link } from "react-router-dom";
import {RiStarSFill} from 'react-icons/ri'
import { add } from "../../../Redux/CartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"

const BigDiscount = () =>{
    const dispatch = useDispatch()
    const [data, setData] = useState(false)

    const addtocart = (item)=>{
        dispatch(add(item))

        setData(true)
      toast.success('product is add to cart')
    }

    return(
        <div className="heading">
            <h3>Big Discount</h3>
        <section>
       
        
            {
                discoutProducts.map((item)=>(
                    <div className="cards">

                    <Link style={{textDecoration:'none'}} to={`/product/${item.id}`}>
                    
                    <div className="image_box">
                        <p>{item.discount}% off</p>
                          <img src={item.imgUrl} alt=" "/>
                    </div>
                    <div className="details">
                        <p>{item.productName}</p>
            
                        <span className="starts">{[...Array(5)].map(star => {
                                        return <RiStarSFill size={30} className='fivestar' />
                                        })} </span> <span style={{marginLeft:'20px'}}></span>
                    </div>  
                    </Link>  
                         <div className="bigdiscount-detail-last-part">
                        <p className="bigdiscount-detail-p2">${item.price}</p>
                        <button   onClick={()=>{addtocart(item)}}>+</button>
                        </div>
                    
                   </div>
                ))
            }
            
        </section>
        </div>
    )
}
export default BigDiscount