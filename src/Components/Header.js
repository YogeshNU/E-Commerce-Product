import 'react-feather'
import { ShoppingBag, User, ShoppingCart } from 'react-feather'
import '../Styles/header.css'
import { Link } from 'react-router-dom'


const Header = () =>{
    return(
        <div className='header'>

          <div className='first-header'>
          <p><ShoppingBag /></p>
          <p>Mart</p>
          </div>

          <div className='last-header'>
           <p className='hover'> <Link style={{ textDecoration:'none', color:'black'}} to = '/home'>  Home </Link>  </p>
           <p className='hover'> <Link style={{ textDecoration:'none', color:'black'}} to = '/shop'>Shop </Link></p>
           <p className='hover'> <Link style={{ textDecoration:'none', color:'black'}} to = '/cart'>Cart </Link></p>
           <p className='hover'> <User/> </p>
           <div className='cart-top'>
           <Link style={{ textDecoration:'none', color:'black'}} to = '/cart'> <span className='shopcart'> <ShoppingCart/> </span></Link>
            <span>0</span>
          </div>
          </div>

        </div>
    )
}
export default Header