import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" }
];


const NavBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <RiMenu2Fill></RiMenu2Fill>
                }

            </div>
            <ul className={`md:flex font-bold absolute md:static duration-1000
            ${open ? 'top-16' : '-top-60'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;