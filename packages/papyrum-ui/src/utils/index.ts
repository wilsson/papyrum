const BASE_URL = process.env.NODE_ENV === 'production' ? '/static/assets/' : '/';

export const useBaseUrl = (url: string): string => {
  const externalUrl = /^(https?:\/\/)/.test(url);
  if(url.startsWith('/')){
    url = url.slice(1);
  }
  return externalUrl ? url : BASE_URL + url;
};