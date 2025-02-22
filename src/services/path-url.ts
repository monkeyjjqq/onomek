const getFullPathUrl = (pathUrl: string) => {
  const baseUrl = "https://img.kemono.su/thumbnail/data";
  return baseUrl + pathUrl;
};

export default getFullPathUrl;
