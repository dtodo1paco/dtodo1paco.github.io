export function agesAgo(ref) {
  try {
    var year = parseInt(ref);
    return (new Date()).getFullYear() - year;
  } catch (err) {
    return 0;
  }
}

export function monthDiff(d1, d2) {
  let months;
  let before = d1;
  let after = d2;
  if (after < before) {
    before = d2;
    after = d1;
  };
  months = (after.getFullYear() - 1 - before.getFullYear()) * 12;
  months = months + 11 - before.getMonth() + 1;
  months = months + after.getMonth();
  return months <= 0 ? 0 : months;
}
export function monthsAgo(d1) {
  let monthsDiff = monthDiff(d1, new Date());
  return monthsDiff;
}
/**
 * Returns a JSON object with years and months fields valued with date difference
 * @param d1
 * @param d2
 * @returns {{}}
 */
export function getDuration(d1, d2) {
  let monthsDiff = monthDiff(d1, d2);
  let years = Math.floor(monthsDiff/12);
  let months = monthsDiff % 12;
  let ret = {};
  if (years > 0) {
    ret.years = years;
  }
  if (months > 0) {
    ret.months = months;
  }
  return ret;
}
