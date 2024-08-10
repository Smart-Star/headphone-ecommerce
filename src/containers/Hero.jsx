import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { heroData } from '../constants';
import { Button } from '../components';
import { styles } from '../style';
import { togglePopup } from '../components/features/PopupSlice';

export const Hero = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section
      className={`${styles.marginY} ${styles.flexCenter} overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color`}
    >
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {heroData.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
                <div
                  className={`${styles.flexCenter} sm:items-start flex-col gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10`}
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="text-2xl sm:text-3xl lg:text-2xl font-bold"
                  >
                    {item.subtitle}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title1}
                  </h1>
                  <h1 className="uppercase text-5xl sm:text-[60px] md:text-[80px] xl:text-[150px] text-white dark:text-white/5 font-bold">
                    {item.title2}
                  </h1>

                  <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  >
                    <Button
                      text="Shop By Category"
                      bgColor="bg-primary"
                      textColor="text-white"
                      handleClick={() => dispatch(togglePopup())}
                    />
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="order-1 sm:order-2 size-full z-40"
                >
                  <img src={item.img} alt="product" className="hero-image relative" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
