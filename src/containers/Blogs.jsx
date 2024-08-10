import { Heading } from '../components';
import { blogData } from '../constants';
import { styles } from '../style';

export const Blogs = () => {
  return (
    <section id="blog" className={styles.paddingY2}>
      <Heading title="Recent News" subtitle="Latest information about our products" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7">
        {blogData.map((blog) => (
          <div data-aos="fade-up" data-aos-delay={blog.aosDelay} key={blog.id}>
            <div className="overflow-hidden rounded-2xl hover:scale-105 duration-500 mb-2">
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-[300px] sm:h-[150px] lg:h-[250px] object-cover"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-500">{blog.published}</p>
              <p className="font-bold line-clamp-1">{blog.title}</p>
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {blog.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
