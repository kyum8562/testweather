import React from 'react';

const api = {
  key : 'f6fe93b9639c92a2f1d0d9888f6c39a7',
  base : 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className = "App">
      <main>
        <div className = "search-box">
          <input 
            type ="text"
            className = "search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
