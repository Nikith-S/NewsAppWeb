// import React, { Component } from 'react'

const NewsItem =(props)=>{
    let  {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" style={{width: '18rem'}}>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex :'1'}}>
    {source}
    
  </span>
  <img src={!imgUrl?"https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-2023-04-14t100127.688-168144670116x9.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">by {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )  
  
}


export default NewsItem
