import React, { useEffect, useState } from 'react'
import api from "./api/Story";
import NewsCard from './NewsCard';

const BestStories = () => {

  const [bestStory, setBestStory] = useState<any>([]);

  useEffect(() => {
    const getBestStories = async () => {
      try{
        const response = await api.get("/newstories.json?print=pretty")
        // console.log(response.data);
        const BestStoryId = response.data;
        const newBestStories = [];
        for(let i = 0; i < 30; i++){
          // console.log(BestStoryId[i]);
          
          const res = await api.get(`/item/${BestStoryId[i]}.json?print=pretty`);
        //   console.log(res);
          newBestStories.push(res.data);
        //   setTopStory([res.data]);
        setBestStory(newBestStories);
        
          // console.log(newBestStories);
        }
      } catch (err:any){
        console.log(err);
      }
    }
    getBestStories();
  }, [])

  console.log(bestStory);

  const renderStory = bestStory.map((story:any, index:number) => {
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

export default BestStories