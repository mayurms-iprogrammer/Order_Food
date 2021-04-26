import { Fragment } from "react";
import MealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
           <h1>Food Mall</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="FoodImage" />
            </div>
        </div>
    )
}
export default Header;