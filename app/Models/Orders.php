<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Orders extends Model
{
    protected $connection = 'mongodb';
}
