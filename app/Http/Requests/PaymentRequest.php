<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
                'to_be_paid' => 'required|numeric',
                'paid' => 'required|numeric',
                'appointment_id' => 'exists:appointments,id',
                'patient_id' => 'required|exists:patients,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'description' => '',
                'to_be_paid' => 'numeric',
                'paid' => 'numeric',
                'appointment_id' => 'exists:appointments,id',
                'patient_id' => 'exists:patients,id',
            ];
        }
    }
}
