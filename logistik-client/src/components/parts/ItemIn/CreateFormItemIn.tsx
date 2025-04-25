import { useItemInStore } from "@/store/useItemInStore";
import { InputField } from "../Item/InputField";
import { useState } from "react";
import { useCreateItemIn } from "@/hooks/useItemIn";
import { SelectField } from "./SelectField";
import { useItems } from "@/hooks/useItem";

export const CreateFormItemIn = () => {
  const { setSelectedItemIn } = useItemInStore();
  const { data: items } = useItems();

  const [formData, setFormData] = useState({
    barang_id: "",
    jumlah: "",
    asal_barang: "",
    tanggal_masuk: "",
  });

  const [loading, setLoading] = useState(false);
  const { mutate: createItemIn } = useCreateItemIn();

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const resetForm = () => {
    setFormData({
      barang_id: "",
      jumlah: "",
      asal_barang: "",
      tanggal_masuk: "",
    });
    setSelectedItemIn(null);
  };

  const isFormValid = () => {
    return Object.values(formData).every((val) => val.trim() !== "");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Semua field harus diisi dengan benar!");
      return;
    }

    setLoading(true);

    const payload = {
      barang_id: parseInt(formData.barang_id),
      jumlah: parseInt(formData.jumlah),
      asal_barang: formData.asal_barang,
      tanggal_masuk: formData.tanggal_masuk,
    };

    createItemIn(payload, {
      onSuccess: resetForm,
      onSettled: () => setLoading(false),
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 border rounded-2xl w-[700px] px-10 py-20 h-auto shadow backdrop-blur-md bg-white/40"
    >
      <SelectField
        label="Barang"
        value={formData.barang_id}
        onChange={handleChange("barang_id")}
        options={[
          ...(items?.map((item) => ({
            label: item.nama,
            value: item.id.toString(),
          })) ?? []),
        ]}
      />
      <InputField
        label="Jumlah"
        value={formData.jumlah}
        onChange={handleChange("jumlah")}
        type="number"
      />
      <InputField
        label="Asal Barang"
        value={formData.asal_barang}
        onChange={handleChange("asal_barang")}
      />
      <InputField
        label="Tanggal Masuk"
        value={formData.tanggal_masuk}
        onChange={handleChange("tanggal_masuk")}
        type="date"
      />
      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white font-semibold py-2 px-4 rounded cursor-pointer`}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};
