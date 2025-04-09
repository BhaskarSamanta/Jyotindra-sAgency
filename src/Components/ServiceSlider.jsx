import * as React from "react"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ServiceSlider() {
  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="-mx-2 flex">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 flex-none px-2"
            >
              <Card className="flex flex-col rounded-none border-none shadow-none">
                
                {/* Image - FIXED HEIGHT - NEVER STRETCHES */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src="/dummy.jpeg"
                    alt={`Service ${index + 1}`}
                    className="w-full h-full object-cover size-full "
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <CardContent className="p-4 flex flex-col gap-2 ">
                  <h3 className="text-lg font-bold uppercase">TITLE</h3>
                  <p className="text-sm text-gray-600 leading-snug break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sapien ut tortor
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-200 rounded-md">Modeling</span>
                    <span className="text-xs px-2 py-1 bg-gray-200 rounded-md">Motion Capture</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
