import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import {BrowserRouter as Router, Link, useNavigate, useLocation  } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useWindowPosition from '../Functions/useWindowPosition';
//import ReactDOM from 'react-dom';



function Header() {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    let scroll = useWindowPosition();
    
    const [visinaMenija,setVisinaMenija] = React.useState({
        visina: "lg:h-24",
        slika: "lg:w-1/3"
        });
        
    useEffect(() => {
        if (scroll == 0) {
            /* console.log("naVrhu"); */
            setVisinaMenija({
                visina: "lg:h-24",
                slika: "lg:w-1/3"
                });
        } else {
           /*  console.log("Bolj dol") */
            setVisinaMenija({
                visina: "lg:h-16",
                slika: "lg:w-1/4"
                });
        } 
    },
    // array of variables that can trigger an update if they change. Pass an
    // an empty array if you just want to run it once after component mounted. 
    [scroll])
    
       
     /* console.log(useWindowPosition());  */

    
     
    const [odprtostMenija,setOdprtostMenija] = React.useState({
        odprtost: "scale-y-0",
        rotacija: "-mt-8",
        rotacija2: "-mt-6",
        rotacija3: "-mt-4"
    });
    const [hide,setHide] = React.useState(true);

    

    
   
    function TranslateClick(lang) {
        
        let currLang = i18n.changeLanguage(lang);
       
        /*  const currentPathname = window.location.pathname.replace(/\/+$/, ''); */
     
        
        setTimeout(function() { 
            currLang = i18n.language;
            console.log(i18n.language);
            console.log(location.pathname);
            const lastItem = (location.pathname).substring((location.pathname).lastIndexOf('/') + 1);
            console.log(lastItem);
           if (lastItem.length > 2) {
            let sendToURL = "/"+currLang+"/"+lastItem+"";
            navigate(sendToURL);
           } else {
            let sendToURL = "/"+currLang+"";
            console.log(sendToURL);
            navigate(sendToURL);
           }
         }, 100);
        document.activeElement.blur();
       setHide("hidden");
       setTimeout(function() { setHide("") }, 100);
    }

 
    let leto = new Date().getFullYear();

    function odpriMeni() {
        odprtostMenija.odprtost === "" ? setOdprtostMenija({
            odprtost: "scale-y-0",
            rotacija: "-mt-8",
            rotacija2: "-mt-6",
            rotacija3: "-mt-4"
        }) : setOdprtostMenija({
            odprtost: "",
            rotacija: "-mt-6 rotate-45",
            rotacija2: "-mt-6 -rotate-45",
            rotacija3: "-mt-6 -rotate-45"
        })

    }

    return (<>
    <header className={"fixed top-0 z-50 w-full bg-temnoZelena border-b border-gray-900 shadow-xl h-20 md:h-28 transition-all duration-200 "+visinaMenija.visina}>
        <div className="flex flex-row items-center justify-between w-full h-full text-white lg:flex-row">
            {/* Dropdown za izbiro jezika jezik */}
            <div class="dropdown dropdown-hover hidden md:block flex-1">
                <label tabindex="0" class="btn m-1 border-0 bg-temnoZelena hover:bg-turkizna w-max">
                            <Icon icon="iconoir:language" className='mx-1' />
                            {t('chooseLang.gumb')}
                </label>
                <ul tabindex="0" class={"bg-temnoZelena hover:bg-turkizna dropdown-content menu p-2 shadow rounded-box w-52 "+hide}>
                        <li className=''><a onClick={()=>TranslateClick('en')}>
                            <Icon icon="emojione:flag-for-united-kingdom" />
                            {t('chooseLang.lang1')}</a></li>
                        <li className='myclass_hover'><a onClick={()=>TranslateClick('sl')}>
                            <Icon icon="emojione:flag-for-slovenia" />
                            {t('chooseLang.lang2')}</a></li>
                        <li><a onClick={()=>TranslateClick('sp')}>
                            <Icon icon="emojione:flag-for-spain" />
                            {t('chooseLang.lang3')}</a></li>
                </ul>
            </div>
            {/* SREDINA SLIKA IN GUMBI */}
            <Link className={"m-2 cursor-pointer md:h-auto md:p-4 transition-all w-64 duration-150 "+visinaMenija.slika} to="/"><img  src="images/Shots_&_Ladders_Header.png" alt=""/></Link>
                                           
                                       
                
            <div className='hidden lg:flex flex-1 justify-center' >
              {/*  <Link
                                            className="m-2 text-xl tracking-wide transition-all hover:text-gold font-naslovi hidden lg:flex"
                                            to="/test">
                                            KONTAKT
                                        </Link>  */}
                {t('menuLines',  { returnObjects: true }).map( (element,index) => {
                                return  (<Link
                                            className="m-2 text-xl tracking-wide transition-all font-naslovi hover:text-turkizna btn"
                                            key = {index}
                                            to={element.link}>
                                            {element.text}
                                        </Link>)
                                }) } 
            </div>
            <div className='w-24 p-6 text-white transition-all duration-300 cursor-pointer lg:hidden absolute right-0' onClick={odpriMeni} >
                <Icon className={"phoneMenuIcon "+ odprtostMenija.rotacija}  icon="ant-design:line-outlined"  />
                <Icon className={"phoneMenuIcon "+ odprtostMenija.rotacija2}  icon="ant-design:line-outlined"  />
                <Icon className={"phoneMenuIcon "+ odprtostMenija.rotacija3}  icon="ant-design:line-outlined" />
            </div>

          
        </div>
    </header>
    {/*  DEJANSKI MENI za TELEFON */}
    <div className={"w-full fixed top-0 mt-28 h-[calc(100vh_-_7rem)] bg-neutral uppercase tracking-wider transition-all origin-top  duration-300 z-50 " + odprtostMenija.odprtost }>
        <div className="overflow-y-auto h-[calc(100%_-_3rem)]">
        
                              {t('menuLines',  { returnObjects: true }).map( (element,index) => {
                                return  (<Link
                                            className="flex m-2 text-xl tracking-wide transition-all font-naslovi hover:text-turkizna btn"
                                            key = {index}
                                            to={element.link}
                                            onClick={odpriMeni}>
                                            {element.text}
                                        </Link>)
                                }) }             
               
                <div className="flex flex-col w-full h-auto pt-4 ">
                    <h3 className="flex justify-center text-accent">SOCIALNA OMREŽJA</h3>
                    <div className="flex flex-row justify-center align-middle">
                    <Icon className="m-1 text-4xl text-blue-800" icon="akar-icons:facebook-fill" />
                    <Icon className="m-1 text-4xl text-orange-400 hover:text-pink-900" icon="akar-icons:instagram-fill" />
                    </div>
                    <div className="flex flex-row items-center justify-center mt-2">
                        <Icon className="text-base text-white" icon="carbon:phone-filled" /><a className="p-1 text-lg text-white" href="tel:031-337-356" > | 031 337 356</a>

                    </div>
                    <div className="flex flex-row items-center justify-center m-1">
                        <Icon className="text-base text-white" icon="fluent:mail-24-regular" /><a className="p-1 text-lg text-white lowercase" href="mailto:info@applefix.si" > | info@mail.si</a>

                    </div>

                </div>
        </div>
                <footer className="fixed bottom-0 flex flex-col items-center content-center w-full h-12 p-2 text-xs text-white normal-case bg-error">
                    <p>Streli & Lojtra | Vse pravice pridržane © {leto}</p>
                    <a className="p-1 text-blue-600 underline hover:text-blue-800" href="/politikaZasebnosti" >Politika zasebnosti</a>



                </footer>

    </div>
   

</>
);
}
export default Header;
