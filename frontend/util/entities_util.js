export const tagsByFirstLetterThenName = tags => {
  const tagsArr = Object.values(tags);
  let hsh = {};
  for (let i = 0; i < tagsArr.length; i++) {
    let firstLetter = tagsArr[i].name[0].toUpperCase();
    if (!hsh[firstLetter]) {
      hsh[firstLetter] = {};
    }
    hsh[firstLetter][tagsArr[i].name] = tagsArr[i];
  }
  return hsh;
};
