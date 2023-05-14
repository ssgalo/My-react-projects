/* eslint-disable react/prop-types */
import { useState } from "react"

export const Filters = ({setFilters}) => {
    const [minValue, setMinValue] = useState(1)
    
    const handleChange = (e) => {
        setMinValue(e.target.value)

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
            <p>{minValue}</p>
        </form>
    )
}