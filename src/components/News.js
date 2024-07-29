import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

function News(props) {
  const { category } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const resultNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=0f3c08aa9206454ba355a31f7c526a60`;
      const response = await fetch(url);
      const parsedData = await response.json();
      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        console.error("No articles found in the API response");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    resultNews();
  }, [category]);

  const fetchData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
        page + 1
      }&apiKey=0f3c08aa9206454ba355a31f7c526a60`;
      setPage((prevPage) => prevPage + 1);

      const response = await fetch(url);
      const parsedData = await response.json();
      if (parsedData.articles) {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...parsedData.articles,
        ]);
      } else {
        console.error("No articles found in the API response");
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <span>
      <Navbar1 />
      <Navbar2 />

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all ©️Arnav Chaturvedi 22BCE2110</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles && articles.length > 0 ? (
              articles.map((element) => (
                <div className="col-lg-4 my-3 w-30" key={element.url}>
                  <NewsItem
                    className="h-100"
                    sourceName={element.source.name}
                    title={element.title}
                    desc={
                      element.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo amet tempore, molestiae aliquam laboriosam nostrum! Incidunt unde corporis molestias velit?"
                    }
                    imageURL={element.urlToImage || "./news.jpg"}
                    newsUrl={element.url}
                  />
                </div>
              ))
            ) : (
              <p>Loading articles...</p>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </span>
  );
}

export default News;
