import clsx from "clsx";

export function Badge({
  className,
  count,
}: {
  className?: string;
  count: number;
}): JSX.Element {
  return (
    <span
      className={
        className ||
        clsx(
          count > 0
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 text-transparent",
          "absolute aspect-square bg-teal-600 inline-flex items-center justify-center rounded-full shadow-sm text-white text-xs top-0 transition-all right-0 w-5"
        )
      }
    >
      {count ? count : null}
    </span>
  );
}
