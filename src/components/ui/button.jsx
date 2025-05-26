export function Button({ children, onClick, variant }) {
  const style = variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white';
  return <button onClick={onClick} className={`px-3 py-1 rounded ${style}`}>{children}</button>;
}