import useSwr from "swr";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useGetPosts = () => {
  const { data, error, ...rest } = useSwr("/api/v1/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

export const useGetPostById = (id) => {
  const { data, error, ...rest} = useSwr(id ? `/api/v1/posts/${id}` : null, fetcher)
  return { data, error, loading: !data && !error, ...rest}
}