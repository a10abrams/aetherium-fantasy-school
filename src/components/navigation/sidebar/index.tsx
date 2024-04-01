import Link from "next/link";

const Sidebar = () => {
    return (
        <div>
            <Link href = "/about" className = "nav_link">
                About
            </Link>
            <Link href = " # " className = "nav_link">
                Learn
            </Link>
            <Link href = " # " className = "nav_link">
                Contact
            </Link>
            <Link href = " # " className = "nav_link">
                Apply
            </Link>
        </div>
    )
}
