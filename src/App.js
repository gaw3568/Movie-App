import logo from './logo.svg';
import "./App.css";
import { ReactPropTypes } from 'react';
import { checkPropTypes } from 'prop-types';


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
    name : "반지의 제왕 왕의 귀환",
    image : "https://w.namu.la/s/e88f6d51b4d2264dbc1ac9a8ec267031a8b18a5697c260c598705e9eb66d1e2976203a69afcc8d027f4165b28eeabc2465c7a2eb4f92c9c3667bfc97b15eed54db623b0b39a0978381b10df6e381eb49e4022f13dc6fe30ccd714e210e30138cac183370c9dfe1d93060a90b451bc53e",
    rating : 4.6
  },
  {
    id : 4,
    name : "광해 왕이 된 남자",
    image : "https://upload.wikimedia.org/wikipedia/ko/a/a4/%EA%B4%91%ED%95%B4%2C_%EC%99%95%EC%9D%B4_%EB%90%9C_%EB%82%A8%EC%9E%90.jpg",
    rating : 4.2
  },
];

function Movie({name, poster, rating}) {
  return (<div>
    <h2> {name} 좋아한다 어쩔래</h2>
    <h4>{rating} / 5.0</h4>
    <img src={poster} alt={name}/>
  </div>
  );
}
/*
Movie.ReactPropTypes = {
  name : ,
  rating : ,
  picture :
}
*/

// 함수형 컴포넌트
// 컴포넌트 : html 덩어리를 뱉어내는 함수
function App() {

  return <div>
    <h2>여긴 영화페이지야 짜샤</h2>
    {movieILike.map(movie => (<Movie name={movie.name} poster={movie.image} rating={movie.rating}/>))}
  </div>;
}

export default App;
