import classes from './MealItem.module.css';
import MealItemForm from '../MealItem/MealItemForm'

const MealItem=(props)=>{
    const PRICE =`$${props.price.toFixed(2)}`
return(
<li className={classes.meal} >
    <div>
        <h3>{props.name}</h3>
        <h3 className={classes.description}>{props.description}</h3>
        <h3 className={classes.price}>{PRICE}</h3>

    </div>
    <MealItemForm/>
</li>
)
}
export default MealItem;