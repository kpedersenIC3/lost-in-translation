import { useState } from "react";
const Guitars = () => {
    const [guitars, setGuitars] = useState([]);

    const handleImageClick = () => {
        console.log("guitar selected")
    }

    const models = guitars.map((guitar)=>{
        return(
            <div key={guitar.id}>
                <h4>{guitar.model}</h4>
                <img src={guitar.image} alt={"Picture of" + guitar.model} onClick={handleImageClick}></img>
            </div>
        )
      })
    
    const handleLoadGuitarData = async () => {
        const response = await fetch("https://kasper-assignment-api.herokuapp.com/guitars")
        const result = await response.json()
        setGuitars(result)
    }

    return(
      <div className="App">
            <button onClick={handleLoadGuitarData}>Load Guitars</button>
        <h1>Guitar Store</h1>
        {/* hasGuitars ? if true return models, if false do whatever is after the colon : */}
        <div>{guitars.length > 0 ? models: <p>No Guitars</p>}</div>
      </div>
    )
}

export default Guitars