import React, { useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';

const News= (props) =>{ 
  const [articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  // document.title=`${ this.captilizeFirstLetter(props.category)}- News Monkey App`;

  
  const captilizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }
    const upadateNew= async()=>{
      let url=`https://newsapi.org/v2/top-headlines? 
      country=${props.country}&category=${props.category}&apiKey=4133f5653a5b4b8b87b291478d0a669e&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data=await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      setArticles(parseData.articles)
      setTotalResults(parseData.totalResults)
      setLoading(false)
    }

    useEffect(()=>{
      upadateNew();
    }, [])

    const fetchMoreData = async() => {
     setPage(page+1)
     let url=`https://newsapi.org/v2/top-headlines? 
    country=${props.country}&category=${props.category}&apiKey=4133f5653a5b4b8b87b291478d0a669e&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data=await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      setArticles(articles.concat(parseData.articles))
      setTotalResults(parseData.totalResults)


    };
  
    
    return (
      <>

      <div className='container my-3'>
        <h1 className='text-center'>Top Headlines-{ captilizeFirstLetter(props.category)} category</h1>
        <InfiniteScroll 
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">

          </div>
       <div className='row' >
       {articles.map((element)=>{return <div className='col-md-3' key={element.url}>
      <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
      })}
      </div>

      </InfiniteScroll>

        </div>
        </>
    )
    
    }

    News.defaultProps={
      country:"in",
     category:"general",
     pageSize:8
 }
News.propTypes={
   country:"in",
   pageSize:8,
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string,
}

export default News
