import type { Locale } from "@/config/site";
import { fr, type Dictionary } from "./dictionaries/fr";
import { en } from "./dictionaries/en";
import { it } from "./dictionaries/it";

const dictionaries: Record<Locale, Dictionary> = { fr, en, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function tpl(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
}

export type { Dictionary };
