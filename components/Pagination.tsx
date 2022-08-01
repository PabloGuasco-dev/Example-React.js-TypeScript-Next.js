type PaginationProps = {
  page: number,
  per_page: number,
  total: number,
  onNext: () => void,
  onPrev: () => void,
}
export default function Pagination({ page, per_page, total, onNext, onPrev }: PaginationProps) {
  const lastPage = Math.ceil(total / per_page)
  return total > per_page && (
    <>
      <div className="block">
        Page {page} of {lastPage}
      </div>
      <nav className="pagination is-small" role="navigation" aria-label="pagination">
        <button type="button" disabled={page === 1} className="pagination-previous" onClick={onPrev}>&laquo; Previous</button>

        <button type="button" disabled={page >= lastPage} className="pagination-next" onClick={onNext}>Next page &raquo;</button>
      </nav>
    </>
  );
}
