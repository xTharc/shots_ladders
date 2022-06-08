import React from 'react';
import { useTranslation } from 'react-i18next';
import Newspaper from '../Components/Newspaper';
import Video from '../Components/Video';
import 'animate.css';
export default function Home() {
  const {t, i18n} = useTranslation();


let launchDate = new Date("Jun 19, 2022 20:00:00").getTime();

const [Days, setDays] = React.useState("");
const [Minutes, setMinutes] = React.useState("");
const [Hours, setHours] = React.useState("");
const [Seconds, setSeconds] = React.useState("");

let myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = launchDate - now;
        
    setDays(''+Math.floor(timeleft / (1000 * 60 * 60 * 24))+'');
    setHours(''+Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+'');
    setMinutes(''+Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))+'');
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    
  }, 1000)


  return (
    <div className='parallax'>
      <div className='parallax__layer parallax__layer--back spiral -z-20'>
        <div className='spiral w-full h-screen'></div>
      </div>
        <div className='parallax__layer parallax__layer--base '>

        
        <section class="text-gray-600 body-font ">
          <div class="container mx-auto flex px-5 pb-12 pt-48 md:flex-row flex-col items-center min-h-screen">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="font-naslovi text-transparent text-6xl bg-clip-text bg-gradient-to-b from-temnoOranzna to-oranzna animate__animated animate__backInDown animate__fast"> 
                  {t('landingPage.naslov')}
              </h1>
              <span className='animate__animated animate__backInUp animate__fast'>
              <p class="mb-8 text-2xl leading-relaxed text-accent font-bold"> {t('landingPage.textp1')}</p>
              <p class="mb-8 text-2xl leading-relaxed text-warning font-bold"> {t('landingPage.test')}</p>
              </span>
              <div class="flex justify-center animate__animated animate__backInUp animate__fast">
              
                  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-5xl">
                        <span style={{'--value':''+Days+''}}></span>
                      </span>
                      Days
                    </div> 
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-5xl">
                      <span style={{'--value':''+Hours+''}}></span>
                      </span>
                      Hours
                    </div> 
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-5xl">
                      <span style={{'--value':''+Minutes+''}}></span>
                      </span>
                      Mins
                    </div> 
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-5xl">
                        <span style={{'--value':''+Seconds+''}}></span>
                      </span>
                      Secs
                    </div>
                  </div>
              </div>
              
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
          </div>
        </section> 
       
      <Newspaper />
       

       
        <Video />
        </div>
      </div>
    )

}
