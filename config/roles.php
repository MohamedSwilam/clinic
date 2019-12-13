<?php
return [
    [
        'name' => 'super_admin',
        'guard_name' => 'api',
        'is_core' => 1,
    ],
    [
        'name' => 'admin',
        'guard_name' => 'api',
        'is_core' => 1,
    ],
    [
        'name' => 'doctor',
        'guard_name' => 'api',
        'is_core' => 0,
    ],
    [
        'name' => 'receptionist',
        'guard_name' => 'api',
        'is_core' => 0,
    ],
    [
        'name' => 'assistant_doctor',
        'guard_name' => 'api',
        'is_core' => 0,
    ],
    [
        'name' => 'accountant',
        'guard_name' => 'api',
        'is_core' => 0,
    ],
];
