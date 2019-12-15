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
            $table->string('chief_complain');
            $table->date('onset_date');
            $table->string('onset_manner');
            $table->string('duration');
            $table->string('severity');
            $table->string('factors');
            $table->string('associated_symptoms');
            $table->string('examination', 1000);
            $table->string('oral_examination', 1000);
            $table->string('extra_oral_examination', 1000);
            $table->string('special_test', 1000);
            $table->string('diagnosis', 1000);
            $table->string('treatment_plan', 5000);
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
