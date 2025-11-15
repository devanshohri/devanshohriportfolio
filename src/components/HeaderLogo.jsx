import Image from "next/image";
import devanshOhriLogo from "../../public/devanshohri.svg";
import Link from "next/link";



export default function HeaderLogo() {
    return (
    <div className="header-logo-wrapper">
        <Link href="/" className="header-logo">
            <Image priority src={devanshOhriLogo} alt="devansh ohri logo" as="image" />
        </Link>
    </div>
    )
}