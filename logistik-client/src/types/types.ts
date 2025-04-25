export interface ItemType {
  id: number;
  nama: string;
  kode: string;
  satuan: string;
  stok: number;
  created_at: string;
  updated_at: string;
}

export interface ItemInType {
  id: number;
  barang_id: number;
  jumlah: number;
  asal_barang: string;
  tanggal_masuk: string;
  created_at: string;
  updated_at: string;
  barang: ItemType;
}
