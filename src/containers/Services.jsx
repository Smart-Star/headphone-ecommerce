import { servicesData } from '../constants';
import { styles } from '../style';

export const Services = () => {
  return (
    <section className={`${styles.paddingY3} ml-6 sm:ml-16 lg:ml-0`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
        {servicesData.map((item) => (
          <div key={item.id} className={`${styles.flexStart2} flex-col sm:flex-row gap-4`}>
            <item.Icon className="text-4xl md:text-5xl text-primary" />
            <div>
              <h1 className="lg:text-xl font-bold">{item.title}</h1>
              <h1 className="text-gray-400/90 text-sm">{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
