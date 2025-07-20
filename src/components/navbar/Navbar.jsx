import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Button from "./Button";

export default function Navbar({ homeRef, servicesRef, aboutRef, contactRef }) {
  const [open, setOpen] = useState(false);
  // console.log(contactRef.current);

  const scrollToContact = (refName) => {
    refName.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-[100] w-full flex justify-between items-center px-5 py-3 bg-primary shadow-2xl">
      <div>
        <h1
          className="text-2xl font-bold"
          onClick={() => scrollToContact(homeRef)}
        >
          Artlens
        </h1>
      </div>
      <div className="max-md:hidden text-2xl flex gap-5">
        <Button title="Home" onclick={() => scrollToContact(homeRef)} />
        <Button title="Services" onclick={() => scrollToContact(servicesRef)} />
        <Button title="About " onclick={() => scrollToContact(aboutRef)} />
        <Button title="Contact " onclick={() => scrollToContact(contactRef)} />
      </div>
      <div className="md:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
        <div
          className={`
            absolute z-[1000] top-0 right-0 bg-white h-screen w-2/3 shadow-2xl
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ pointerEvents: open ? "auto" : "none" }}
        >
          <Hamburger toggled={open} toggle={setOpen} />
          <div className="text-3xl pl-2 mt-5">
            <Button title="Home" onclick={() => scrollToContact(homeRef)} />
            <Button
              title="Services"
              onclick={() => scrollToContact(servicesRef)}
            />
            <Button title="About " onclick={() => scrollToContact(aboutRef)} />
            <Button
              title="Contact "
              onclick={() => scrollToContact(contactRef)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
