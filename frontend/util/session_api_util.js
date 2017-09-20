export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "api/users/",
    data: { user },
    type: "JSON"
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user },
    type: "JSON"
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
    type: "JSON"
  });
};
