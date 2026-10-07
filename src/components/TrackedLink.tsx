"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { capture } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  event: string;
  eventProps?: Record<string, unknown>;
};

export function TrackedLink({ event, eventProps, onClick, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        capture(event, eventProps);
        onClick?.(e);
      }}
    />
  );
}
