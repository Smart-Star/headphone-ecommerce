import { earphone, gaming, macbook, speaker, vr, watch1 } from '../assets';
import { styles } from '../style';
import { Button } from '../components';

export const Category = () => {
  return (
    <section
      id="category"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden ${styles.paddingY}`}
    >
      <div className={`category-bg-1 ${styles.flexEnd} py-10 px-5`}>
        <div className="text-white">
          <p className="opacity-50 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Earphone</p>
          <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
        </div>
        <img
          src={earphone}
          alt="earphone"
          className="w-[320px] absolute bottom-0 right-5 sm:right-0"
        />
      </div>

      <div className={`category-bg-2 ${styles.flexEnd} py-10 px-5`}>
        <div className="text-white">
          <p className="opacity-60 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">Gadget</p>
          <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
        </div>
        <img
          src={watch1}
          alt="earphone"
          className="w-[320px] absolute -right-8 sm:-right-8 sm:top-11 md:top-3 lg:top-[50px] xl:top-[25px]"
        />
      </div>

      {/* -right-8 === right-0 */}

      <div className={`col-span-1 sm:col-span-2 category-bg-3 ${styles.flexEnd} py-10 px-5`}>
        <div className="text-white">
          <p className="opacity-60 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">Laptop</p>
          <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
        </div>
        <img
          src={macbook}
          alt="earphone"
          className="w-[230px] absolute top-1/2 -translate-y-1/2 right-8"
        />
      </div>

      <div
        className={`col-span-1 sm:col-span-2 category-bg-4 ${styles.flexEnd} py-10 px-5 sm:order-last lg:order-4`}
      >
        <div className="text-white">
          <p className="opacity-50 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">Console</p>
          <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
        </div>
        <img
          src={gaming}
          alt="earphone"
          className="w-[200px] sm:w-[250px] absolute right-5 sm:right-10"
        />
      </div>

      <div className={`category-bg-5 ${styles.flexStart2} py-10 px-5`}>
        <div className="text-white">
          <p className="opacity-60 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">Oculus</p>
          <Button text="Browse" bgColor="bg-white" textColor="text-brandGreen" />
        </div>
        <img src={vr} alt="earphone" className="w-[220px] absolute bottom-0 right-0" />
      </div>

      <div className={`category-bg-6 ${styles.flexStart2} py-10 px-5`}>
        <div className="text-white">
          <p className="opacity-60 mb-[2px]">Enjoy</p>
          <p className="text-2xl font-semibold">With</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">Speakers</p>
          <Button text="Browse" bgColor="bg-white" textColor="text-brandBlue" />
        </div>
        <img src={speaker} alt="earphone" className="w-[220px] absolute bottom-0 right-0" />
      </div>
    </section>
  );
};
