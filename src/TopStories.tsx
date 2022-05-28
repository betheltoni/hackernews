import React, { useEffect, useState } from 'react'
import api from "./api/Story";
import NewsCard from './NewsCard';

const TopStories = () => {


    const [topStory, setTopStory] = useState<any>([]);

    useEffect(() => {
        const getTopStories = async () => {
          try{
            const response = await api.get("/topstories.json?print=pretty")
            // console.log(response.data);
            const topStoryId = response.data;
            const newTopStories = [];
            for(let i = 0; i < 30; i++){
              // console.log(topStoryId[i]);
              
              const res = await api.get(`/item/${topStoryId[i]}.json?print=pretty`);
            //   console.log(res);
              newTopStories.push(res.data);
            //   setTopStory([res.data]);
            setTopStory([...newTopStories]);
            
              // console.log(newTopStories);
            }
            
          } catch (err:any){
            console.log(err);
          }
        }
        getTopStories();
      }, [])


      console.log(topStory);

      const renderStory = topStory.map((story:any, index:number) => {
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

export default TopStories