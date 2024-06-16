

import { ReactNode, useState } from "react";
import {
  ChevronDown,
  ChevronUp
} from 'lucide-react'

type AccordionProps = {
  items: {
    title: string;
    content: ReactNode;
  }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="bg-neutral-50 px-4 py-6 rounded-md shadow-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center py-4 cursor-pointer group"
          >
            <h2 className="text-lg font-semibold group-hover:underline">{item.title}</h2>
            {
              activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />
            }
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "h-12" : "h-0"
              }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
