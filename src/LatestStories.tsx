import React, { useEffect, useState } from 'react'
import api from "./api/Story";
import NewsCard from './NewsCard';

const LatestStories = () => {

  const [latestStory, setLatestStory] = useState<any>([]);

  useEffect(() => {
    const getLatestStories = async () => {
      try{
        const response = await api.get("/newstories.json?print=pretty")
        // console.log(response.data);
        const latestStoryId = response.data;
        const newLatestStories = [];
        for(let i = 0; i < 30; i++){
          // console.log(LatestStoryId[i]);
          
          const res = await api.get(`/item/${latestStoryId[i]}.json?print=pretty`);
        //   console.log(res);
          newLatestStories.push(res.data);
        //   setTopStory([res.data]);
        setLatestStory([...newLatestStories]);
        
          // console.log(newLatestStories);
        }
      } catch (err:any){
        console.log(err);
      }
    }
    getLatestStories();
  }, [])

  // console.log(latestStory);

  const renderStory = latestStory.map((story:any, index:number) => {
    return(
        <NewsCard stories={story} key={index} />
    )
  })
  return (
    <div>
       {renderStory} 
    </div>
  )
}

export default LatestStories