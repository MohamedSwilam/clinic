<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
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
                'email' => 'required|email|unique:patients,email',
                'first_name' => 'required',
                'last_name' => 'required',
                'birth_date' => 'required|date',
                'address' => 'required',
                'city' => '',
                'country' => '',
                'gender' => 'required',
                'occupation' => 'required',
                'reference' => 'required',
                'phones.*.number' => 'required|unique:phones,number',
                'phones.*.country_code' => 'required',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'email' => 'email|unique:patients,email,'.$segments[2],
                'first_name' => '',
                'last_name' => '',
                'birth_date' => 'date',
                'address' => '',
                'city' => '',
                'country' => '',
                'gender' => '',
                'occupation' => '',
                'reference' => '',
                'phones.*.number' => 'unique:phones,number',
                'phones.*.country_code' => '',
            ];
        }
    }
}
