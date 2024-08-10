import { partners } from '../constants';
import { styles } from '../style';

export const Partners = () => {
  return (
    <section data-aos="zoom-out" className={`${styles.paddingY} bg-gray-200 dark:bg-white/10`}>
      <div className="container flex justify-center md:justify-between items-center flex-wrap gap-x-12 gap-y-6 md:gap-x-0 md:gap-y-0 opacity-50">
        {partners.map((item) => (
          <img
            key={Math.random() * 10}
            src={item}
            alt="partner-brands"
            className="w-[80px] dark:invert"
          />
        ))}
      </div>
    </section>
  );
};
