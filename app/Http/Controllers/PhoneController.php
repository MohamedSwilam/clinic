<?php

namespace App\Http\Controllers;

use App\Patient;
use App\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
{
    public function destroy($id)
    {
//        $this->authorize('destroy', Phone::class);

        Phone::find($id)->delete();

        return $this->respond('Phone Deleted Successfully');
    }
}
