<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MedicalReportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'chief_complain' => 'required',
                'onset_date' => 'required',
                'onset_manner' => 'required',
                'duration' => 'required',
                'severity' => 'required',
                'factors' => 'required',
                'examination' => 'required',
                'oral_examination' => 'required',
                'extra_oral_examination' => 'required',
                'special_test' => 'required',
                'diagnosis' => 'required',
                'treatment_plan' => 'required',
                'associated_symptoms' => 'required',
                'patient_id' => 'required|exists:patients,id',
                'doctor_id' => 'required|exists:users,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'chief_complain' => '',
                'onset_date' => '',
                'onset_manner' => '',
                'duration' => '',
                'severity' => '',
                'factors' => '',
                'examination' => '',
                'oral_examination' => '',
                'extra_oral_examination' => '',
                'special_test' => '',
                'diagnosis' => '',
                'treatment_plan' => '',
                'associated_symptoms' => '',
            ];
        }
    }
}
