import { useItemOutStore } from "@/store/useItemOutStore";
import { InputField } from "../InputField";
import { useItems } from "@/hooks/useItem";
import { useState } from "react";
import { useCreateItemOut } from "@/hooks/useItemOut";
import { SelectField } from "../SelectField";

export const CreateFormItemOut = () => {
  const { setSelectedItemOut } = useItemOutStore();
  const { data: items } = useItems();

  const [formData, setFormData] = useState({
    barang_id: "",
    jumlah: "",
    tujuan_barang: "",
    tanggal_keluar: "",
  });

  const [loading, setLoading] = useState(false);
  const { mutate: createItemOut } = useCreateItemOut();

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const resetForm = () => {
    setFormData({
      barang_id: "",
      jumlah: "",
      tujuan_barang: "",
      tanggal_keluar: "",
    });
    setSelectedItemOut(null);
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
      tujuan_barang: formData.tujuan_barang,
      tanggal_keluar: formData.tanggal_keluar,
    };

    createItemOut(payload, {
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
        label="Tujuan Barang"
        value={formData.tujuan_barang}
        onChange={handleChange("tujuan_barang")}
      />
      <InputField
        label="Tanggal Keluar"
        value={formData.tanggal_keluar}
        onChange={handleChange("tanggal_keluar")}
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
