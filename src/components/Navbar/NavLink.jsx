import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, onClick, href }) => {

    const pathname = usePathname()

    return (
        <Link href={href} className={`${pathname === href ? "text-accent" : "text-gray-700 hover:text-accent"}`} onClick={onClick}>{children}</Link>
    );
};

export default NavLink;