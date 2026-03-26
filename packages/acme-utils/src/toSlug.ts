/**
 * Slugify a string, e.g. "Hello World!" -> "hello-world"
 */
export function toSlug(text: string): string {
  let str = text;
  if (!str) {
    return "";
  }
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = str.toLowerCase().trim();
  str = str.replace(/ & /g, " and ");
  str = str.replace(/[ ]+/g, "-");
  str = str.replace(/[-]+/g, "-");
  str = str.replace(/[^a-z0-9-]+/g, "");
  return str;
}
