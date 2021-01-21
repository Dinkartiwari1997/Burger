import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js';
const controls=[
    {label:'salad', type: 'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls =(props)=>(
    <div className={classes.BuildControls}>
       <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
       {controls.map((data)=>{
        return <BuildControl key={data.label}
         label={data.label}
         added={()=>props.ingredientAdded(data.type)}
         removed={()=>props.ingredientRemoved(data.type)}
        />
       })}
       <button className={classes.OrderButton}
       disabled={!props.purchasable}
       onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;



//disabled={props.disabled[data.type]