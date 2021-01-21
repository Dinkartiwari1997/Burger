import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop.js';
import classes from "./Model.module.css";

class Model extends Component {

   

    render(){
        return(
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
            <div className={classes.Model}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? "1" : '0'
                }}>
                {this.props.children}
            </div>
        </Aux> 
        );
    }
}

export default Model;