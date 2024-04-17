import { useState } from 'react'
import '../Styles/shop.css'
import { BiSearch } from 'react-icons/bi'
import { products } from '../Components/Assests/products'
import { Link } from 'react-router-dom'
import {RiStarSFill} from 'react-icons/ri'

import { add } from '../Redux/CartSlice'
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"


const Shop = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(false)

    const [category, setCategory] = useState('sofa')

    const filteredProduct = products.filter(items => items.category === category)

    const handleFilter = (value) => {
        setCategory(value)
        console.log(value)
    }

   



     const addtocart = (items)=>{
      dispatch(add(items))
      
      setData(true)
      toast.success('product is add to cart')
     }


    return (
        <div>

            <div >
                <h2 className='banner'>product</h2>
            </div>
            <div className='shop-heading'>
                <div>
                    <select onChange={(e) => handleFilter(e.target.value)}>
                        <option value='sofa'>Sofa</option>
                        <option value='chair'>Chair</option>
                        <option value='mobile'>mobile</option>
                        <option value='watch'>Watch</option>
                        <option value='wireless'>Wireless</option>
                    </select>
                </div>
                <div>
                    <input type='search' placeholder='Search...' onChange={(e)=>handleFilter(e.target.value)}/><span><BiSearch /></span>
                </div>
            </div>
            <div className="shop-layout">
                {
                    filteredProduct.map((items) => (
                        <div className="shop-card">
                            <Link style={{textDecoration:'none'}} to={`/product/${items.id}`}>
                                <div className="shop-image">

                                    <img src={items.imgUrl} alt=" " />

                                </div>
                                <div className="shop-details">
                                    <p>{items.productName}</p>

                                    <span className="starts">{[...Array(5)].map(star => {
                                        return <RiStarSFill size={30} className='fivestar' />
                                    })} </span> <span style={{ marginLeft: '20px' }}></span>
                                    
                                    </div>
                                    </Link>
                                    <div className="shop-detail-last-part">
                                        <p className="shop-detail-p2">${items.price}</p>
                                        <button onClick={()=>{addtocart(items)}}>+</button>
                                    </div>

                                
                            

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Shop