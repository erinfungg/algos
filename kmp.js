function buildPattern(str) {
  let i = 0;
  let j = 0;
  let pat = [];
  while (j < str.length) {
    if (j === 0) {
      pat[j] = 0;
      j++;
    } else if (str[i] !== str[j]) {
      if (i > 0) i = pat[i - 1];
      else {
        pat[j] = 0;
        j++;
      }
    } else {
      pat[j] = i + 1;
      i++;
      j++;
    }
  }
  return pat;
}

function knp(long, short) {
  let pat = buildPattern(short);
  let i = 0;
  let j = 0;
  while (j < long.length) {
    if (short[i] === long[j]) {
      i++;
      j++;
    } else if (short[i] !== long[j]) {
      if (i > 0) i = pat[i - 1];
      else j++;
    }
    if (i === short.length) return true;
  }
  return false;
}
