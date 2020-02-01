<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $user_id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index($user_id)
    {
        $this->authorize('index', Notification::class);

        return $this->respond(
            'Data Loaded Successfully',
            User::where('id', $user_id)->first()->unreadNotifications
        );
    }
    /**
     * Display a listing of the resource.
     *
     * @param $user_id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function readIndex($user_id)
    {
        $this->authorize('index', Notification::class);

        return $this->respond(
            'Data Loaded Successfully',
            User::where('id', $user_id)->first()->readNotifications
        );
    }
    /**
     * Display a listing of the resource.
     *
     * @param $user_id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function unreadIndex($user_id)
    {
        $this->authorize('index', Notification::class);

        return $this->respond(
            'Data Loaded Successfully',
            User::where('id', $user_id)->first()->unreadNotifications
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param $user_id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function markAll($user_id)
    {
        $this->authorize('index', Notification::class);

        User::where('id', $user_id)->first()->notifications->markAsRead();

        return $this->respond(
            'All Notifications Marked as Read Successfully'
        );
    }
}
