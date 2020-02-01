<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicalReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_reports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('chief_complain')->nullable();
            $table->date('onset_date')->nullable();
            $table->string('onset_manner')->nullable();
            $table->string('duration')->nullable();
            $table->string('severity')->nullable();
            $table->string('factors')->nullable();
            $table->string('associated_symptoms')->nullable();
            $table->string('examination', 1000)->nullable();
            $table->string('oral_examination', 1000)->nullable();
            $table->string('extra_oral_examination', 1000)->nullable();
            $table->string('special_test', 1000)->nullable();
            $table->string('diagnosis', 1000)->nullable();
            $table->text('treatment_plan')->nullable();
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->unsignedBigInteger('doctor_id')->nullable();
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('set null');
            $table->foreign('doctor_id')->references('id')->on('users')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_reports');
    }
}
