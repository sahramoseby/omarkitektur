import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-white  min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/bilde2.jpg"
              alt="om-arkitektur Logo"
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div>
          <Image
            src="/bilde1.jpg"
            alt="om-arkitektur Logo"
            width={400}
            height={24}
            priority
          />
        </div>
    
      <div className="mb-32 grid text-center text-black lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
          <ul className=" list-none m-0  max-w-[30ch] text-m ">
            <li> Anton Mailänder</li>
            <li className="opacity-50">anton@omarkitektur.no</li>
            <li className="opacity-50">+46 70-960 45 39</li>
          </ul>
       
          <ul className=" list-none m-0 max-w-[30ch] text-m">
            <li> Ferdinand Aagenæs </li>
            <li className="opacity-50">ferdinand@omarkitektur.no</li>
            <li className="opacity-50">+47 90 55 25 60</li>
          </ul>

          <ul className=" list-none m-0 max-w-[30ch] text-m">
            <li> Jo Giæver Suul </li>
            <li className="opacity-50">jo@omarkitektur.no</li>
            <li className="opacity-50">+47 93 07 25 51</li>
          </ul> 

          <ul className=" list-none m-0 max-w-[30ch] text-sm">
            <li> Sivert Frost Støren </li>
            <li className="opacity-50">sivert@omarkitektur.no</li>
            <li className="opacity-50">+45 52 16 62 60</li>
          </ul> 
        
      </div>
    </main>
  );
}