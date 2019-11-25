<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationDurationRequest extends FormRequest
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
                'date' => 'required|date',
                'start_time' => 'required',
                'end_time' => 'required',
                'counter' => 'required|integer',
                'reservation_type_id' => 'required|exists:reservation_types,id'
            ];
        }
        else if (sizeof($segments) == 3) {
            return [
                'date' => 'date',
                'start_time' => '',
                'end_time' => '',
                'counter' => 'integer',
                'reservation_type_id' => 'exists:reservation_types,id'
            ];
        }
    }
}
