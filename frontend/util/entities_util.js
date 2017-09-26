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

export const notesSortedByLastUpdated = notes => {
  function compare(a, b) {
    if (new Date(a.updated_at) < new Date(b.updated_at)) {
      return 1;
    } else if (new Date(a.updated_at) > new Date(b.updated_at)) {
      return -1;
    } else {
      return 0;
    }
  }

  return Object.values(notes).sort(compare);
};

export const emptyNote = {
  title: "",
  body: "",
  notebook: {},
  taggings: [],
  last_updated: ""
};
