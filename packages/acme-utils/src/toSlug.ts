/**
 * Return a slugify copy of a string.
 *
 * @param {string} str The string to be slugify
 * @return {string} The slugify string.
 */
export function toSlug(str: string): string {
  let sText = str;
  if (!sText) {
    return "";
  }
  sText = sText.toLowerCase().trim();
  sText = sText.replace(/ & /g, " and ");
  sText = sText.replace(/[ ]+/g, "-");
  sText = sText.replace(/[-]+/g, "-");
  sText = sText.replace(/[^a-z0-9-]+/g, "");
  return sText;
}
