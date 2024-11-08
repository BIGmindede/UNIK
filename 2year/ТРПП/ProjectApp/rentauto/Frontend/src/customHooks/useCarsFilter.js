import { useMemo } from "react"

export const useCarsFilter = (cats, query, data) => {
    const cated = useMemo(() => {
        console.log(cats)
        if (cats.length > 0) {
            return data.filter(car => cats.includes(car.category))
        }
        else return data
    }, [cats, data])
    const searched = useMemo(() => {
        if (query)
            return cated.filter(car => car.modelName.toLowerCase().includes(query.toLowerCase()))
        else return cated
    }, [cated, query, data])
    return searched
}