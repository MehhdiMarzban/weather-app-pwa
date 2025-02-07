import Image from "next/image";
import Link from "next/link";

import { CitiesMenu } from "@/components";


/**
 * A header component that displays a navigation bar with a logo and a menu to select cities.
 * The logo is a Next.js Image component with a src attribute pointing to the logo image.
 * The menu is a CitiesMenu component that displays a list of cities and allows users to select a city.
 * The component is a sticky header that is stuck to the top of the screen.
 * The component is responsive and changes its style based on the screen size.
 */
const Header: React.FC = () => {
    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="container xl:max-w-screen-xl text-white">
                <div className="flex flex-row items-center flex-1">
                    <Link href="/" className="btn btn-ghost text-base md:text-xl">
                        <Image
                            className="hidden sm:block sm:size-8 md:size-10 lg:size-12"
                            src="/images/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        برنامه هواشناسی
                    </Link>
                </div>
                <CitiesMenu />
            </div>
        </div>
    );
};

export default Header;
