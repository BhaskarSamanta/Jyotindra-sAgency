import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function ServiceSlider({ cards }) {
  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-2/3 lg:basis-1/2 xl:basis-1/3"
            >
              <Card className="flex flex-col border-none shadow-none h-full">
                {/* Image container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <CardContent className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-bold uppercase break-words">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug break-words whitespace-normal">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-2 py-1 bg-transparent border border-gray-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}
