import type { SVGProps } from "react";

const stroke: Partial<SVGProps<SVGSVGElement>> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function BoscoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 20c3 3 7 3 10 0s7-3 10 0" />
      <circle cx="16" cy="12" r="4.5" />
      <path d="M16 12l6-3" />
      <circle cx="22.5" cy="8.5" r="1.5" />
    </svg>
  );
}

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 11l4 4 8-10" />
    </svg>
  );
}

export function IconDash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 10h10" />
    </svg>
  );
}

export function IconHelp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...stroke} {...props}>
      <circle cx="10" cy="10" r="7" />
      <path d="M8 8c0-1.1.9-2 2-2s2 .9 2 2-2 2-2 3" />
      <circle cx="10" cy="14" r="0.4" fill="currentColor" />
    </svg>
  );
}
