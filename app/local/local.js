//实现本地存储=>存到redux里（城市）
export function getStorage(key) {
  return localStorage.getItem(key);
}

export function setStorage(key,value) {
  return localStorage.setItem(key,value);
}