import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as U from '../TuxComponents/UniversalComponents';

const ProgressBar = (props) => {
    const { max } = props;
    const [value, updateValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            updateValue(oldValue => {
                const newValue = oldValue + 10;

                if (newValue === 100) {
                    clearInterval(interval)
                }
                return newValue;
            })
        }, 1000); 
    }, [])

    return ( 
        <U.ProgressBarCont>
            <U.ProgressBar value={value} max={100} />
            <span>  {(value/100) * 100}%</span>
        </U.ProgressBarCont>
    );

    ProgressBar.propTypes = {
        value: PropTypes.number.isRequired,
        max: PropTypes.number
    };
//this doesnt work correctly, should be max instead of 100 on lines 24 & 25 inside (value/max)
    ProgressBar.defaultProps = {
        max: 100
    }
}
 
export default ProgressBar;