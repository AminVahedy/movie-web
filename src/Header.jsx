export default function Header() {
  return (
    <header className="z-50 opacity-75 bg-[black] flex items-center justify-between fixed top-0 left-0 right-0 py-[20px] px-[70px] text-sm">
      <div className="flex items-center gap-[2px]">
        <span className="text-sm md:text-base lg:text-xl text-amber-500 font-semibold">
          A
        </span>
        <span className="text-sm md:text-sm lg:text-base text-[#fff] font-medium">
          Movie
        </span>
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-[#fff]">home</p>
        <p className="text-[#fff]">home</p>
        <p className="text-[#fff]">home</p>
      </div>
    </header>
  );
}
