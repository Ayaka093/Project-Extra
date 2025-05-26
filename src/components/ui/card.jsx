export function Card({ children, className }) {
  return <div className={`border rounded p-2 ${className}`}>{children}</div>;
}
export function CardContent({ children, className, onClick }) {
  return <div className={className} onClick={onClick}>{children}</div>;
}