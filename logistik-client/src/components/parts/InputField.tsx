interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputField = ({
  label,
  value,
  onChange,
  type = "text",
}: InputFieldProps) => (
  <div>
    <label className="block font-medium mb-1 text-black">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="text-black border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>
);
