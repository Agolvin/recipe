import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (

    <div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

       <h1> Migration Node vers NextJS (15.1.4)</h1>
       <br />
       <Link href="/accueil">Accueil</Link>
       </div>

  );
}
