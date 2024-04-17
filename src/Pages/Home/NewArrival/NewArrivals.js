import './newarrivals.css'
import { products } from '../../../Components/Assests/products'
import { Link } from 'react-router-dom'
import './arrivalcard.css'
import {RiStarSFill} from 'react-icons/ri'
import { add } from "../../../Redux/CartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"


const NewArrivals =() =>{

    const filteredProducts=products.filter(product => product.category==='mobile'||product.category==='wireless');
    console.log(filteredProducts)

    const dispatch = useDispatch()
    const [data, setData] = useState(false)

    const addtocart = (values)=>{
        dispatch(add(values))

        setData(true)
      toast.success('product is add to cart')
    }


    return(
        <div className='arrival_heading'>
            <h3>New Arrivals</h3>
           <div className='layout'>
            {
                filteredProducts.map((values) => (
                    <div className="arrival_cards">
                    <Link style={{textDecoration:'none'}} to={`/product/${values.id}`}>
        
                      <div className="arrivalcard-image_box">
                          <img src={values.imgUrl} alt=' '/>
                      </div>
        
                      <div className="details">
                        <p>{values.productName}</p>
                        <span className="starts">{[...Array(5)].map(star => {
                                    return <RiStarSFill size={30} className='fivestar' />
                                    })} </span> 
                                    <span style={{marginLeft:'20px'}}></span>
        
                      </div>
                      </Link>
                    <div className="bigdiscount-detail-last-part">
                    <p className="bigdiscount-detail-p2">${values.price}</p>
                    <button  onClick={()=>{addtocart(values)}}>+</button>
                    </div>
                      
                </div>
                ))
            }
           </div>
        </div>
    )
}
export default NewArrivals