const BRAND_SUFFIX = " | MyEVStation";

function trimAtWord(value: string, maxLength: number): string {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength - 1);
  const boundary = cut.lastIndexOf(" ");
  return (boundary > Math.floor(maxLength * 0.65) ? cut.slice(0, boundary) : cut).trimEnd() + "…";
}

export function fitMetaTitle(value: string): string {
  let base = value.replace(/(?:\s*\|\s*MyEVStation)+$/i, "").trim();
  const maxBase = 60 - BRAND_SUFFIX.length;
  if (base.length > maxBase) base = trimAtWord(base, maxBase);
  return `${base}${BRAND_SUFFIX}`;
}

export function fitMetaDescription(value: string): string {
  return trimAtWord(value, 155);
}
