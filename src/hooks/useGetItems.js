import useSWR from 'swr';

const useGetItems = (url) => {
  const { data, error } = useSWR(url);
  if (error) console.log(error);
  return data ? data : {};
};

export default useGetItems;
