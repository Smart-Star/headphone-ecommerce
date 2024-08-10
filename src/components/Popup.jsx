/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoCloseOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
import { togglePopup } from './features/PopupSlice';

export const Popup = () => {
  const handlePopup = useSelector((state) => state.popup.value);
  const dispatch = useDispatch();

  return (
    <div>
      {handlePopup && (
        <section className="h-screen w-screen fixed top-0 inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[300px] fixed p-4 shadow-md rounded-xl bg-white dark:bg-gray-900 dark:text-white duration-300 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="">Order Now</h1>
              <IoCloseOutline
                onClick={() => dispatch(togglePopup())}
                className="text-2xl cursor-pointer hover:text-primary hover:border hover:rounded-full hover:border-primary duration-200"
              />
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Address" className="form-input" />

              <div className="text-center">
                <Button text="Order Now" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
