export default function AboutUs({ ref }) {
  return (
    <div ref={ref} className=" mt-10 flex flex-col items-center px-5">
      <div className=" text-center mb-10">
        <h1 className=" text-3xl font-bold mb-5">About Us</h1>
        <p className=" text-center max-w-2xl">
          Founded on a passion for design and a commitment to digital
          excellence, Artlens is more than just a creative agency. We're a team
          of dedicated designers and developers who believe in the power of
          visual communication and seamless online experiences.
        </p>
      </div>
      <div className=" sm:flex gap-5 sm:gap-20">
        <div className=" aboutCard  ">
          <h2 className=" text-lg font-medium">Our Mission</h2>
          <p className="text-center">
            To empower businesses with impactful branding and innovative web
            solutions that captivate audiences and drive growth.
          </p>
        </div>
        <div className="aboutCard ">
          <h2 className=" text-lg font-medium">Why Choose Us</h2>
          <p className=" text-center ">
            Your success is our success. We listen intently, communicate
            transparently, and work tirelessly to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
