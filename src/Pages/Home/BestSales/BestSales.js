
import { products } from "../../../Components/Assests/products"
import './bestsales.css'
import { Link } from "react-router-dom"
import {RiStarSFill} from 'react-icons/ri'
import { add } from "../../../Redux/CartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"


const BestSales = () =>{
     const filteredProducts = products.filter(product => product.category==='sofa')
     console.log(filteredProducts)
     const dispatch = useDispatch()
     const [data, setData] = useState(false)



     const addtocart = (values)=>{
      dispatch(add(values))
      
      setData(true)
      toast.success('product is add to cart')
     }


    return(
        <div className="bestsales-heading">
            <h3>Best Sales</h3>
            <div className="bestsales-layout">
                {
                  filteredProducts.map((values) => (
                    
                    <div className="bestsales-card">
                    <Link style={{textDecoration:'none'}} to={`/product/${values.id}`}>
                    <div className="bestsales-image">
                        
                       <img src={values.imgUrl} alt=" " />
                       
                    </div>
                    
                    <div className="bestsales-details">
                      <p style={{textDecoration:'none'}}>{values.productName}</p>
                      
                      <span className="starts">{[...Array(5)].map(star => {
                            return <RiStarSFill size={30} className='fivestar' /> 
                            })} </span> <span style={{marginLeft:'20px'}}></span>
                       </div>
                       </Link>
                      <div className="bigdiscount-detail-last-part">
                      <p className="bigdiscount-detail-p2">${values.price}</p>
                       <button onClick={()=>{addtocart(values)}}>+</button>
                       </div> 
                      
                    
                   

                    </div>
                    
                  ))
                }
            </div>
        </div>
    )
}
export default BestSales