import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from './assets/alex-shuper-KwrPZDvZRPk-unsplash.jpg';
import img   from "./assets/allu arjun.jpg";
import pic from './assets/Jawan-27.jpg';

function App() {
  return (
    <>
     <h1 className='text-center text-danger text-capitalize my-5'>This is react-bootstrap Project</h1>
     <div class="container text-center">
  <div class="row">
    <div class="col">
      <div class="card" >
  <img src={image} class="card-img-top" alt="pic" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Ghost</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>


    <div class="col">
    <div class="card" >
   <img src={img} class="card-img-top" alt="..." height="300px" />
  <div class="card-body">
    <h5 class="card-title">Allu Arjun</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>


    <div class="col">
    <div class="card" >
    <img src={pic} class="card-img-top" alt="..." height="300px" />
  <div class="card-body">
    <h5 class="card-title">Jawan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
