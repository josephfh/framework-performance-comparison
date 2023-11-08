import * as React from "react";

export function Button({
  className,
  text,
  onClick,
}: {
  className?: string;
  text: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      className={
        className ||
        "bg-slate-300 hover:bg-slate-200 inline-flex rounded-sm px-4 py-3"
      }
      onClick={onClick}
      type="button"
    >
      {text}{" "}
    </button>
  );
}
