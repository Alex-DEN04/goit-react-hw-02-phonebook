export default function Filter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
