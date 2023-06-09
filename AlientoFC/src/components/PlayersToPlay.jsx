export const PlayersToPlay = ({players, setPlayers}) => {
    
    const handleChange = (id) => {
        const playerToEdit = players.find((player) => player.id === id)
        
        const updatedPlayer = {
            name: playerToEdit.name,
            score: playerToEdit.score,
            goal: playerToEdit.score,
            assist: playerToEdit.assist,
            style: playerToEdit.style,
            juega: playerToEdit.juega  ? false : true,
            id:playerToEdit.id
        }
        const updatedPlayers = players.map((player) => {
            if(player.id === id){
                return {...player, ...updatedPlayer}
            }
            return player
        })
        setPlayers(updatedPlayers)
    }

    return (
        <>
            { players.map(player => {
                return (
                    <tr className="border-b dark:bg-gray-900 dark:border-gray-700" key={player.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {player.name}
                        </th>
                        <td className="px-6 py-4">
                        {player.score}
                        </td>
                        <td className="px-6 py-4 contenedor-check">
                            <input onChange={() => {
                                handleChange(player.id)
                            }} id="terms" type="checkbox" checked={player.juega} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}