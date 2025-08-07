import { NavLinks } from "@/Constant/Constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
    showNav: boolean;
    navClose: () => void;
};

const MobileNav = ({ showNav, navClose }: MobileNavProps) => {
    const navOpen = showNav ? "translate-x-0" : "-translate-x-full";
    return (
        <div>
            {/* overlay  */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
            </div>
            {/* navlinks  */}
            <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050]`}>
                {NavLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                    >
                        <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                            {link.Label}
                        </p>
                    </Link>
                ))}
                {/* close icon  */}
                <CgClose
                    onClick={navClose}
                    className='w-8 h-8 absolute top-5 right-5 cursor-pointer text-white' />

            </div>
        </div>
    );
};

export default MobileNav;