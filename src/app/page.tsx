import Projects from "./features/home/Projects";

export default function Home() {
  return (
    <div className="font-inter pt-20">
      <div className="py-5 flex items-center flex-col gap-3">
        <div className="heading1 font-montserrat text-center text-4xl font-bold text-company-second lg:text-6xl">
          nicodenetworks<span className="text-neutral-400">.com</span>
        </div>
        <div
          className={`heading2small font-inter text-center text-3xl font-normal text-neutral-400 text-shadow-2xs
							lg:text-3xl dark:text-gray-300`}
        >
          Personal Projects
        </div>
      </div>
      <Projects />
    </div>
  );
}
