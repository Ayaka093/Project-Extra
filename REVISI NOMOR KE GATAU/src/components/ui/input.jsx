export function Input({ placeholder, value, onChange }) {
  return <input placeholder={placeholder} value={value} onChange={onChange} className='border px-2 py-1' />;
}