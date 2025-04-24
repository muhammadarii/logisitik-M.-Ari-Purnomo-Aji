<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BarangKeluar extends Model
{
    public function barang() {
        return $this->belongsTo(Barang::class);
    }

    use HasFactory;

    protected $fillable = [
        'barang_id',
        'jumlah',
        'tujuan_barang',
        'tanggal_keluar',
    ];


}
