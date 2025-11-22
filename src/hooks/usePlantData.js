import { useEffect, useState } from "react"

const usePlants = () => {
    const [plants, setPlants] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch('/plants.json')
        .then((res) => {
            if(!res.ok){
                throw new Error ('Failed to fetch data');
            } return res.json();
        })
        .then((data) => setPlants(data))
        .catch((error) => setError(error))
        .finally(()=> setLoading(false));
    }, [])
    return{ plants, loading, error}
}

export default usePlants