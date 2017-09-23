export const getTags = () => {
  return $.ajax({
    method: "GET",
    url: "api/tags"
  });
};

export const getTag = tagId => {
  return $.ajax({
    method: "GET",
    url: `api/tags/${tagId}`
  });
};

export const createTag = tag => {
  return $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tag }
  });
};

export const updateTag = tag => {
  return $.ajax({
    method: "PATCH",
    url: `api/tags/${tag.id}`,
    data: { tag }
  });
};

export const deleteTag = tagId => {
  return $.ajax({
    method: "DELETE",
    url: `api/tags/${tagId}`
  });
};
