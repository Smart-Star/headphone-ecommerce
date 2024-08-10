import { styles } from '../style';
import { Button } from './Button';

export const Banner = ({ data }) => {
  return (
    <section id={data.id}>
      <div style={{ background: data.bgColor }} className={`${styles.flexCenter} rounded-3xl`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center text-white">
          <div className="p-6 sm:p-8 text-center md:text-left">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>

          <div data-aos="zoom-in" className={`${styles.flexCenter} h-ful`}>
            <img
              src={data.img}
              alt="headphone"
              className="scale-125 w-[250px] md:w-[340px] drop-shadow-2xl object-cover"
            />
          </div>

          <div className={`${styles.flexCenter} flex-col p-6 sm:p-8 md:items-start`}>
            <p data-aos="zoom-out" className="font-bold text-base xl:text-lg">
              {data.title2}
            </p>
            <h1 data-aos="fade-up" className="text-3xl xl:text-5xl font-bold mb-2">
              {data.title3}
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm tracking-wide leading-5 mb-2 max-w-48 text-center md:text-left"
            >
              {data.description}
            </p>
            <div data-aos="fade-up" data-aos-offset="0" style={{ color: data.bgColor }}>
              <Button text="Shop Now" bgColor="bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
