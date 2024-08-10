import { IoMdSearch } from 'react-icons/io';
import { FaCaretUp, FaCartShopping } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { dropDownLinks, menuLinks } from '../constants';
import { DarkMode } from './DarkMode';
import { togglePopup } from './features/PopupSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex justify-between items-center py-4 bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <a
        href="/"
        className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
      >
        Eshop
      </a>

      <div className="hidden lg:flex items-center">
        <ul className="flex space-x-4 xl:space-x-8 font-semibold text-gray-500">
          {menuLinks.map((item) => (
            <li className="hover:text-black dark:hover:text-white duration-200" key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}

          <li className="relative cursor-pointer group">
            <a
              href="/"
              className="flex items-center gap-x-[3px] hover:text-black  dark:hover:text-white"
            >
              Quick Links
              <span>
                <FaCaretUp className="group-hover:rotate-180 duration-300" />
              </span>
            </a>

            <ul className="absolute z-[100] hidden space-y-2 group-hover:block w-[200px] p-2 rounded-md shadow-md bg-white dark:bg-gray-900">
              {dropDownLinks.map((item) => (
                <li
                  key={item.id}
                  className="inline-block w-full p-2 hover:rounded-md hover:text-black hover:bg-primary/20 dark:hover:text-white dark:hover:bg-gray-800 duration-200"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap0">
        <div className="flex justify-between items-center group search-bar">
          <input
            type="text"
            placeholder="Search"
            className="outline-none hidden bg-transparent group-hover:block"
          />
          <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 cursor-pointer" />
        </div>

        <button type="button" className="relative p-3 mr-3" onClick={() => dispatch(togglePopup())}>
          <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
          <span className="size-4 bg-red-500 text-white rounded-full absolute top-0 right-0 text-xs">
            4
          </span>
        </button>

        <div>
          <DarkMode />
        </div>
      </div>
    </section>
  );
};
