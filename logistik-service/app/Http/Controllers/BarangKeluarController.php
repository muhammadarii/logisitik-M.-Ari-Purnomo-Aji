<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\BarangKeluar;
use Illuminate\Http\Request;

class BarangKeluarController extends Controller
{
    public function index()
    {
        return response()->json(BarangKeluar::with('barang')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'barang_id' => 'required|exists:barangs,id',
            'jumlah' => 'required|integer',
            'tujuan_barang' => 'required|string',
            'tanggal_keluar' => 'required|date',
        ]);

        $barang = Barang::find($request->barang_id);
        if ($barang->stok < $request->jumlah) {
            return response()->json(['error' => 'Stok barang tidak cukup'], 400);
        }

        BarangKeluar::create($validated);
        $barang->stok -= $request->jumlah;
        $barang->save();
        return response()->json([
            'message' => 'Barang keluar berhasil ditambahkan',
            'data' => $validated,
        ], 201);
    }
}
