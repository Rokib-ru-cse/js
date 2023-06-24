import Image from "next/image";
import Link from "next/link";

const Nevbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image
                src="/logo.png"
                alt="Picture of the author"
                width={128}
                height={77}
                />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>NinjaList</a></Link>
        </nav> 
     );
}
 
export default Nevbar;