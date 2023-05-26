import { Player } from "./Player"

export const Players = () => {
    return (
        
            <div className="players-container relative overflow-x-auto">
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
                                Votaste
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Clear
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Player></Player>
                        <Player></Player>
                        <Player></Player>
                        <Player></Player>
                        <Player></Player>
                        <Player></Player>
                        <Player></Player>
                    </tbody>
                </table>
            </div>     
    )
}