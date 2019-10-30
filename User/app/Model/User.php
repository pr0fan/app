<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    protected $fillable = ['username', 'first_name', 'last_name'];
}
