
export const useFetch = async (url, method = "GET", bodyQuery = {}) => {

    let result, dataQuery
    try {
        if (method !== "GET") {

            result = await fetch(url, {
                method,
                body: JSON.stringify(bodyQuery),
                headers: { "Content-type": "application/json" }
            })
            dataQuery = await result.json()

            return dataQuery
        } else {
            result = await fetch(url)
            dataQuery = await result.json()

            return dataQuery
        }
    } catch (error) {
        console.error(`Ha habido un error: ${error.message}`)
    }

}
