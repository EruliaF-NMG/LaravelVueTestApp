<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Chat;
use App\Events\ScoreUpdated;

class ChatController extends Controller
{


   /* protected $pusher;

    public function __construct(PusherManager $pusher)
    {
        $this->pusher = $pusher;
    }*/

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
                   ->orderBy('created_at','ASC')
                   ->get();

        return response($chats,200);
    }

    public function setUserconversation(Request $request){
        //dd('dd');
        $receiverID=$request->input('receiver_id');
        $senderID=$request->user()->id;
        $chat=$request->input('chat');

        $data=array(
            'id' =>1,
            'sender_id'=>$senderID, 
            'receiver_id'=>$receiverID, 
            'chat'=>$chat,
            'read' => 1
            );

        

        $chats=Chat::create($data);
        $finalChat=Chat::where('id',$chats->id)->first();

        event(new ScoreUpdated($finalChat->toArray())); 
      
        return response($finalChat,201);
    }

   
}
