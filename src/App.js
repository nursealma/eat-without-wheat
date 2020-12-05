import React, { useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const API_KEY = "1a74f33e4640408f85eaf6592023379a";

    const [recipes, setRecipes ] = useState([]);
    const [search, setSearch ] = useState('');
    const [query, setQuery ] = useState('');
    const [validResponse, setValidResponse] = useState(false)


    useEffect(() => {
        const getRecipes = async() => {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&intolerances=gluten&addRecipeInformation=true`);
            const data = await response.json();
            setRecipes(data.results);
            if (data.results.length > 0) {setValidResponse(true)} else {setValidResponse(false)}
            console.log(data.results)
        }
        getRecipes();
    },[query]) // second argument determines conditions under which effect is run
        
    const updateSearch = e => {
        setSearch(e.target.value)
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return (
        <div className="App">
            <div className="header">
                <h1>Eat Without Wheat</h1>
                <h3>enter a keyword below and see a selection of gluten-free dishes </h3>
            </div>
            <form className="search-form" onSubmit={getSearch}>
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button">search</button>
            </form>
            
            <div className="recipes">
                {
                validResponse === true ?
                recipes.map((recipe, id) => (
                    <Recipe
                    key={id}
                    title={recipe.title}
                    summary={recipe.summary}
                    image={recipe.image}
                    />)
                )
                : <h1>please enter a valid ingredient</h1>
                }
            </div>
        </div>
    )


}

export default App;