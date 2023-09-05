import React from "react";
import './style.css';
import { useDispatch } from "react-redux";
import { decrementBy } from "../../../Store/counterSlice";

export const ReduxStealer = () => {
    const dispatch = useDispatch()
    return (
        <div className="redux-component">
            <h2>ReduxStealer </h2>
            <button onClick={() => { dispatch(decrementBy(7)) }}
                className="redux-button">odejmij 7</button>
            <button onClick={() => { dispatch(decrementBy(14)) }}
                className="redux-button">odejmij 14</button>

        </div>

    )
}