import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact({ ref }) {
  return (
    <div ref={ref} className=" flex flex-col items-center mb-10 px-5">
      <div className=" text-center mb-5">
        <h1 className=" text-3xl font-bold">Contact Us</h1>
      </div>
      <form className=" flex flex-col gap-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="name">Your name</Label>
          <Input type="text" id="Name" placeholder="enter your name..." />
        </div>{" "}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full gap-3">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Type your message here. We'd love to hear from you."
            id="message"
            className="h-40"
          />
        </div>
        <Button className="w-1/2 bg-black" onClick={(e) => e.preventDefault()}>
          Submit
        </Button>
      </form>
    </div>
  );
}
