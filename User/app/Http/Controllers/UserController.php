<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function list()
    {
        return User::all();
    }
 
    public function detail($id)
    {
        return User::find($id);
    }

    public function create(Request $request)
    {
        return User::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete($id);

        return 204;
    }

}
