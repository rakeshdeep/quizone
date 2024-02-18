import React from 'react'
import './Content.css';
import Question from './Question';

import CarousalImage1 from './images/quiz-slide1.jpg'
import CarousalImage2 from './images/quiz-slid2.jpg'
import CarousalImage3 from './images/quiz-slid3.jpg'

export default function Content() {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade my-alert" id='alertbox' role="alert">
        <strong>Narendra Modi !</strong> You Choose the correct option Congratulations.
      </div>
      <main className='main-container'>

        <div className="quiz-box">
          <Question />
        </div>
        <div id="carouselExampleAutoplaying" className="carousel slide mycarousel my-border" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={CarousalImage2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={CarousalImage1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={CarousalImage3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  );
}
