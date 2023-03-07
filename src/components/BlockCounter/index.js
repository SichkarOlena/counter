import React, {Component} from 'react';
import Counter from '../Counter';
import styles from './BlockCounter.module.scss';
import {CONSTANTS} from "../../constants";

class BlockCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
        };
    }
    handleInput = ({target: {value}}) => {
        const { min, max } = CONSTANTS;
        if (value >= min && value < max) {
            this.setState({step: Number(value)});
        }
    };

    render() {
        const {step} = this.state;
        return (
            <div className={styles.currentContainer}>
                <p>Current step: {step}</p>
                <Counter step={step}/>
                <input className={styles.input} type="text"
                       placeholder="Enter your step"
                       onChange={this.handleInput}
                       value={this.state.step}
                />
            </div>
        );
    }
}

export default BlockCounter;