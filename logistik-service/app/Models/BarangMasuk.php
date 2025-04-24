<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BarangMasuk extends Model
{
    public function barang() {
    return $this->belongsTo(Barang::class);
    }

    use HasFactory;

    protected $fillable = [
        'barang_id',
        'jumlah',
        'asal_barang',
        'tanggal_masuk',
    ];

}
