<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserChatList()
    {
       $data= User::orderBy('name','asc')->get();
       return response($data,200);
    }

    
}
