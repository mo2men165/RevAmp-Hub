import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { services } from './../constants/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard  } from 'swiper/modules';

const Benefits = () => {

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="RevAmp Hub: Empowering Growth Through Smart Solutions"
        />

        <div className="flex flex-wrap gap-10 mb-10">
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      breakpoints={{
        // When the screen width is >= 1024px (large screens)
        1024: {
          slidesPerView: 2, // Show 2 slides
          spaceBetween: 30, // Space between slides
        },
        // When the screen width is < 1024px
        0: {
          slidesPerView: 1, // Show 1 slide
          spaceBetween: 20, // Space between slides
        },
      }}
      >
            {benefits.map((item) => (
            <SwiperSlide className="flex cursor-pointer justify-center items-center w-[40%] ">
              <div
              className="block relative p-0.5 bg-no-repeat overflow-hidden bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <Button href="/contact" className={`ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider`} >
                      Explore more
                </Button>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
                onClick={() => window.location = '/services'}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
            </SwiperSlide>
          ))}
            </Swiper>
        </div>
      </div>
    </Section>
    
  );
};

export default Benefits;
