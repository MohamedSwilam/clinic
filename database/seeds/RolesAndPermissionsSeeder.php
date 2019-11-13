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
        $permissions = config('permissions');
        $roles = config('roles');

        Model::unguard();
        env('DB_CONNECTION') != 'sqlite' ? DB::statement('SET FOREIGN_KEY_CHECKS=0;') : '';

        DB::table('roles')->delete();
        DB::table('roles')->truncate();

        DB::table('permissions')->delete();
        DB::table('permissions')->truncate();

        foreach ($permissions as $group_key => $permission_group){
            foreach ($permission_group as $key=>$permission){
                $permission['group'] = $group_key;
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
