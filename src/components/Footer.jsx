import { address, footerLinks, socialIcons } from '../constants';
import { Button } from './Button';

export const Footer = () => {
  return (
    <section className="py-14 dark:bg-gray-950">
      <div className="container w-full flex flex-wrap gap-8">
        <div className="w-full lg:flex-1 lg:mr-12 space-y-3">
          <a
            href="#/"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            Eshop
          </a>
          <p className="text-gray-600 dark:text-white/70">
            Lorem ipsum dolor sit amet quis ut consectetur eligendi adipisicing elit inade
            distinctio accusamus.
          </p>
          <p className="text-gray-500 pb-1">Having problem with orders? 💻</p>

          <Button
            text="Customer support"
            bgColor="bg-primary/90"
            textColor="text-white"
            padding="py-1 px-4"
            href="https://foluso-ojutalayo.netlify.app/"
          />
        </div>

        <div className="lg:flex-[2] w-full">
          <ul className="flex flex-col md:flex-row justify-between gap-y-8">
            {footerLinks.map((item) => (
              <li key={item.id} className="flex flex-col space-y-3">
                <h1 className="dark:text-gray-200 text-xl font-semibold">{item.title}</h1>
                {item.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </li>
            ))}

            <div className="space-y-3">
              <div className="space-y-3">
                <h1 className="dark:text-gray-200 text-xl font-semibold">Address</h1>

                {address.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 opacity-80">
                    <item.Icon />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {socialIcons.map((Item) => (
                  <a
                    key={Math.random() * 10}
                    href="#"
                    className="text-3xl hover:text-primary duration-300 hover:scale-105 mt-3 dark:opacity-80 dark:hover:opacity-100"
                  >
                    <Item />
                  </a>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
