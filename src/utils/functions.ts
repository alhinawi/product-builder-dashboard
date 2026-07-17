/*
 *   Slices a string to a specified limit and appends an ellipsis if it exceeds the limit.
 *  @param   {String} txt - The string to slice.
 *  @param   {Number} [max = 50] limit - The maximum length of the string.
 *  @returns {String} - The sliced string with an ellipsis if necessary.
 */

export function txtSlicer(txt: string, limit: number = 50): string {
  return txt.length > limit ? txt.substring(0, limit) + "..." : txt;
}
