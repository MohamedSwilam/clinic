<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
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
                'illness_description' => 'required',
                'status_id' => 'required|exists:statuses,id',
                'reservation_type_id' => 'required|exists:reservation_types,id',
                'reservation_duration_id' => 'required|exists:reservation_durations,id',
                'doctor_id' => 'required|exists:users,id',
                'receptionist_id' => 'exists:users,id',
                'new_patient' => 'required|boolean',
                'patient_id' => 'required_if:new_patient,==,0|exists:patients,id',
                'patient.email' => 'required_if:new_patient,==,1|email|unique:patients,email',
                'patient.first_name' => 'required_if:new_patient,==,1',
                'patient.last_name' => 'required_if:new_patient,==,1',
                'patient.birth_date' => 'required_if:new_patient,==,1|date',
                'patient.address' => 'required_if:new_patient,==,1',
                'patient.city' => '',
                'patient.country' => '',
                'patient.gender' => 'required_if:new_patient,==,1',
                'patient.occupation' => 'required_if:new_patient,==,1',
                'patient.reference' => 'required_if:new_patient,==,1',
                'patient.phones.*.number' => 'required_if:new_patient,==,1|unique:phones,number',
                'patient.phones.*.country_code' => 'required_if:new_patient,==,1',
                'has_payment' => 'required',
                'payment.description' => 'required_if:has_payment, ==, 1',
                'payment.to_be_paid' => 'required_if:has_payment, ==, 1|numeric',
                'payment.paid' => 'required_if:has_payment, ==, 1|numeric',
            ];
        }
        else if (sizeof($segments) == 3) {
            return [
                'illness_description' => '',
                'status_id' => 'exists:statuses,id',
                'reservation_type_id' => 'exists:reservation_types,id',
                'reservation_duration_id' => 'exists:reservation_durations,id',
                'doctor_id' => 'exists:users,id',
                'receptionist_id' => 'exists:users,id',
                'has_payment' => 'required',
                'payment.description' => '',
                'payment.to_be_paid' => 'numeric',
                'payment.paid' => 'numeric',
            ];
        }
    }
}
