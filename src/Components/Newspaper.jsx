import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {useMutation} from 'react-query';


export default function Newspaper() {

   

    const [fullName,setFullName] = useState("")
    const handleName = ({target:{value}}) => setFullName(value)
    const [email,setEmail] = useState("")
    const handleEmail = ({target:{value}}) => setEmail(value)

    const [captcha,setCaptcha] = useState("")



    const [poslano,setposlano] = useState("false");

        function sendPost (event) {
            event.preventDefault();
            mutation.mutate({
                ime: fullName,
                mail: email,
                captchaToken: captcha,
            });
            console.log("submited?");
        }
     
          const mutation = useMutation(
            text => axios.post('http://localhost:3100/api/posting', { text }),
            {
                 onSuccess: (data, variables, context) => {
                    // I will fire first
                    console.log(data.data);
                  },
                 onError: (error, variables, context) => {
                // I will fire first
                    },
            }
          )
   
    function onChange(value) {
        setCaptcha(value);
        console.log('Captcha value:', value);
    }



  return (  
    <>
        
        <section class="text-gray-600 body-font bg-turkizna">
            

            <form onSubmit={sendPost} method="post" >
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            {/* <img className="absolute transform-gpu scale-50 left-1/4 skew-x-12 -skew-y-12 z-0" src="images/play_Board.png" alt=""/>  */}
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-3xl text-gray-900">Prijavi se na časopis !</h1>
                <p class="leading-relaxed mt-4"> Bodi obveščen o vseh novicah !</p>
                </div>
                
                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 z-10">
                <h2 class="text-lg font-medium title-font mb-5 text-primary">Fill out to subscribe</h2>
                <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" value={fullName} onChange={handleName} id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email *</label>
                    <input required value={email} onChange={handleEmail} type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="App">
                    <ReCAPTCHA
                        sitekey="6LerNyogAAAAAD9X1A4eSHdO2L5hhEukHWdme0EE"
                        size="normal"
                        onChange={onChange}
                    />
                </div>
                <button type='submit' class="text-white bg-accent border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
            </form>
        </section>
    </>
    )

}
