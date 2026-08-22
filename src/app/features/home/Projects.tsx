import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
    { label: "Audlect", link: "https://audlect.nicodenetworks.com/" },
    { label: "Kultour.gut!", link: "http://kultourgut.de/" },
    { label: "dmx4esp", link: "https://github.com/nicode3141/dmx4esp" },
    { label: "Wii-Chip", link: "https://github.com/nicode3141/Wii-Chip" },
  ];

  return (
    <div className="py-10 flex items-center flex-col gap-3">
      {projects.map((project, i) => (
        <Link
          className="relative text-2xl font-semibold hover:underline text-neutral-700 p-1 px-8 hover:bg-neutral-100 rounded-xl group flex items-center gap-2 duration-100 transition ease-in-out"
          key={i + "projectLink"}
          href={project.link}
        >
          {project.label}{" "}
          <ArrowRightToLine
            size={16}
            className="absolute right-3 text-neutral-600 invisible -translate-x-3 group-hover:visible group-hover:translate-x-0 duration-300 transition-transform ease-in-out"
          />
        </Link>
      ))}
    </div>
  );
}
