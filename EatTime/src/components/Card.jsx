import { useNavigate, Routes, Route } from "react-router-dom"



export const Card = ({color, text, url, id}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        //It's not necessary to write id:id
        navigate('/order', {state:{id}})
    }

    return (
            <div className="to-do-item" onClick={handleClick}>
                <div className={`to-do-header to-do-header-${color}`}>
                    <img className="rounded img-rounded" src={url} alt="" />
                </div>
                <div className="to-do-text">
                    <p>{text}</p>
                </div>
            </div>
    )
}