import React from 'react'

const NewsCard = (props: {stories: {title:string; by:string; time:number; kids:number[]; url:string}}) => {
    const {title, by, time, kids, url} = props.stories;
    // console.log(time);
    const date = new Date(time);
    const formattedTime = date.toLocaleString('en-US', {
      hour12: true,
    })
    // console.log( formattedTime );
  return (
    <div className='stories'>
      <a href={url} target="_blank" rel='noreferrer'>
        <h3>{title}</h3>
      </a>
      <span>by</span>
      <a href={`https://news.ycombinator.com/user?id=${by}`} target="_blank" rel='noreferrer'>
        <span>{by}</span>
      </a> | 
      <span> {formattedTime} </span> |
      {kids === undefined ? (<span> 0 comments</span>) : (<span> {kids.length} comments</span>)}
    </div>
  )
}

export default NewsCard