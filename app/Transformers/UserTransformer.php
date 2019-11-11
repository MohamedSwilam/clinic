<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param User $user
     * @return array
     */
    public function transform(User $user)
    {
        $data = $user->toArray();
        $data['image'] = $data['image']? config('paths.user-image.get').$data['image']:null;

        return $data;
    }
}
