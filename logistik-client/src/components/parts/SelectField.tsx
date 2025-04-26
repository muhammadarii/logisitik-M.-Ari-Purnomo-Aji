interface SelectFieldProps {
  label: string;
  value: string;
  options: { label: string; value: string | number }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField = ({
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) => (
  <div>
    <label className="block font-medium mb-1 text-black">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="text-black border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-500"
    >
      <option value="">-- Pilih Barang --</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
