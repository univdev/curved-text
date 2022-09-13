import { ChangeEventHandler } from "react";

export interface PropsType {
    value: number;
    onChange?: ChangeEventHandler;
}

export const Slider = (props: PropsType) => {
    return (
        <input
            style={{
                position: 'absolute',
                left: '0',
                top: '0'
            }}
            type="range"
            min="-100"
            max="100"
            value={props.value}
            onChange={props.onChange}
        />
    );
};
