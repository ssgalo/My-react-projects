export const PopUpDelete = ({popUp, id, players, setPopUp, handleRemovePlayer}) => {
    const classPopUp = popUp ? "pop-up-container": "no-pop-up"
    const playerToDelete = players.find((player) => player.id === id)

    const handleDelete = () => {
        handleRemovePlayer(id)
        setPopUp(false)
    }

    const handleComeBack = () => {
        setPopUp(false)
    }
    return (
        <div className={classPopUp}>
            <div className="pop-up-delete-container">
                <div className="bg-form">
                    <div className="warning-icon">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <ion-icon name="alert-circle-outline"></ion-icon>
                    </div>
                    <div className="text-content-popup-delete">
                        <h6>Estas apunto de borrar al jugador</h6>
                        <img className="delete-player-img" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" alt="" />
                        <p>{playerToDelete?.name}</p>
                    </div>
                    <div className="button-content-popup-delete">
                        <button onClick={handleDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Borrar</button>
                        <button onClick={handleComeBack} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}