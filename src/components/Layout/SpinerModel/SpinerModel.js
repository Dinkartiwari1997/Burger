import React from 'react';
import classes from "./SpinerModel.module.css";
const spinner=()=>{
    return(
        <div className={classes.loader}>Loading...</div>
    );
}

export default spinner;