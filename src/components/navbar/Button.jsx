export default function Button({ title, onclick }) {
  return (
    <button
      className="duration-300 block text-[1em] font-medium cursor-pointer relative overflow-hidden after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-black after:absolute hover:after:translate-x-full after:duration-300"
      onClick={onclick}
    >
      {title}
    </button>
  );
}
