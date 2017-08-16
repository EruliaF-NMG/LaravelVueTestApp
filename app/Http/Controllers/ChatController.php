<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Chat;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserConversationByID(Request $request)
    {
        $userID=$request->input('id');
        $authUser=$request->user()->id;

        $chats=Chat::whereIn('sender_id',[$userID,$authUser])
                   ->whereIn('receiver_id',[$userID,$authUser])
                   ->orderBy('created_at','desc')
                   ->get();

        return response($chats,200);
    }

   
}
