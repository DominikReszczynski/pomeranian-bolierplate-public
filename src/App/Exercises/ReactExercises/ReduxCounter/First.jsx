import React, { Profiler } from "react";
import './style.css';
import { useSelector } from "react-redux";

export const First = () => {
    const value = useSelector((store) => {
        console.log(store); return store.counterSlice
    })
    console.log(value);
    return (
        <div className="redux-component">
            <h2>First </h2>
            <button className="redux-button">Dodaj 1</button>
            <div>value {value}</div>
        </div>
    )
}