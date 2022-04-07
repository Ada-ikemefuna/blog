import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null)

        useEffect(() => {
            fetch(url)
            .then(res => 
               { if(!res.ok){
                    throw Error('could not load data from resource')
                }
                
                return res.json()}
            ).then(data => {
                setData(data)
                setIsloading(false)
                
            }).catch(err => {
                setError(err.message)
                setIsloading(false)
            })
            
        }, [])
    return { data, isLoading, error }
    
}
 
export default useFetch;