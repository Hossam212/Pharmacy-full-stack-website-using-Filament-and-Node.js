<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Users extends Model
{
    protected $connection = 'mongodb';
}
