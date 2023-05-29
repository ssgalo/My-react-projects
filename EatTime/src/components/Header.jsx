import { useState } from "react"
import { Card } from "./Card"
import { useNavigate, Routes, Route } from "react-router-dom"
import { TakeOrder } from "./TakeOrder"


export const Header = () => {

    const food = [
        {
            color:"red",
            text:"Hamburguesa",
            id:1,
            url: "src/assets/images/Hamburguer.png"
        },
        {
            color:"green",
            text:"Milanesa",
            id:2,
            url: "src/assets/images/milanesa.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:3,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:4,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:5,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:6,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:7,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:8,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:9,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:10,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:11,
            url: "src/assets/images/pizza.png"
        },
        {
            color:"blue",
            text:"Pizza",
            id:12,
            url: "src/assets/images/pizza.png"
        }
    ]
    return(
        <div>
            <div className="container pt-5">
                <h5 className="mb-4 header-text">¿Qué vas a pedir hoy, Santiago?</h5>
                <div className="to-do-container">
                    {food.map(element => {
                        return ( <Card key={element.id} color={element.color} text={element.text} url={element.url} id={element.id}/> )
                    })}
                </div>
            </div>
        </div>
    )
}