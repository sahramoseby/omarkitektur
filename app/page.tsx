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
              src="/om-logo.jpg"
              alt="om-arkitektur Logo"
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex overflow-hidden w-full animate-horizonalMotion">
        <div>
      <Image
              src="/bilde1.jpg"
              alt="om-arkitektur Logo"
              width={400}
              height={24}
              priority
            />
            </div>
            <div>
                <Image
              src="/bilde2.jpg"
              alt="om-arkitektur Logo"
              width={400}
              height={24}
              priority
            />
            </div>
            <div>
                <Image
              src="/bilde3.svg"
              alt="om-arkitektur Logo"
              width={400}
              height={24}
              priority
            />
            </div>
            <div>
                <Image
              src="/bilde4.svg"
              alt="om-arkitektur Logo"
              width={400}
              height={24}
              priority
            />
            </div>
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



/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
KJØHHHH&nbsp;
<code className="font-mono font-bold">kjøh.tsx</code>
</p> */

/*   <h1 className="text-8xl">OM arkitektur</h1> */

/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      */

/* <div>
  <Image
              src="/bilde.jpg"
              alt="om-arkitektur Logo"
              width={400}
              height={24}
              priority
            />
</div>
*/ 