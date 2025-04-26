import { useState } from "react";
import { useCreateItem } from "@/hooks/useItem";
import { useItemStore } from "@/store/useItemStore";
import { InputField } from "../InputField";

export const CreateFormItem = () => {
  const { setSelectedItem } = useItemStore();
  const [formData, setFormData] = useState({ nama: "", kode: "", satuan: "" });
  const [loading, setLoading] = useState(false);
  const { mutate: createItem } = useCreateItem();

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const resetForm = () => {
    setFormData({ nama: "", kode: "", satuan: "" });
    setSelectedItem(null);
  };

  const isFormValid = () => {
    return formData.nama && formData.kode && formData.satuan;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Semua field harus diisi dengan benar!");
      return;
    }

    setLoading(true);

    createItem(formData, {
      onSuccess: resetForm,
      onSettled: () => setLoading(false),
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 border rounded-2xl w-screen lg:w-[700px] px-10 py-20 h-auto shadow backdrop-blur-md bg-white/40 "
    >
      <InputField
        label="Nama Barang:"
        value={formData.nama}
        onChange={handleChange("nama")}
      />
      <InputField
        label="Kode:"
        value={formData.kode}
        onChange={handleChange("kode")}
      />
      <InputField
        label="Satuan:"
        value={formData.satuan}
        onChange={handleChange("satuan")}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 text-white font-semibold rounded transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        }`}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};
