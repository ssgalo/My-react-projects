export const Players = ({players, activatePopUpDelete, activatePopUpEdit}) => {
    
    const handleRemove = (id) => {
        activatePopUpDelete(id)
    }

    const handleEdit = (id) => {
        activatePopUpEdit(id)
    }

    return (
        <>
            { players.map(player => {
                return (
                    <tr className="border-b dark:bg-gray-900 dark:border-gray-700" key={player.id}>
                        <th scope="row" className="responsive-cell px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {player.name}
                        </th>
                        <td className="px-6 py-4 responsive-cell">
                        {player.score}
                        </td>
                        <td className="px-6 py-4 display-none responsive-cell">
                        {player.style}
                        </td>
                        <td className="responsive-cell px-6 py-4 contenedor-icon">
                            <div className="edit-icon" onClick={() => {
                                handleEdit(player.id)
                            }}>
                                <ion-icon name="pencil-outline"></ion-icon>
                            </div>
                            <div className="delete-icon" onClick={() => {
                                handleRemove(player.id)
                            }}>
                                <ion-icon name="trash-outline"></ion-icon>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}