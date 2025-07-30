function SkeletonItem() {
  return (
    <li className="skeleton-item">
      <div className="skeleton-thumb" />
      <div className="skeleton-right">
        <div className="skeleton-title" />
        <div className="skeleton-link" />
      </div>
    </li>
  );
}

function SkeletonList({ count = 5 }) {
  return (
    <ul>
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonItem key={idx} />
      ))}
    </ul>
  );
}

export default SkeletonList;
