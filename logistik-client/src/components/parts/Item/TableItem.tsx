"use client";
import { useItems } from "@/hooks/useItem";
import { CreateFormItem } from "./CreateFormItem";
import { useState } from "react";

export const TableItem = () => {
  const { data, isLoading } = useItems();
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
        className="self-end bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer z-10"
      >
        {formOpen ? "Close" : "Create"}
      </button>
      {formOpen && <CreateFormItem />}
      <div className="overflow-x-auto rounded-xl shadow-md mt-10">
        <table className="min-w-full table-auto border-collapse bg-white text-sm">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-left">
            <tr>
              <th className="p-3 font-semibold">No</th>
              <th className="p-3 font-semibold">Nama</th>
              <th className="p-3 font-semibold">Kode</th>
              <th className="p-3 font-semibold">Stok</th>
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
                <td className="p-3">{barang.nama}</td>
                <td className="p-3">{barang.kode}</td>
                <td className="p-3">
                  {barang.stok} {barang.satuan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
