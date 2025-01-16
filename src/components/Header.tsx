import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div className="navbar bg-primary glass">
            <div className="container xl:max-w-screen-xl text-white">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-base md:text-xl items-center">
                        <Image className="hidden sm:block sm:size-8 md:size-10 lg:size-12" src="/images/logo.png" alt="logo" width={40} height={40} />
                        برنامه هواشناسی
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className="text-sm sm:text-base" href="/add-city">افزودن شهر</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
