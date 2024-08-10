import { useDispatch } from 'react-redux';
import { Heading, Button } from '../components';
import { productData } from '../constants';
import { styles } from '../style';
import { togglePopup } from '../components/features/PopupSlice';

export const Products = () => {
  const dispatch = useDispatch();

  return (
    <section id="shop" className={`${styles.paddingY2}`}>
      <Heading title="Best Seller Products" subtitle="Explore Available Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
        {productData.map((item) => (
          <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={item.id}>
            <div className="relative group">
              <img src={item.img} alt="product" className=" object-cover rounded-md" />

              <div className="hidden group-hover:flex justify-center items-center size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:backdrop-blur-sm transition-all duration-700">
                <Button
                  text="Add to cart"
                  bgColor="bg-primary"
                  textColor="text-white"
                  handleClick={() => dispatch(togglePopup())}
                />
              </div>
            </div>

            <div className="leading-7 pt-2">
              <h1 className="font-semibold text-xl sm:text-base">{item.title}</h1>
              <p className="font-bold text-2xl sm:text-base">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
