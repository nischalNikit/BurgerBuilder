import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',  type: 'salad'},
    {label:'Bacon',  type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat',   type: 'meat'}
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p className = {classes.price}>
            Current Price: <strong>${props.price.toFixed(2)}</strong> Only
        </p>
        <div>
        {
            controls.map(ctrl => (
                <BuildControl 
                    key      = {ctrl.label} 
                    label    = {ctrl.label} 
                    added    = {() => props.ingredientAdded(ctrl.type)}
                    removed  = {() => props.ingredientRemoved(ctrl.type)}
                    disable  = {props.disabled[ctrl.type]}
                />
            ))
        }
        </div>
        <button 
            className = {classes.OrderButton} 
            disabled  = {!props.purchasable}
            onClick   = {props.order}  
        >Order Now</button>    
    </div>
)

export default buildControls;


