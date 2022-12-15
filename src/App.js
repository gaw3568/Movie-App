import React from 'react';
import "./App.css";
import PropTypes from 'prop-types';


const movieILike = [
  {
    id : 1,
    name : "해리포터와 비밀의 돌",
    image : "https://upload.wikimedia.org/wikipedia/ko/d/dd/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg",
    rating : 4.9
  },
  {
    id : 2,
    name : "악마를 보았다",
    image : "https://upload.wikimedia.org/wikipedia/ko/9/9e/%EC%95%85%EB%A7%88%EB%A5%BC_%EB%B3%B4%EC%95%98%EB%8B%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating : 4.4
  },
  {
    id : 3,
    name : "광해 왕이 된 남자",
    image : "https://upload.wikimedia.org/wikipedia/ko/a/a4/%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg",
    rating : 4.2
  },
];

function Movie({name, poster, rating}) {
  return (<div>
    <h2>제목 : {name}</h2>
    <h4>평점 : {rating} / 5.0</h4>
    <img src={poster} alt={name}/>
    <p>------------------------------------------------</p>
  </div>
  );
}

function renderFood(movie) {
  return <Movie id={movie.id} name={movie.name} poster={movie.image} rating={movie.rating}/>;
}

// 함수형 컴포넌트
// 컴포넌트 : html 덩어리를 뱉어내는 함수
function App() {
  console.log(movieILike.map(renderFood));
  return <div>
    <h1 style={{color : "blue"}}>1. 영화</h1>
    <br></br>
    {movieILike.map(renderFood)}
  </div>;
}

Movie.checkPropTypes = {
  name : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  rating : PropTypes.number
}

export default App;
