import { SUPPORTED_LANGS, type Lang, type Translations } from ".";
import { en } from "./en";
import { esEs } from "./es-es";

export const translations: Record<Lang, Translations> = {
  en,
  "es-ES": esEs,
};

export function getLang(path: string = ""): Lang {
  const first = (path ?? "").split("/").filter(Boolean)[0] ?? "";
  return (SUPPORTED_LANGS as readonly string[]).includes(first)
    ? (first as Lang)
    : "en";
}

export function getT(path: string): Translations {
  return translations[getLang(path)];
}

export function getPrefix(path: string): string {
  const lang = getLang(path);
  return lang === "en" ? "" : `/${lang}`;
}

/** Returns the equivalent path in the target language. */
export function switchLang(path: string, targetLang: Lang): string {
  const currentLang = getLang(path);
  const currentPrefix = currentLang === "en" ? "" : `/${currentLang}`;
  const targetPrefix = targetLang === "en" ? "" : `/${targetLang}`;
  const rest = currentPrefix ? path.slice(currentPrefix.length) : path;
  return targetPrefix + (rest || "/");
}
