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
            <a href="mailto:post@omarkitektur.no">post@omarkitektur.no</a>
          </p>
          <p>
            <a href="tel:+4790552560">+47 90 55 25 60</a>
          </p>
          <p>
            <a href="https://www.instagram.com/om_arkitektur/">
              instaicon om_arkitektur
            </a>
          </p>
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
            <a href="mailto:anton@omarkitektur.no">anton@omarkitektur.no</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4670-9604539">+46 70-960 45 39</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Ferdinand Aagenæs</li>
          <li className="opacity-50">
            <a href="mailto:ferdinand@omarkitektur.no">
              ferdinand@omarkitektur.no
            </a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4790552560">+47 90 55 25 60</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Jo Giæver Suul</li>
          <li className="opacity-50">
            <a href="mailto:jo@omarkitektur.no">jo@omarkitektur.no</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4793072551">+47 93 07 25 51</a>
          </li>
        </ul>

        <ul className=" list-none m-0 max-w-[30ch] text-md text-left">
          <li>Sivert Frost Støren</li>
          <li className="opacity-50">
            <a href="mailto:sivert@omarkitektur.no">sivert@omarkitektur.no</a>
          </li>
          <li className="opacity-50">
            <a href="tel:+4552166260">+45 52 16 62 60</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
