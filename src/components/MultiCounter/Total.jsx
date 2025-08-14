export default function Total({ counters }) {
  const sum = counters.reduce((a, b) => a + b, 0);
  return <div style={{ marginTop: 12, fontWeight: 700 }}>합계: {sum}</div>;
}
