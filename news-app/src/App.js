import { useEffect, useState } from 'react';
import News from './News';
import './App.css';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-22&apiKey=4f8ca35a1f284d7a9e7dfd9b0c97958f`)
    .then((response) => {
      return response.json();
    }).then((news) => {
      setArticles(news.articles);
      console.log(news.articles);
    }).catch((err) => {
      console.log(err);
    });

  }, [category]);

  return (
    <div className="App">
      
      <header className='header'>
        <h1>Spark News</h1>
        <input type='text' onChange={(event) => {
          if(event.target.value!=="") {
            setCategory(event.target.value);
          }
          else {
            setCategory("india");
          }
        }} placeholder='Search news...'></input>
      </header>

      <section className="news-articles">

        {
          articles.length!==0?

          articles.map((article) => {
            return (
              <News article={article} />
            )
          })
         :
          <div className='not-found'>
            <img src='https://img.hotstar.com/image/upload/v1656431463/web-images/no-result-search.svg'></img>
            <h3>No News Founder</h3>
          </div>
          

        }

      </section>
      
    </div>
  );
}

export default App;
