import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import {Carousel} from 'react-materialize';

function App() {
  return (
    <div className="App">
        <Carousel options={{fullWidth: true,indicators: true}} images={[
            'https://picsum.photos/250/250?image=0',
            'https://picsum.photos/250/250?image=1',
            'https://picsum.photos/250/250?image=2'
            ]} />
    </div>
  );
}

export default App;
