import React from 'react';
import { Icon } from '@iconify/react';



export default function Video() {




  return (  
    <div className='w-full bg-transparent md:pt-24'>
        <h1 className='font-naslovi flex justify-center text-5xl md:text-6xl text-accent'>What is shots'n'ladders?</h1>
       <div class="iphone-x md:rotate-90 scale-50 md:scale-75 lg:scale-100 flex justify-center">
        <i></i>
        <b></b> 

        <button class="btn text-accent m-auto bg-transparent border-0 md:-rotate-90 text-9xl w-min h-min "><Icon icon="bi:play-btn" /></button>
{/*         <iframe className='' src="https://www.youtube.com/embed/c7ZZ04Yo7lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */}
 
       
        
       
        </div>
     </div>
    )

}
