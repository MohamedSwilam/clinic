<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PrescriptionRequest extends FormRequest
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
                'description' => 'required',
                'language' => 'required',
                'patient_id' => 'required|exists:patients,id',
                'creator_id' => 'required|exists:users,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'description' => '',
                'language' => 'required',
            ];
        }
    }
}
