import { useMemo } from "react"

const chooseSortCallback = (sortBy, a, b) => {
    if (!a[sortBy]) return false
    if (!b[sortBy]) return true
    console.log(a[sortBy])
    console.log(b[sortBy])    
    if (typeof a[sortBy] === "number") return a[sortBy] - b[sortBy]
    else return a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase())
}

export const useSortedData = (DBcont, sortBy) => {
    const sortedData = useMemo(() => {
        if (sortBy.length > 0) {
            return [...DBcont].sort((a,b) => chooseSortCallback(sortBy, a, b))
        }
        return DBcont
    }, [sortBy, DBcont])
    return sortedData
}

export const useSearchedSortedData = (DBcont, sortBy, query) => {
    const sortedData = useSortedData(DBcont, sortBy)

    const searchedData = useMemo(() => {
        if (DBcont.length > 0) {
            const compField = Object.keys(DBcont[0]).filter(key => key.toLowerCase().includes("name"))[0]
            if (query.length > 0) {
                return sortedData.filter(item => item[compField] &&
                    item[compField].toLowerCase().includes(query.toLowerCase())
                )
            }
            return sortedData.filter(item => item[compField])
        }
        return sortedData
    }, [query, sortedData])

    return searchedData
}