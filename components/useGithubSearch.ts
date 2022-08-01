import axios from 'axios';
import useSWRImmutable from 'swr/immutable'


const fetcher = (url) => axios.get(url).then((res) => res.data);

export default (type, { q, page = 1 }) => useSWRImmutable(
    () =>
      q.length
        ? `/api/github?q=${q}&type=${type}&page=${page}`
        : null,
    fetcher
  );