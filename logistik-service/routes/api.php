<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\BarangMasukController;
use App\Http\Controllers\BarangKeluarController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['message' => 'API works']);
});


Route::get('/barang', [BarangController::class, 'index']);
Route::post('/barang', [BarangController::class, 'store']);

Route::get('/barang-masuk', [BarangMasukController::class, 'index']);
Route::post('/barang-masuk', [BarangMasukController::class, 'store']);

Route::get('/barang-keluar', [BarangKeluarController::class, 'index']);
Route::post('/barang-keluar', [BarangKeluarController::class, 'store']);