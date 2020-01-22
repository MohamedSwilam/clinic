<?php

use App\Status;
use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = config('status');
        foreach ($statuses as $status){
            $temp = Status::where('name', $status['name'])->first();
            if (!$temp){
                Status::create($status);
            }
        }
    }
}
