const getFullPathUrl = (pathUrl: string) => {
  const baseUrl = "https://kemo.su/data";
  return baseUrl + pathUrl;
};

export default getFullPathUrl;
