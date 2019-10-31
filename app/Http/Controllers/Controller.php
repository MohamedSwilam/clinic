<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function respond($message, $data = [], $status_code = 200)
    {
        return response()->json([
            'data' => $data,
            'message' => $message
        ])->setStatusCode($status_code);
    }
}
