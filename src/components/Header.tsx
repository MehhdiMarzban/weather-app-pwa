import Image from "next/image";
import Link from "next/link";
import { CitiesMenu } from "@/components";

const Header: React.FC = () => {
    return (
        <div className="navbar bg-primary sticky top-0">
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
