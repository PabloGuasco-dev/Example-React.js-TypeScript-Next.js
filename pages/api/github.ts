import type { NextApiRequest, NextApiResponse } from 'next';

import { Octokit } from '@octokit/rest';

const octokit = new Octokit({});

const { search } = octokit.rest;


const methods = {
  repo: search.repos,
  user: search.users,
};

const InvalidMethod = () => Promise.reject(new Error('Invalid Octokit method'))

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { q, page = 1, type: searchType } = req.query;

  const method = methods[searchType as string] || InvalidMethod;

  const result = await method({
    q,
    page,
    per_page: 10
  });

  res.status(200).json(result);
};
