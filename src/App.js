import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[datas,setDatas]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  
  const api="https://dummyjson.com/users"
  const fetchapi= async(url)=> {
    try{
    const res=await fetch(url)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data=await res.json()
    setDatas(data.users)
    //console.log(data)
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
  }
  useEffect(()=>{
    fetchapi(api);
  },[])

  const filteredData = datas.filter((item) =>
  item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div className="justify-center items-center">
      <h1 className="text-4xl font-bold">
        Api Fetching
      </h1>
      <input type="text"  placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
      {/* {
         datas.map((item) => (
         <h2>{item.firstName}</h2>
        )
        )
      } */}
       {filteredData.map((item) => (
        <h2 key={item.id}>{item.firstName}</h2>
      ))}
    </div>
  );
}

export default App;
