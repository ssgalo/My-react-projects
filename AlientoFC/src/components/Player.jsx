import { Star } from "./Star"
export const Player = () => {
    return (
        <tr className="bg-dark border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Federico Rojas
                            </th>
                            <td className="px-6 py-4">
                                <div className="stars">
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </td>
                        </tr>
    )
}