<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8',
                'first_name' => 'required',
                'last_name' => 'required',
                'birth_date' => 'required|date',
                'address' => 'required',
                'city' => '',
                'country' => '',
                'phone' => 'required|min:11|max:11',
                'gender' => 'required',
                'image' => 'image|max:1024|mimes:jpeg,png',
                'role' => 'required|exists:roles,name',
                'phones.*.number' => 'required|unique:phones,number',
                'phones.*.country_code' => 'required',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'email' => 'email|unique:users,email,'.$segments[2],
                'password' => 'min:8',
                'first_name' => '',
                'last_name' => '',
                'birth_date' => 'date',
                'address' => '',
                'city' => '',
                'country' => '',
                'phone' => 'min:11|max:11',
                'gender' => '',
                'image' => 'image|max:1024|mimes:jpeg,png',
                'role' => 'exists:roles,name',
                'phones.*.number' => 'unique:phones,number',
                'phones.*.country_code' => '',
            ];
        }
    }
}
