import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export const ContactUs = () => {
  return (
    <a href="#contact-form">
      <button className="px-5 py-3 bg-[#fbd616] rounded-lg rounded-tl-none font-bold text-xs flex gap-1 hover:opacity-75">
      Contact Us <ArrowUpRightIcon className="h-4 w-4" />
    </button>
    </a>
  );
};
