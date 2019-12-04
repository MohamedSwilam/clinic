<?php

namespace App\Http\Controllers;

use App\IndexResponse;
use App\Transformers\PermissionTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Permission::class);
        return $this->respond(
            'Data Loaded Successfully',
            Permission::get()->groupBy('group')
        );
//        return $this->respond(
//            'Data Loaded Successfully',
//            fractal(
//                (new IndexResponse(Permission::orderBy('group')))->execute()
//                , new PermissionTransformer()
//            )
//        );
    }
}
