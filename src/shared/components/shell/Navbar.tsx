import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-8 py-2 bg-zinc-50 font-sans dark:bg-black">
            <div>Superstore</div>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/order">Order</Link>
                <Link href="/payment">Payment</Link>
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/register">Register</Link>
            </nav>
        </div>
    );
};

export default Navbar;
