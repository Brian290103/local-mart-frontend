import React from "react";
import { fetcher } from "@/lib/utils.ts";
import useSWR from "swr";
import { Product } from "@/types/app-types.ts";
import { Button } from "@/components/ui/button.tsx";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import OtherProducts from "@/components/OtherProducts.tsx";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "yet-another-react-lightbox/styles.css";

// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LightboxComponent from "@/components/LightboxComponent.tsx";
import CustomSeparator from "@/components/CustomSeparator.tsx";

const BidPage = () => {
  const {
    data: product,
    error,
    isLoading,
  } = useSWR<Product>("https://dummyjson.com/products/1", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return (
    <div className={"w-full"}>
      <section
        className={
          "grid w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-3"
        }
      >
        <article className="p-2">
          <div className="sticky top-20 flex flex-col gap-5">
            <div className="relative w-full">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                keyboard
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000 }}
                speed={1000}
                onSwiper={(swiper) => (window.swiper2 = swiper)}
              >
                {product.images.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="overflow-y-hidden rounded-xl shadow-none"
                  >
                    <div className="rounded-xl md:p-10">
                      {/*<img*/}
                      {/*  src={item}*/}
                      {/*  alt=""*/}
                      {/*  className="min-h-[300px] w-full rounded-xl"*/}
                      {/*/>*/}
                      <LightboxComponent
                        images={product.images}
                        currentImage={item}
                        currentImageIndex={index}
                        title={product.title}
                        description={product.description}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute bottom-0 left-0 top-0 z-10 flex items-center justify-center p-2">
                <Button
                  size={"icon"}
                  variant="outline"
                  className="rounded-full"
                  onClick={() => window.swiper2.slidePrev()}
                >
                  <ArrowLeft className={"w-4 h-4"} />
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 top-0 z-10 flex items-center justify-center p-2">
                <Button
                  size={"icon"}
                  variant="outline"
                  className="rounded-full"
                  onClick={() => window.swiper2.slideNext()}
                >
                  <ArrowRight className={"w-4 h-4"} />
                </Button>
              </div>
            </div>
          </div>
        </article>
        <article className="py-5 flex flex-col gap-3 px-2">
          <h1 className="font-semibold text-lg sm:text-3xl">{product.title}</h1>
          <p className="text-xs sm:text-sm">{product.description}</p>
          <span className="text-sm sm:text-base ">
            {" "}
            <b className="">Category:</b>
            <span className="uppercase"> {product.category}</span>
          </span>
          <span className="text-primary text-2xl font-semibold">
            Kshs. {product.price}
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button variant={"outline"} className={"w-full sm:w-fit"}>
              Add to Wishlist
              <HeartIcon />
            </Button>
            <Button className={"w-full sm:w-fit"} variant={"default"}>
              Add to Cart
              <ShoppingBagIcon />
            </Button>{" "}
          </div>
          <div className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-semibold">DETAILS</span>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nullam
                  pulvinar vivamus per euismod urna, accumsan felis molestie
                  varius platea neque vulputate sociis diam volutpat nunc.
                  Placerat nec sodales augue semper torquent sociosqu, dis fusce
                  commodo interdum curabitur, praesent fames class ornare
                  suscipit. Placerat praesent gravida fames eleifend penatibus
                  ridiculus, tellus vestibulum vitae luctus lacus imperdiet
                  erat, massa orci mollis interdum ad. Vestibulum ligula
                  imperdiet sapien varius tortor blandit ultrices gravida,
                  vehicula augue nisi nullam penatibus facilisis pulvinar, mus
                  habitant quam risus ridiculus sem id. Tempus inceptos ac
                  blandit sodales etiam nullam semper nostra commodo aptent,
                  pellentesque suspendisse potenti nam mattis enim tristique
                  quam suscipit venenatis taciti, cras aenean egestas nec
                  dignissim porttitor nascetur ornare auctor. Eget vehicula
                  taciti fermentum tincidunt iaculis congue sagittis, placerat
                  malesuada vestibulum sem rutrum nisi, feugiat gravida
                  porttitor nunc orci facilisis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </article>
      </section>

      <CustomSeparator title={"Related Products"} />
      <section className="">
        <OtherProducts />
      </section>
    </div>
  );
};

export default BidPage;