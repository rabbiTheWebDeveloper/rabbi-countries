import {useState, useEffect} from 'react';

const useDivisions = (name) => {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try{
        setLoading(true);
        const response = await fetch(`https://bdapis.com/api/v1.1/division/${name}`);
        const data = await response.json();
        setDivisions(data);
      } catch(error) {
        console.error(error);
        setError('The country is not found!!!');
      } finally {
        setLoading(false);
      }
    }

    fetchCountryInfo();
  }, [name]);

  return {
    loading,
    error,
    divisions
  }

}

export default useDivisions;