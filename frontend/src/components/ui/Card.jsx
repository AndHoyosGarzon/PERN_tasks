export function Card({ children, className }) {
  return (
    <div className={`bg-zinc-900 p-10 rounded-lg ${className}`}>{children}</div>
  );
}
