import { Players } from "./Players"
import { ActionButtons } from "./ActionButtons"

export const TablePlayers = ({players, activatePopUpDelete, activatePopUpEdit, setPopUp}) => {
    
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg popUp">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Jugador
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Puntaje
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Estilo
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Acciones
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <Players players={players} activatePopUpDelete={activatePopUpDelete} activatePopUpEdit={activatePopUpEdit}></Players>
                    </tbody>
                </table>
            </div>
            <ActionButtons setPopUp={setPopUp}></ActionButtons>
        </>
    )
}