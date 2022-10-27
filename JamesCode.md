import { useState, useEffect } from "react";
import './App.css';

let count = 0

const getRandomAsync = (min, max) => {
	console.log("API Requested")
	return new Promise((resolve)=>{setTimeout(() => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const random = Math.floor(Math.random() * (max - min) + min);
		count++
		console.log("API Responded, count: ", count)
		resolve(random)
	}, 2000);})
}

function App(prop) {

	const [random, setRandom] = useState(null)
	const [max, setMax] = useState(10)
	const [min, setMin] = useState(0)
	
	useEffect(()=>{
		const fetchRandom = async () => {
			const randomResult = await getRandomAsync(min, max)
			console.log(randomResult)
			setRandom(randomResult)
		}
		fetchRandom()
	}, [max, min])

  return (
    <div className="App-header">
			{random}
			<input type="number" value={max} onChange={(e)=>{
				setMax(e.target.value)
			}}/>
			<input type="number" value={min} onChange={(e)=>{
				setMin(e.target.value)
			}}/>
    </div>
  );
}

export default App;