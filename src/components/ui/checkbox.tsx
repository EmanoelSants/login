const Checkbox = () => {
  return (
    <div className="flex items-center -translate-y-5">
      <label
        className="relative flex cursor-pointer items-center justify-center gap-[1em] text-zinc-800"
        htmlFor="pp"
      >
        <input
          className="peer appearance-none"
          id="pp"
          name="pp"
          type="checkbox"
        />
        <span className="absolute left-0 top-1/2 h-[1.5em] w-[1.5em] rounded-[0.25em] border-[2px] border-zinc-800"></span>
        <svg
          className="absolute left-0 top-1/2 h-[1.5em] w-[1.5em] duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
          viewBox="0 0 72 97"
          fill="none"
          height={97}
          width={72}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.72 95.673c-6.37.644-11.034-4.445-15.746-8.048-4.947-3.783-8.859-10.482-10.847-16.446-6.689-20.067 18.238-28.312 26.244-9.098.483 1.16 1.961 2.376 1.4 3.5-2.28 4.556-3.675-9.63-4.2-14.697-1.002-9.69-3.335-44.87 6.299-49.688.884-.442 2.82 0 3.849 0 16.149 0 15.046 29.01 15.046 39.89 0 2.38-.318 8.001-1.75 10.148-.723 1.085-2.671 4.421-1.75 3.499 8.01-8.008 18.138-1.516 22.395 6.998 1.282 2.564.948 6.384 1.4 9.098 1.596 9.573-4.291 19.245-14.346 19.245-1.384 0-8.154.838-8.748-.35-.747-1.493 3.261-.722 4.898-1.05"
            strokeWidth="7px"
            pathLength={100}
            stroke="#27272a"
          />
        </svg>
      </label>

      <p className="font-medium text-zinc-800 text-xs ml-7 mt-[1.5rem]">Salvar neste dispositivo.</p>
    </div>
  );
};

export default Checkbox;
