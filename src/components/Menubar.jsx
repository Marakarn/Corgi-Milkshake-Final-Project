import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {

    const Menus = [
        {name: "History", icon:"history", dis:"traslate-x-0", link: "/history"},
        {name: "Home", icon:"home", dis:"traslate-x-32", link: "/home"},
        {name: "Setting", icon:"settings", dis:"traslate-x-64", link: "/setting"},
    ];

    const [active, setActive] = useState();
    
    return (
        <>
        <div className=''>
            <div className="bg-slate-100 flex items-center justify-center max-h-[4.5rem] p-5 rounded-t-xl fixed bottom-0 drop-shadow-lg md:hidden w-full">
                <ul className="flex gap-20">
                    {
                        Menus.map((menu,i)=>(
                            <li key={i} className="">
                                <Link to={menu.link} className="flex items-center" onClick={() => { setActive(i); }}
>
                                    <span className= {`material-symbols-outlined ${i === active && "text-[#8BCA00]"}`} id="menu_icon">{menu.icon}</span>
                                    {/* <span className={` text-[#8BCA00] ${active === i ? 'duration-300 opacity-100' : 'opacity-0 translate-y-10' } `} >{menu.name}</span> */}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </>
    );
};




export default Menubar;