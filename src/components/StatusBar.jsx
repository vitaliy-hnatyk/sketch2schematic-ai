export default function StatusBar({ status, objects }) {
  const uncertain = objects.filter(
    (object) => object.type === 'unknown' || (object.confidence != null && object.confidence < 0.6),
  ).length;
  const countLabel = `${objects.length} object${objects.length === 1 ? '' : 's'}${
    uncertain ? ` · ${uncertain} review` : ''
  }`;

  return (
    <div className="status">
      <span>{status}</span>
      <span className="badge">{countLabel}</span>
    </div>
  );
}
