import { useParams } from "react-router-dom"
//import {useDispatch} from 'react-redux'
import { products } from "../Components/Assests/products"
import '../Styles/product.css'
import {RiStarSFill} from 'react-icons/ri'
import { add } from "../Redux/CartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"


const Product = (product) =>{
    const [data, setData] = useState(false)
    //const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch()
    const productdetails = products.find((item) => item.id===id)
    const similarProduct = products.filter((item) => item.category === productdetails.category && item.id !==productdetails.id);
    console.log(productdetails)
  


    const handleAdd =(productdetails) =>{
        dispatch(add(productdetails))
    }

    const addtocart = (item)=>{
        dispatch(add(item))
        
        setData(true)
        toast.success('product is add to cart')
       }

    return(
        <div>
            
             {
                <div className=" container product-layout">
                    

                    <div className="product-image">
                         <img src={productdetails.imgUrl} alt=" "  />
                    </div>
                    <div className="product-detail">
                         <p>{productdetails.productName}</p>
                         <span className="starts">{[...Array(5)].map(star => {
                            return <RiStarSFill size={30} className='fivestar' />
                         })} </span> <span style={{marginLeft:'20px'}}>{productdetails.avgRating} rating</span>

                         <p>
                         <span className="price">${productdetails.price}</span> <span style={{marginLeft:'20px'}}>category:{productdetails.category}</span>
                         </p><br></br>
                         <span>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consequatur</span><br></br>
                         <span>iure quas illo voluptates labore tempore!</span>
                         <div >
                            <button className="buttons-1">1</button><br></br>
                            <button className="buttons-2" onClick={() => {handleAdd(productdetails)}}>Add To Cart</button>
                         </div>
                    </div>
                   
                    

                </div>
                
             }
             <div className="Description">
                <span>Description</span> 
                 {/* <span>Reviews(1)</span> */}
                <p>{productdetails.description}</p>
            </div>
             
                <div className="similaritem-heading">
                    <h2>You might also like</h2>
                </div>
                <div className="similaritem-layout">
                
                {
                    similarProduct.map((item,index)=>(
                        <div className="similaritem-card">
                            <Link style={{textDecoration:'none'}} to={`/product/${item.id}`}>

                            <div className="sililaritem-img">
                               <img src={item.imgUrl} alt=" " />
                            </div>
                            <div className="sililaritem-detail">
                            <p>{item.productName}</p>

                            <span className="starts">{[...Array(5)].map(star => {
                            return <RiStarSFill size={30} className='fivestar' />
                            })} </span> <span style={{marginLeft:'20px'}}></span>

                            <div className="bigdiscount-detail-last-part">
                            <p className="bigdiscount-detail-p2">${item.price}</p>
                            <button onClick={()=>{addtocart(item)}}>+</button>
                            </div> 
                            </div>
                            </Link>
                        </div>
                    ))
                }
             </div>
        </div>
    )
}
export default Product