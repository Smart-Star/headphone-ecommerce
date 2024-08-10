export const Button = ({ text, bgColor, textColor, href, padding, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${bgColor} ${textColor} 
      ${padding || `py-2 px-8`} cursor-pointer hover:scale-105 rounded-full relative z-10 transition-all duration-300 font-medium`}
    >
      <a href={href}>{text}</a>
    </button>
  );
};
