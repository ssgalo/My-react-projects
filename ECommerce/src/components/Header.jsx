/* eslint-disable react/prop-types */
import { Filters } from "./Filters"

export const Header = ({setFilters}) => {
    return (
        <>
            <header>
                <h1>React Shop 🛒</h1>
            </header>
            <Filters setFilters={setFilters}></Filters>
        </>
    )
}