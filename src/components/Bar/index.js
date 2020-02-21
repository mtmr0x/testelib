import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Carousel } from 'antd';
import Header from 'antd/lib/calendar/Header';



const Bar = () => ReactDOM.render(
  <Carousel autoplay>
    <div>
      <h3>ola mundo</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
  
export default Bar;