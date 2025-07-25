import { Button } from "@/components/ui/button";
import hero from "../assets/hero_large.jpg";

export default function Home({ ref, contactRef }) {
  const scrollToContact = (refName) => {
    refName.current.scrollIntoView({ behavior: "smooth" });
    console.log(refName);
  };

  return (
    <div ref={ref} className="relative w-full h-6/12">
      <div className=" absolute w-[80%] flex flex-col items-center justify-center h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className=" text-[min(10vw,70px)] text-white font-bold ">
          Crafting Visual Stories. Building Digital Experiences.
        </h1>
        <Button
          className="block w-1/2 sm:w-1/4 bg-white text-black shadow-2xl cursor-pointer"
          onClick={() => scrollToContact(contactRef)}
        >
          Get Qoute
        </Button>
      </div>
      <img className=" w-full sm:h-screen " src={hero} alt="" />
    </div>
  );
}
