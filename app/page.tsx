import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-white  min-h-screen flex-col items-center p-12 md:gap-8 gap-4 justify-evenly">
      <div className="className='grid md:grid-cols-3 w-full">
        <div className="flex w-full items-end justify-start">
          <a
            className="pointer-events-none flex place-items-center gap-2"
            href="/"
          >
            <Image
              className="-mx-2"
              src="/om-logo.svg"
              alt="om-arkitektur Logo"
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
        <div className="text-black col-start-1">
          <p>Josefines gate 32, 0351 Oslo</p>
          <p>
            <a href="mailto:post@omarkitektur.com">post@omarkitektur.com</a>
          </p>
          <p>
            <a href="tel:+4790552560">+47 90 55 25 60</a>
          </p>
          <div >
            <a className="flex gap-1 place-items-center" href="https://www.instagram.com/om_arkitektur/">
              <svg width="16" height="16" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.4253V43.8007C0 51.2152 6.01065 57.2258 13.4252 57.2258H43.8007C51.2152 57.2258 57.2258 51.2152 57.2258 43.8007V13.4253C57.2258 6.01073 51.2151 0 43.8005 0H13.4253C6.01073 0 0 6.01073 0 13.4253ZM5.25905 14.5866C5.25905 9.43515 9.43515 5.25905 14.5866 5.25905H42.6394C47.7907 5.25905 51.9668 9.43507 51.9668 14.5865V42.6394C51.9668 47.7907 47.7907 51.9668 42.6394 51.9668H14.5866C9.43515 51.9668 5.25905 47.7907 5.25905 42.6392V14.5866ZM20.5314 28.6129C20.5314 33.069 24.1568 36.6944 28.6129 36.6944C33.069 36.6944 36.6944 33.069 36.6944 28.6129C36.6944 24.1568 33.069 20.5314 28.6129 20.5314C24.1568 20.5314 20.5314 24.1568 20.5314 28.6129ZM15.7751 28.6129C15.7751 21.534 21.534 15.7751 28.6129 15.7751C35.6918 15.7751 41.4508 21.534 41.4508 28.6129C41.4508 35.6918 35.6918 41.4508 28.6129 41.4508C21.534 41.4508 15.7751 35.6918 15.7751 28.6129ZM43.3289 10.8248C45.173 10.8248 46.6676 12.3197 46.6676 14.1636C46.6676 16.0076 45.173 17.5025 43.3289 17.5025C41.4849 17.5025 39.9901 16.0076 39.9901 14.1636C39.9901 12.3197 41.4849 10.8248 43.3289 10.8248Z" fill="black"/>
              </svg>
              om_arkitektur
            </a>
          </div>
        </div>

        <Image
          className="col-span-1 justify-self-center"
          src="/bilde1.jpg"
          alt="om-arkitektur Logo"
          width={425}
          height={425}
          priority
        />
      </div>

      <div className="mb-16 grid text-left text-black lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 mt-4 gap-8  lg:grid-cols-4 self-start md:self-center">
        <ul className="list-none m-0  max-w-[30ch] text-md text-left">
          <li>Anton Mailänder</li>
          <li className="opacity-50">
            <a href="mailto:anton@omarkitektur.com">anton@omarkitektur.com</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4670-9604539">+46 70-960 45 39</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Ferdinand Aagenæs</li>
          <li className="opacity-50">
            <a href="mailto:ferdinand@omarkitektur.com">
              ferdinand@omarkitektur.com
            </a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4790552560">+47 90 55 25 60</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Jo Giæver Suul</li>
          <li className="opacity-50">
            <a href="mailto:jo@omarkitektur.com">jo@omarkitektur.com</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4793072551">+47 93 07 25 51</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Sivert Frost Støren</li>
          <li className="opacity-50">
            <a href="mailto:sivert@omarkitektur.com">sivert@omarkitektur.com</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4552166260">+45 52 16 62 60</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
