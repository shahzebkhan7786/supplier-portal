export default function QueryForm() {
  return (
    <div className="container">
      <h2>Raise Query</h2>

      <div className="card">
        <input placeholder="Supplier Name" /><br /><br />

        <select>
          <option>Allergen Info</option>
          <option>HACCP Certificate</option>
        </select><br /><br />

        <textarea placeholder="Description"></textarea><br /><br />

        <button>Submit</button>
      </div>
    </div>
  );
}
