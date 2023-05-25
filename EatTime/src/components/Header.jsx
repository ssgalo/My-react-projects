import { useState } from "react"
import { Card } from "./Card"
import { useNavigate, Routes, Route } from "react-router-dom"
import { TakeOrder } from "./TakeOrder"


export const Header = () => {

    const actions = [
        {
            color:"red",
            text:"Hamburguesa",
            id:1
        },
        {
            color:"green",
            text:"Hamburguesa",
            id:2
        },
        {
            color:"blue",
            text:"Hamburguesa",
            id:3
        }
    ]


    return(
        <div>
            <div className="container pt-5">
                <h5 className="mb-4 header-text">¿Qué vas a pedir hoy, Santiago?</h5>
                <div className="to-do-container">
                    {actions.map(action => {
                        return ( <Card key={action.id} color={action.color} text={action.text}/> )
                    })}
                </div>
            </div>
        </div>
    )
}