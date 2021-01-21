import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Button from '../Button/Button';
 
class  OrderSummary extends Component{
   
    componentWillUpdate(){
        console.log("Order Summery will update");
    }

    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
    .map(igKey=>{
        return <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:
        {this.props.ingredients[igKey]}</li>
    });
        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}
    
    

export default OrderSummary;