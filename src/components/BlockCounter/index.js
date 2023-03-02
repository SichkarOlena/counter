import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import styles from './BlockCounter.module.css';

class BlockCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
        };
    }

    handleInput = ({target: {value}}) => {
       const { step: { min, max } } = this.props;
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

BlockCounter.defaultProps = {
    step: {
        min: 0,
        max: 100000,
    },
}

BlockCounter.propTypes = {
    step: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }),

}

export default BlockCounter;