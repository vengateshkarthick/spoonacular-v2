import React from 'react';
import Image from 'next/image';
import { searchRecipesItemList } from '@/utils/recipes';
import Carousel from '@/components/organisms/Carousel';
import { Typography } from '@/components/atoms/Typography';


export function ExploreRecipesCarousel() {
  return (
    <Carousel 
      title="Explore some delicious recipe..."
      items={searchRecipesItemList}
      itemWrapperClassName="w-max h-max p-1 flex flex-col gap-y-4"
      render={(item) => {
        return (
            <div className="m-1 p-2">
               <Image 
                 src={item.image}   
                 width="100"
                 height="120"
                 className='object-cover'
                 alt={`delicious recipes  ${item.title}`}
               />
               <Typography level={7} variant="tertiary" className="capitalize text-center">
                {item.title}
               </Typography>
            </div>
        )
      }}
    
    />
  )
}