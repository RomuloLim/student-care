<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('occupation')->get();

        return Inertia::render('Users/List/UsersList', [
            'users' => $users,
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Form/UserForm');
    }
}
