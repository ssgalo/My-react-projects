import { players as initialPlayers } from "../mocks/players.json";

export const Player = () => {
    return (
        <>
            {initialPlayers.map(player => {
                return (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {player.name}
                    </th>
                    <td className="px-6 py-4">
                    {player.name}
                    </td>
                    <td className="px-6 py-4">
                    {player.name}
                    </td>
                    <td className="px-6 py-4">
                    {player.name}
                    </td>
                    <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                )
            })}
        </>
    )
}