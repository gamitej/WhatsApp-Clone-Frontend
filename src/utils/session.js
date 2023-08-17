export const setSession = (name, data) => {
  window.sessionStorage.setItem(name, JSON.stringify(data));
};

export const getSession = (name) => {
  const data = window.sessionStorage.getItem(name);
  return JSON.parse(data);
};

export const getSessionInfoBool = (name) => {
  const val = JSON.parse(window.sessionStorage.getItem(name));
  if (val) return true;
  return false;
};

export const removeSession = (name) => {
  window.sessionStorage.removeItem(name);
};
