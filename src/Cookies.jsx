import React from 'react';
import { Icon } from '@iconify/react';
//import ReactDOM from 'react-dom';

function Cookies() {
    const saved = localStorage.getItem("cookie-statusShots");
    const [cookie, setCookie] = React.useState(saved);

    function piskotek() {
        setCookie("true");
        localStorage.setItem("cookie-statusShots", "true")
    }

    return (
        <>
            <div className={cookie == "true" ? "hidden" : "" +"fixed bottom-0 w-full h-40 min-h-max m-auto flex flex-col justify-center bg-gray-600 shadow-2xl"}>
                <h3 className="text-white mt-2 px-2 font-bold">Piškotki</h3>
                <p className="text-white px-2 py-1 text-sm">To spletno mesto uporablja piškotke za boljšo uporabniško izkušnjo. Če boste spletno stran uporabljali še naprej, s tem privolite v njihovo nadaljnjo uporabo.</p>
                 <button id="btn" class="py-2 px-8 bg-gold hover:bg-green-500 text-black rounded font-bold text-sm shadow-xl w-1/3 min-w-max m-auto items-center" onClick={piskotek}>V redu</button>
        </div>
        </>
);
}

export default Cookies;
