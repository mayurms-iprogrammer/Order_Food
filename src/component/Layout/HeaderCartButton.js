import { useContext } from 'react';
import cartConetxt from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';
const HeaderCartButton=(props)=>{
    const cartCtx = useContext(cartConetxt)
    const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0);
return(
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>

    </button>
)
}
export default HeaderCartButton;