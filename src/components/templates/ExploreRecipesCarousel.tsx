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
      className='bg-white border rounded-2xl p-4 md:p-8'
      itemWrapperClassName="w-max h-max p-1 flex flex-col gap-y-4"
      render={(item) => {
        return (
            <div className="m-1 p-2">
               <Image 
                 src={item.image}   
                 width="150"
                 height="120"
                 className='object-cover bg-transparent'
                 alt={`delicious recipes  ${item.title}`}
               />
            </div>
        )
      }}
    
    />
  )
}