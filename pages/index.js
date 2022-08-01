import Link from 'next/link';

export default function Home() {

  const title = 'GitHub for humans';

  return (
      <div className="container is-fluid">
        <h1 className="title">{title}</h1>
        <div className="block columns">
          <div className="column">
            <div className="box is-flex is-justify-content-space-around">
              <Link href="/users">
                <a className="button is-white is-large">
                  Search users
                </a>
              </Link>
            </div>
          </div>

          <div className="column">
            <div className="box is-flex is-justify-content-space-around">
              <Link href="/repos">
              <a className="button is-white is-large">
                  Search repositories
                </a>
              </Link>
            </div>
          </div>

        </div>
            
      </div>
  );
}
