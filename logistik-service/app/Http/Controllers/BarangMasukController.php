<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\BarangMasuk;
use Illuminate\Http\Request;

class BarangMasukController extends Controller
{
    public function index()
    {
        return response()->json(BarangMasuk::with('barang')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'barang_id' => 'required|exists:barangs,id',
            'jumlah' => 'required|integer',
            'asal_barang' => 'required|string',
            'tanggal_masuk' => 'required|date',
        ]);

        BarangMasuk::create($validated);

        $barang = Barang::find($validated['barang_id']);
        $barang->stok += $request->jumlah;
        $barang->save();

        return response()->json([
            'message' => 'Barang masuk berhasil ditambahkan',
            'data' => $validated,
        ], 201);
    }
}
