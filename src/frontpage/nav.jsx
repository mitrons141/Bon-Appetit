import { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

        const navigate = useNavigate();    
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
              navigate('/order');
          };

        return (
        <nav className="w-full fixed top-0 z-50 border-b-2 drop-shadow-sm bg-white">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="Bon_Appetit.png" className="h-[6rem] hover:cursor-pointer"  />
                <div className="border-l border-teal-900 h-16 ml-4"></div>
            </a>
            <div>
            <ul className="flex flex-row">
                <li className='p-2 text-lg font-mono font-bold overline text-teal-900 hover:underline hover:decoration-teal-400  decoration-2 underline-offset-4 cursor-pointer'>
                <a href='#top'>HOME</a>
                </li>
                <li className='p-2 text-lg font-mono font-bold overline text-teal-900 hover:underline hover:decoration-teal-400 decoration-2 underline-offset-4 cursor-pointer'>
                <a href='#contact'>CONTACT</a>
                </li>
                <li>
            <a
                className='inline-block relative p-2 text-lg font-mono font-bold overline text-teal-900 hover:underline hover:decoration-teal-400 decoration-2 underline-offset-4 cursor-pointer'
                onClick={toggleDropdown}
            >
                OUTLETS
            </a>
            {isOpen && (
                <div className="absolute  mt-2 w-40 bg-teal-200 rounded-md shadow-lg z-50 font-bold hover:cursor-pointer">
                    <div className="py-1"><a className="block px-4 py-2 text-emerald-800 hover:bg-teal-300">22 1B Baker Street</a></div>
                    <div className="py-1"><a className="block px-4 py-2 text-emerald-800 hover:bg-teal-300">21 Rajani Sen Road, Ballygunge</a></div>
                    <div className="py-1"><a className="block px-4 py-2 text-emerald-800 hover:bg-teal-300">56B Whitehaven Mansions, Sandhurst Square</a></div>
                    <div className="py-1"><a className="block px-4 py-2 text-emerald-800 hover:bg-teal-300">66, Harrison Road</a></div>
                </div>
            )}
        </li>
            </ul>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" onClick={handleSubmit} className="text-teal-900 bg-emerald-400 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:focus:ring-emerald-700">
                Your Orders</button>
            </div>
            </div>
        </nav>


        )
}

export default Nav