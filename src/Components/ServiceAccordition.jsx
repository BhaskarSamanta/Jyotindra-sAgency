import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useState } from "react";
import ServiceSlider from "./ServiceSlider";

export default function ServiceAccordition({ number, heading, subtext, cards }) {
  const [open, setOpen] = useState(null); // Track which accordion is open

  return (
    <Accordion
      type="single" // Ensures only one accordion opens at a time
      collapsible
      className="w-full"
      value={open} // Controlled value for the open accordion
      onValueChange={(val) => setOpen(val)} // Update the open accordion
    >
      <AccordionItem value="item-1" className="w-full mb-6">
        <AccordionTrigger className="border-t border-gray-400 rounded-none px-4 py-3">
          <div className="w-full flex items-center gap-4">
            {/* Numbering */}
            <div className="text-lg font-bold text-gray-500 min-w-[30px]">{number}</div>

            {/* Heading + Content */}
            <div
              className={`flex-1 flex justify-center items-center transition-all duration-500 ease-in-out ${
                open === "item-1" ? "gap-2" : ""
              }`}
            >
              <span className="text-2xl font-semibold text-black whitespace-nowrap">
                {heading}
              </span>

              {open === "item-1" && (
                <span className="text-base text-gray-600 max-w-[400px] text-center animate-fade-in-up">
                  {subtext}
                </span>
              )}
            </div>

            {/* Accordion arrow */}
            <div className="ml-auto"></div>
          </div>
        </AccordionTrigger>

        {/* Content appears when open */}
        {open === "item-1" && (
          <div className="w-full px-4 pb-4 animate-fade-in-up">
            <ServiceSlider cards={cards} />
          </div>
        )}

        <AccordionContent className="hidden" />
      </AccordionItem>
    </Accordion>
  );
}
