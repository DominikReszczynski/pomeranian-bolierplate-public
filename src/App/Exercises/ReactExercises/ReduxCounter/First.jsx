import React, { Profiler } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementBy } from "../../../Store/counterSlice";


export const First = () => {
    const value = useSelector((store) => {
        console.log(store); return store.counterSlice.value
    })
    const errorMessage = useSelector((store) => store.counterSlice.errorMessage)
    console.log(value);
    const dispatch = useDispatch();
    return (
        <div className="redux-component">
            <h2>First </h2>
            <button onClick={() => { dispatch(incrementBy(1)) }}
                className="redux-button">Dodaj 1</button>
            <button onClick={() => { dispatch(incrementBy(5)) }}
                className="redux-button">Dodaj 5</button>
            <button onClick={() => { dispatch(incrementBy(10)) }}
                className="redux-button">Dodaj 10</button>
            <div>value {errorMessage.length > 0 ? errorMessage : value}</div>
        </div>
    )
}