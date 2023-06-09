import { useState } from "react"

export const FormAddPlayer = ({popUp, setPopUp, setPlayers, players}) => {
    const classPopUp = popUp ? "pop-up-container": "no-pop-up"
    
    const [nameAndSurname, setNameAndSurname] = useState("")
    const [score, setScore] = useState(0)
    const [goal, setGoal] = useState(0)
    const [assist, setAssist] = useState(0)
    const [style, setStyle] = useState("")   
    const [lastId, setLastId] = useState(players.length)
    
    const closePopUp = () => {
        setPopUp(prevState => {
            return !prevState
        })
    }

    const handleAddPlayer = (e) => {
        e.preventDefault()
        const newPlayer = {
            name: nameAndSurname,
            score: score,
            goals: goal,
            assists: assist,
            style: style,
            id:lastId + 1
        }
        setPlayers([...players,newPlayer ])
        setPopUp(false)
    }

    const handleChange = (e) => {
        switch(e.target.id){
            case "name":
                setNameAndSurname(e.target.value)
                break;
            case "score": 
                setScore(e.target.value)
            break;
            case "goal":
                setGoal(e.target.value) 
            break;
            case "assist": 
                setAssist(e.target.value)
            break;
            case "style": 
                setStyle(e.target.value)
            break;
        }
    }
 
    return (
        <div className={classPopUp}>
            <form className="form-popup-container" onSubmit={handleAddPlayer}>
                <div className="bg-form">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre y Apellido</label>
                        <input onChange={handleChange} type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={nameAndSurname} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Puntaje</label>
                        <input onChange={handleChange} type="number" min="1" max="100" id="score" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={score} required />
                    </div>
                    <div className="two-elements-container">
                        <div className="mb-6">
                            <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goles</label>
                            <input onChange={handleChange} type="text" id="goal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={goal} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="assist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asistencias</label>
                            <input onChange={handleChange} type="text" id="assist" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={assist} required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="style" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estilos</label>
                        <input onChange={handleChange} type="text" id="style" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={style} required />
                    </div>
                    <div  className="form-popup-btn-container">
                        <button type="submit" className="responsive-button focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm padding-x-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Agregar</button>
                        <button onClick={closePopUp} type="button" className="responsive-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm padding-x-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Volver</button>
                    </div>
                </div>
            </form>
        </div>
    )
}