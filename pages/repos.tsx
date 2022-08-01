import React, { useEffect, useState } from 'react';

import useDebounce from '../components/useDebounce';
import useGithubSearch from '../components/useGithubSearch';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

import Repo from '../components/Repo'

export default function ReposPage() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useDebounce('', 500)


  const [page, setPage] = useState(1)
  const onNext = () => {
    setPage(value => value + 1)
  }
  const onPrev = () => {
    setPage(value => Math.max(1, value - 1))
  }

  useEffect(() => {
    setDebouncedSearch(search)
  }, [search])

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  const { data, error } = useGithubSearch('repo', {
    q: debouncedSearch,
    page
  })

  // @TODO handle error!

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const loadingConditions = {
    'search.length': search.length,
    'debouncedSearch.length': debouncedSearch.length,
    'debouncedSearch === search': debouncedSearch === search,
    '!error': !error,
    '!data': !data
  }
  const loading = Object.values(loadingConditions).every(Boolean)
  // console.table({ ...loadingConditions, loading })

  const clearSearch = () => {
    setSearch('');
  }

  return (
    <div className="container is-fluid">
      <h1 className="title">Seach repos</h1>
      <div className="block">
        <Search
          loading={loading}
          search={search}
          onSearch={onSearch}
          clearSearch={clearSearch} />
      </div>
      <div className="block">
        <ReposList repos={data?.data.items} />
      </div>
      <Pagination
        page={page}
        per_page={data?.data.items.length}
        total={data?.data.total_count}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
}

function ReposList({ repos = [] }) {
  return (
    <div>
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
