"use client";
import { useItemsOut } from "@/hooks/useItemOut";
import { useState } from "react";
import { CreateFormItemOut } from "./CreateFormItemOut";

export const TableItemOut = () => {
  const { data, isLoading } = useItemsOut();
  const [formOpen, setFormOpen] = useState(false);

  const toggleForm = () => {
    setFormOpen((prev) => !prev);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleForm}
        type="submit"
        className="self-end bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
      >
        {formOpen ? "Close" : "Create"}
      </button>
      {formOpen && <CreateFormItemOut />}
      <div className="overflow-x-auto rounded-xl shadow-md mt-10">
        <table className="min-w-full table-auto border-collapse bg-white text-sm">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-left">
            <tr>
              <th className="p-3 font-semibold">No</th>
              <th className="p-3 font-semibold">Nama</th>
              <th className="p-3 font-semibold">Kode</th>
              <th className="p-3 font-semibold">Jumlah Barang Keluar</th>
              <th className="p-3 font-semibold">Tujuan Barang</th>
              <th className="p-3 font-semibold">Tanggal Keluar</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((barang, index) => (
              <tr
                key={barang.id}
                className={`hover:bg-blue-50 transition duration-200 text-black ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{barang.barang.nama}</td>
                <td className="p-3">{barang.barang.kode}</td>
                <td className="p-3">
                  {barang.jumlah} {barang.barang.satuan}
                </td>
                <td className="p-3">{barang.tujuan_barang}</td>
                <td className="p-3">{barang.tanggal_keluar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
