import { StaticImageData } from "next/image";

export type HeroProps = {
  location: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export type ServiceProps = {
  title: string;
  vision: string;
  mision: string;
  image: StaticImageData;
};

export type SolutionProps = {
  title: string;
  data: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
  }[];
};

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

export interface ItemOutType {
  id: number;
  barang_id: number;
  jumlah: number;
  tujuan_barang: string;
  tanggal_keluar: string;
  created_at: string;
  updated_at: string;
  barang: ItemType;
}
