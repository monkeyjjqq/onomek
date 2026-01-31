const getFullPathUrl = (pathUrl: string) => {
  const baseUrl = "https://img.kemono.cr/thumbnail/data";
  return baseUrl + pathUrl;
};

export default getFullPathUrl;
