import Link from "next/link";

/**
 * A footer component that displays a text indicating that the website is made by Mehdi Marzban.
 * 
 * @returns {JSX.Element} A JSX element representing the footer of a website.
 */
const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-2 text-center w-full">
            <p>ساخته شده توسط <Link className="font-bold" href="https://mehdi-marzban.ir">مهدی مرزبان</Link> | <span>{new Date().getFullYear()}</span> </p>
        </footer>
    );
};

export default Footer;
