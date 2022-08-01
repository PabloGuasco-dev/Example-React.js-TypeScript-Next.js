export default function Repo({ repo }) {
  const user = repo?.owner;

  return (
    <article
      className="box is-flex is-flex-direction-column is-align-items-center"
    >
      <img
        src={user?.avatar_url}
        style={{ borderRadius: '50px', maxWidth: '50px' }}
      />
      <h2 className="is-size-3">
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
      </h2>
      <p>by <a href={user.html_url} target="_blank">{user.login}</a></p>
      <p>{repo.description}</p>
      {!!repo.language && <p>Language: {repo.language}</p>}
      <p>Stars: {repo.stargazers_count}</p>
      {!!repo.license?.name && (<p>
        License: {repo.license?.name}
      </p>)}
    </article>
  );
}
