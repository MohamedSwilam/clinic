<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'User' => [
                [
                    'name' => 'create-user',
                    'guard_name' => 'api',
                    'display_name' => 'Create User',
                ],
                [
                    'name' => 'view-user',
                    'guard_name' => 'api',
                    'display_name' => 'View User',
                ],
                [
                    'name' => 'edit-user',
                    'guard_name' => 'api',
                    'display_name' => 'Edit User',
                ],
                [
                    'name' => 'delete-user',
                    'guard_name' => 'api',
                    'display_name' => 'Delete User',
                ],
            ],
            'Patient' => [
                [
                    'name' => 'create-patient',
                    'guard_name' => 'api',
                    'display_name' => 'Create Patient',
                ],
                [
                    'name' => 'view-patient',
                    'guard_name' => 'api',
                    'display_name' => 'View Patient',
                ],
                [
                    'name' => 'edit-patient',
                    'guard_name' => 'api',
                    'display_name' => 'Edit Patient',
                ],
                [
                    'name' => 'delete-patient',
                    'guard_name' => 'api',
                    'display_name' => 'Delete Patient',
                ],
            ],
            'Appointment' => [
                [
                    'name' => 'create-appointment',
                    'guard_name' => 'api',
                    'display_name' => 'Create Appointment',
                ],
                [
                    'name' => 'view-appointment',
                    'guard_name' => 'api',
                    'display_name' => 'View Appointment',
                ],
                [
                    'name' => 'edit-appointment',
                    'guard_name' => 'api',
                    'display_name' => 'Edit Appointment',
                ],
                [
                    'name' => 'delete-appointment',
                    'guard_name' => 'api',
                    'display_name' => 'Delete Appointment',
                ],
            ],
            'Role' => [
                [
                    'name' => 'create-role',
                    'guard_name' => 'api',
                    'display_name' => 'Create Role',
                ],
                [
                    'name' => 'assign-role',
                    'guard_name' => 'api',
                    'display_name' => 'Assign Role',
                ],
                [
                    'name' => 'edit-role',
                    'guard_name' => 'api',
                    'display_name' => 'Edit Role',
                ],
                [
                    'name' => 'delete-role',
                    'guard_name' => 'api',
                    'display_name' => 'Delete Role',
                ],
            ],
            'Permission' => [
                [
                    'name' => 'assign-permission',
                    'guard_name' => 'api',
                    'display_name' => 'Assign Permission',
                ],
            ],
        ];
        $roles = [
            [
                'name' => 'super_admin',
                'guard_name' => 'api',
                'display_name' => 'Super Admin',
            ],
            [
                'name' => 'admin',
                'guard_name' => 'api',
                'display_name' => 'Admin',
            ],
            [
                'name' => 'doctor',
                'guard_name' => 'api',
                'display_name' => 'Doctor',
            ],
            [
                'name' => 'receptionist',
                'guard_name' => 'api',
                'display_name' => 'Receptionist',
            ],
            [
                'name' => 'assistant_doctor',
                'guard_name' => 'api',
                'display_name' => 'Assistant Doctor',
            ],
            [
                'name' => 'accountant',
                'guard_name' => 'api',
                'display_name' => 'Accountant',
            ],
        ];


        Model::unguard();
        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=0;') : '';

        DB::table('roles')->delete();
        DB::table('roles')->truncate();

        DB::table('permissions')->delete();
        DB::table('permissions')->truncate();

        foreach ($permissions as $permission_group){
            foreach ($permission_group as $key=>$permission){
                Permission::create($permission);
            }
        }

        foreach ($roles as $role){
            Role::create($role);
        }

        $role = Role::where('name', 'super_admin')->first();
        $role->givePermissionTo(Permission::all());

        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=1;') : '';
    }
}
