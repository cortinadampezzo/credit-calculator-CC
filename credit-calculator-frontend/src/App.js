import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import {Carousel} from 'react-materialize';
import image1 from './images/background-image-1.jpg';
import image2 from './images/background-image-2.jpg';
import image3 from './images/background-image-3.jpg';

function App() {
    return (
        <div className="App">
            <Carousel options={{fullWidth: true, indicators: true, padding: 60}} images={[
                image1,
                image2,
                image3
            ]}/>
        </div>
    );
}

export default App;
