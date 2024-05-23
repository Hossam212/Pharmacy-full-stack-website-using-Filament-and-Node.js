<?php

use Illuminate\Database\Migrations\Migration;
use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    protected $connection = 'mongodb';
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
           $table->id();
           $table->date('date_of_birth');
           $table->string('name');
           $table->string('type');
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
