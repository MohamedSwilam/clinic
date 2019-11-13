<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationTypeRequest extends FormRequest
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
                'name' => 'required',
                'online_reservation' => 'required|boolean',
                'min_price' => 'required|int',
                'max_price' => 'required|int',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'name' => '',
                'online_reservation' => 'boolean',
                'min_price' => 'int',
                'max_price' => 'int',
            ];
        }
    }
}
