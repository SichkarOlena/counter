import React, {Component} from 'react';
import styles from './Counter.module.scss';
import PropTypes from "prop-types";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: true,
            count: props.step
        }
    }

    handleCalcCount = () => {
        const {isAdd} = this.state;
        this.setState((state, props) => {
                return {
                    count: isAdd ? state.count + props.step : state.count - props.step
                };
            }
        );
    }

    handleChangeMode = () => {
        const {isAdd} = this.state;
        this.setState({isAdd: !isAdd});
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.step === this.props.step;
    }

    render() {
        const {isAdd, count} = this.state;
        return (
            <div className={styles.container}>
                <h1>Counter : {count}</h1>
                <button className={styles.button} onClick={this.handleCalcCount}>{isAdd ? "+" : "-"}</button>
                <button className={styles.button} onClick={this.handleChangeMode}>change mode</button>
            </div>
        );
    }
}

Counter.propTypes = {
    step: PropTypes.number,
}

export default Counter;
