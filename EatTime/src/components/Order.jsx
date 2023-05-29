import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const Order = () => {
    const location = useLocation()
    useEffect(()  => {
        console.log(location.state)
    })
    return (
        <h1>Haga su orden en {location.state.id} </h1>
    )
}