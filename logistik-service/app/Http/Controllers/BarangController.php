<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function index() {
        return response()->json(Barang::all());
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'nama' => 'required|string|max:100',
        'kode' => 'required|string|unique:barangs,kode',
        'satuan' => 'required|string'
    ]);

    $barang = Barang::create([
        'nama' => $validated['nama'],
        'kode' => $validated['kode'],
        'satuan' => $validated['satuan'],
        'stok' => 0
    ]);

    return response()->json([
        'message' => 'Barang berhasil ditambahkan',
        'data' => $barang
    ], 201);
}

}
