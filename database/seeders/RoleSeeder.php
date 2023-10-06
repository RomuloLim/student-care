<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'manage-users',
            'read-users',
            'manage-roles',
            'manage-rooms',
            'read-rooms',
            'manage-occupations',
            'read-occupations',
            'manage-students',
            'read-students',
        ];

        $roles = [
            'Super Admin',
            'Diretor',
            'Coordenador',
            'Professor',
            'Aluno',
            'Responsável',
        ];

        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission);
        }

        foreach ($roles as $role) {
            Role::findOrCreate($role);
        }

        Role::findByName('Super Admin')->syncPermissions(Permission::all());
    }
}
