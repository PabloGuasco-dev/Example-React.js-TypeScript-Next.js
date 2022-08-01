
export default function Search({ search, onSearch, clearSearch, loading }) {
    return (
        <div className="box is-flex is-flex-direction-row">
            <div className={`control ${loading ? 'is-loading' : ''}`}>
                <input className="input" value={search} onChange={onSearch} />
            </div>
            <button className="button" type="button" onClick={clearSearch}>Clear</button>
        </div>
    );
}