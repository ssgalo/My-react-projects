/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.js"

export const Filters = () => {
    const {filters, setFilters} = useFilters()
    
    const handleChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice:e.target.value
        }))
    }

    return (
        <form className="form-container">
            <input 
                type="range" 
                min={1}
                max={3000}    
                onChange={handleChange}
            />
            <p>{filters.minPrice}</p>
        </form>
    )
}