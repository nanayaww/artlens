import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div className=" bg-black text-white px-10 pt-10 pb-5">
      <div className=" grid grid-cols-3 gap-5 mb-5">
        <div className=" h-full col-span-2 flex flex-col justify-between">
          <div>
            <p className=" italic font-medium">Newsletter</p>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-secondary"
              />
              <Button type="submit" variant="outline " className="bg-primary">
                Subscribe
              </Button>
            </div>
          </div>

          <div className=" flex gap-1">
            <FiInstagram size="1.5em" />
            <FiTwitter size="1.5em" />
            <FiFacebook size="1.5em" />
          </div>
        </div>
        <div className=" pl-5">
          <h2 className=" text-lg font-medium mb-2">Company</h2>
          <div className=" flex flex-col gap-2 ">
            <p>Home</p>
            <p>Services</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <hr className=" opacity-30" />
      <div className=" w-full text-center p-2">
        <p>Artlens Ventures &copy; {`${getYear}`}</p>
        <p className=" text-sm">
          <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        </p>
      </div>
    </div>
  );
}
