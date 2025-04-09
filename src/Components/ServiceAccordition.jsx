// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
//   import { useState } from "react"
//   import ServiceSlider from "./ServiceSlider"
  
//   export default function ServiceAccordition() {
//     const [open, setOpen] = useState(false)
  
//     return (
//       <Accordion
//         type="single"
//         collapsible
//         className="w-full"
//         onValueChange={(val) => setOpen(val === "item-1")}
//       >
//         <AccordionItem value="item-1" className="accordion-animation max-h-[200px] w-full">
//           <AccordionTrigger className="border-t border-gray-400 rounded-none px-4 py-3">
//             <div className="w-full flex items-center gap-4">
//               {/* Numbering */}
//               <div className="text-lg font-bold text-gray-500 min-w-[30px]">01</div>
  
//               {/* Heading + Content Wrapper */}
//               <div
//                 className={`flex-1 flex transition-all duration-500 ease-in-out ${
//                   open ? "justify-center items-center gap-6" : "justify-center"
//                 }`}
//               >
//                 {/* Heading */}
//                 <span className="text-2xl font-semibold text-black whitespace-nowrap transition-all duration-500 ease-in-out">
//                   SFX/VFX
//                 </span>
  
//                 {/* Inline Content when opened */}
//                 {open && (
//                   <span
//                     className="text-base text-gray-600 max-w-[400px] opacity-0 translate-y-2 animate-fade-in-up"
//                   >
//                     ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
//                   </span>

//                 )}
//               </div>
//             </div>
//           </AccordionTrigger>
  
//           {/* Hidden because inline content is handled above */}
//           <AccordionContent className="hidden" />
//         </AccordionItem>
//       </Accordion>
//     )
//   }

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { useState } from "react"
  import ServiceSlider from "./ServiceSlider"
  
  export default function ServiceAccordition() {
    const [open, setOpen] = useState(false)
  
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onValueChange={(val) => setOpen(val === "item-1")}
      >
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="border-t border-gray-400 rounded-none px-4 py-3">
            {/* 🧠 Wrap the entire thing in flex-row now */}
            <div className="w-full flex items-center gap-4">
              {/* Numbering */}
              <div className="text-lg font-bold text-gray-500 min-w-[30px]">01</div>
  
              {/* Heading + Content */}
              <div
                className={`flex-1 flex justify-center items-center transition-all duration-500 ease-in-out ${
                  open ? "gap-2" : ""
                }`}
              >
                <span className="text-2xl font-semibold text-black whitespace-nowrap">
                  SFX/VFX
                </span>
  
                {open && (
                  <span className="text-base text-gray-600 max-w-[400px] text-center animate-fade-in-up">
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
                  </span>
                )}
              </div>
  
              {/* 👇 This is the default Accordion arrow — move it right */}
              <div className="ml-auto">
                {/* Tailwind UI's trigger component includes the chevron automatically */}
              </div>
            </div>
          </AccordionTrigger>
  
          {/* 🎠 Carousel appears when open */}
          {open && (
            <div className="w-full px-4 pb-4 animate-fade-in-up">
              <ServiceSlider />
            </div>
          )}
  
          <AccordionContent className="hidden" />
        </AccordionItem>
      </Accordion>
    )
  }
  