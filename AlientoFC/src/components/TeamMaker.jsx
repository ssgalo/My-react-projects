import { Players } from "./Players"
import { PlayersToPlay } from "./PlayersToPlay"

export const TeamMaker = ({players, setPlayers}) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg popUp responsive-d">
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
                        Juega
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <PlayersToPlay setPlayers={setPlayers} players={players}></PlayersToPlay>
                    </tbody>
                </table>
                <div className="btn-container">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Armar Equipos</button>
                </div>
            </div>
            
        </>
    )
}