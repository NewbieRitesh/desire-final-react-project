import React from "react";
import Array from './HomeArr'
import HomeProp from "./HomeProp";
const Home = () => {
    return(
        <>
            <div className='flex  flex-wrap justify-around m-1 p-10'>
          {Array.map((item )=>{
            return(
                <>
                <HomeProp key={item.id} img={item.img} title={item.title} p={item.p} alt={item.alt} button={item.button}/>
                </>
            );
          })}
          </div>
        </>
    )
}

export default Home;