import Image from "next/image";



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

       <h1> Migration Node/React vers NextJS (15.1.4)</h1>
       
       </div>

  );
}
