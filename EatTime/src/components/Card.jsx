import { useNavigate, Routes, Route } from "react-router-dom"



export const Card = ({color, text}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/takeOrder')
    }

    return (
            <div className="to-do-item" onClick={handleClick}>
                <div className={`to-do-header to-do-header-${color}`}>
                    <img className="rounded img-rounded" src="src/assets/images/Hamburguer.png" alt="" />
                </div>
                <div className="to-do-text">
                    <p>{text}</p>
                </div>
            </div>
        
    )
}