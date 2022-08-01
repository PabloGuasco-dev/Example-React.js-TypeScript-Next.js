export default function User({ user }) {
  return (
    <article
      className="box is-flex is-flex-direction-row is-align-items-center"
    >
      <a href={user.html_url} target="_blank">
        <img
          src={user.avatar_url}
          style={{ borderRadius: '50px', maxWidth: '50px' }}
        />
      </a>
      <a href={user.html_url} target="_blank">
        {user.login}
      </a>
    </article>
  );
}
