
import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const ChuckNorrisApiUrl = 'https://api.chucknorris.io/jokes';
const ChuckNorrisCategoriesUrl = `${ChuckNorrisApiUrl}/categories`;
const ChuckNorrisRandomJokeUrl = `${ChuckNorrisApiUrl}/random`;

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(ChuckNorrisCategoriesUrl);
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching categories');
      setLoading(false);
    }
  };

  const fetchRandomJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${ChuckNorrisRandomJokeUrl}?category=${selectedCategory}`
      );
      const data = await response.json();
      setJoke(data.value);
      setLoading(false);
    } catch (error) {
      setError('Error fetching random joke');
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleGetJokeClick = () => {
    if (selectedCategory) {
      fetchRandomJoke();
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Chuck Norris Jokes</h1>
      </header>
      <main className="main">
        <div className="category-container">
          {loading ? (
            <p className="category-loading">Loading categories...</p>
          ) : error ? (
            <p className="category-error">{error}</p>
          ) : (
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`category-button ${
                    category === selectedCategory ? 'active' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="joke-container">
          {selectedCategory && (
            <div className="joke-card">
              <h2 className="joke-category">Joke in {selectedCategory}</h2>
              {loading ? (
                <p className="joke-loading">Loading joke...</p>
              ) : error ? (
                <p className="joke-error">{error}</p>
              ) : joke ? (
                <p className="joke-text">{joke}</p>
              ) : (
                <p className="joke-empty">No joke available.</p>
              )}
              <button
                className="joke-button"
                onClick={handleGetJokeClick}
                disabled={loading}
              >
                {loading ? 'Getting Joke...' : 'Get Another Joke'}
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 July 13 Chhavi's creation on Chuck Norris</p>
      </footer>
    </div>
  );
}

export default App;








// /*THE BELOW CODE PROVIDES LIL MORE SECURITY*/ 
// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import the CSS file for styling

// const ChuckNorrisApiUrl = 'https://api.chucknorris.io/jokes';
// const ChuckNorrisCategoriesUrl = `${ChuckNorrisApiUrl}/categories`;
// const ChuckNorrisRandomJokeUrl = `${ChuckNorrisApiUrl}/random`;

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [joke, setJoke] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(ChuckNorrisCategoriesUrl);
//       const data = await response.json();
//       setCategories(data);
//       setLoading(false);
//     } catch (error) {
//       setError('Error fetching categories');
//       setLoading(false);
//     }
//   };

//   const fetchRandomJoke = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${ChuckNorrisRandomJokeUrl}?category=${selectedCategory}`
//       );
//       const data = await response.json();
//       setJoke(data.value);
//       setLoading(false);
//     } catch (error) {
//       setError('Error fetching random joke');
//       setLoading(false);
//     }
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleGetJokeClick = () => {
//     if (selectedCategory) {
//       fetchRandomJoke();
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Chuck Norris Jokes</h1>
//       <div>
//         {loading ? (
//           <p>Loading categories...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={category === selectedCategory ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))
//         )}
//       </div>
//       <div>
//         {selectedCategory && (
//           <div>
//             <h2>Joke in {selectedCategory}</h2>
//             {loading ? (
//               <p>Loading joke...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : joke ? (
//               <p>{joke}</p>
//             ) : (
//               <p>No joke available.</p>
//             )}
//             <button onClick={handleGetJokeClick}>Get Another Joke</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




