import Card from "@/components/card/Card";
import create from "../assets/Create-cuate.svg";
import strategy from "../assets/strategy.svg";
import rebranding from "../assets/rebranding.svg";
import responsive from "../assets/web-devices.svg";
import seo from "../assets/seo-analytics.svg";
import maintenance from "../assets/web-maintenance.svg";

const brandCardDetails = [
  {
    title: "Logo Design",
    description:
      " Unique, memorable, and scalable logos that embody your brand's essence.",
    img: create,
  },
  {
    title: "Brand Strategy",
    description:
      "Developing a strategic framework that defines your brand's purpose, target audience, and competitive positioning.",
    img: rebranding,
  },
  {
    title: "Rebranding",
    description:
      "Revitalizing existing brands to reconnect with evolving audiences and market trends.",
    img: strategy,
  },
];

const webCardDetails = [
  {
    title: "Custom Responsive Design",
    description:
      "Unique, responsive designs tailored to your brand and business goals. Ensuring your website looks and functions perfectly on all devices (desktop, tablet, mobile).",
    img: responsive,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Implementing foundational SEO techniques to improve your website's visibility.",
    img: seo,
  },
  {
    title: "Website Maintenance & Support:",
    description:
      "Ongoing support, security updates, and performance optimization.",
    img: maintenance,
  },
];

export default function Services({ ref }) {
  return (
    <div ref={ref} className=" mt-10 flex flex-col items-center px-5 ">
      <div className=" text-center mb-10">
        <h1 className=" text-3xl font-bold mb-5">Our Services</h1>
        <p className=" text-center max-w-2xl">
          We offer a comprehensive range of services to help you build and
          elevate your brand. From logo design to brand strategy, our team is
          dedicated to delivering exceptional results that resonate with your
          audience.
        </p>
      </div>
      <div className=" gap-5 mb-10">
        <h2 className="duration-300 block text-2xl font-m font-bold cursor-pointer relative overflow-hidden after:h-[3px] after:w-1/4  after:bottom-0 after:right-full after:bg-black after:absolute hover:after:translate-x-full after:duration-300 mb-5 pb-1">
          Branding & Logo Design
        </h2>
        <div className=" sm:flex gap-5 sm:gap-20">
          {brandCardDetails.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className=" gap-5">
        <h2 className="duration-300 block text-2xl font-m font-bold cursor-pointer relative overflow-hidden after:h-[3px] after:w-1/4  after:bottom-0 after:right-full after:bg-black after:absolute hover:after:translate-x-full after:duration-300 mb-5 pb-1">
          Website Design & Development
        </h2>
        <div className=" sm:flex gap-5 sm:gap-20">
          {webCardDetails.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
