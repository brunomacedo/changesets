/**
 * Return a slugified copy of a string.
 *
 * Handles accented/diacritic characters by normalizing them to their ASCII
 * equivalents before slugifying (e.g. "ação" → "acao").
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(str: string): string {
  let s = str;
  if (!s) {
    return "";
  }
  s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, " and ");
  s = s.replace(/[ ]+/g, "-");
  s = s.replace(/[-]+/g, "-");
  s = s.replace(/[^a-z0-9-]+/g, "");
  return s;
}
