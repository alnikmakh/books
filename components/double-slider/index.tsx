import {Slider, TextField, Typography} from "@material-ui/core";
import {useRef, useState} from "react";

type DoubleSliderProps = {
    titleFirst: string,
    titleSecond: string,
    percentage: number,
    max: number,
    min: number,
}

export const DoubleSlider = ({percentage, titleFirst, titleSecond, max, min}: DoubleSliderProps) => {
    const [value, setValue] = useState(min);
    const inputEl = useRef(null);

    const calculateValue = (val) => {
        return Math.round(val * (1 + percentage / 100));
    };

    const setCurrentValue = (currentValue) => {
        setValue(currentValue);
        inputEl.current.value = currentValue;
    }

    const handleBlurInput = ()  => {
        if (value < min) {
            setCurrentValue(min);
        }
    };

    const handleChangeInput = (event) => {
        if (!Number.isNaN(+event.target.value)) {
            setValue(+event.target.value);
        }
    };
    const handleChangeFirst = (event, newValue) => {
        if (value > max) {
            setCurrentValue(max);
        } else if (newValue < min) {
            return;
        }
        else {
            setCurrentValue(newValue);
        }
    };
    const handleChangeSecond = (event, newValue) => {
        if (value > calculateValue(max)) {
            setCurrentValue(calculateValue(max));
        }  else if (newValue < (min - (calculateValue(min) - min))) {
            return;
        } else {
            setCurrentValue(calculateValue(newValue));
        }
    };
    return (
        <>
            <Typography>
                {titleFirst}
            </Typography>
            <Slider value={value} onChange={handleChangeFirst}
                    valueLabelDisplay={"on"} step={1}
                    max={value < max ? max : value}/>
            <Typography>
                {titleSecond}
            </Typography>
            <Slider value={value - (calculateValue(value) - value)} onChange={handleChangeSecond}
                    valueLabelDisplay={"on"} step={1}
                    max={max}/>
            <TextField label={"You pay"} defaultValue={value}
                       inputRef={inputEl} onBlur={handleBlurInput}
                       onChange={handleChangeInput}/>
        </>
    );
}