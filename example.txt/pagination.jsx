export const PaginationComponent: React.FC<Props> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationWrapper}>
        {currentPage !== 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            type="button"
            className={classNames([styles.pageItem, styles.sides].join(' '))}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => setCurrentPage(1)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: currentPage === 1,
          })}
        >
          {1}
        </button>
        {currentPage > 3 && <div className={styles.separator}>...</div>}
        {currentPage === totalPages && totalPages > 3 && (
          <button
            onClick={() => setCurrentPage(currentPage - 2)}
            type="button"
            className={styles.pageItem}
          >
            {currentPage - 2}
          </button>
        )}
        {currentPage > 2 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            type="button"
            className={styles.pageItem}
          >
            {currentPage - 1}
          </button>
        )}
        {currentPage !== 1 && currentPage !== totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage)}
            type="button"
            className={[styles.pageItem, styles.active].join(' ')}
          >
            {currentPage}
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            type="button"
            className={styles.pageItem}
          >
            {currentPage + 1}
          </button>
        )}
        {currentPage === 1 && totalPages > 3 && (
          <button
            onClick={() => setCurrentPage(currentPage + 2)}
            type="button"
            className={styles.pageItem}
          >
            {currentPage + 2}
          </button>
        )}
        {currentPage < totalPages - 2 && <div className={styles.separator}>...</div>}
        <button
          onClick={() => setCurrentPage(totalPages)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: currentPage === totalPages,
          })}
        >
          {totalPages}
        </button>
        {currentPage !== totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            type="button"
            className={[styles.pageItem, styles.sides].join(' ')}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
export const Pagination = PaginationComponent;
 