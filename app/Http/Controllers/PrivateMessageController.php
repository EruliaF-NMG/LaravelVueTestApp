<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\PrivateMessage;

class PrivateMessageController extends Controller
{


    public function getUserNotification(Request $request){
        $authUser=$request->user()->id;

        $notification=PrivateMessage::where('read',0)
                   ->where('receiver_id',$authUser)
                   ->orderBy('created_at','ASC')
                   ->get();

        return response($notification,200);
    }

    public function getPrivateMessages(Request $request){
        $authUser=$request->user()->id;

        $message=PrivateMessage::where('receiver_id',$authUser)
                   ->orderBy('created_at','ASC')
                   ->get();

        return response($message,200);
    }

    public function getPrivateMessageById(Request $request){       

        $message=PrivateMessage::where('id',$request->input('id'))->first();

        if($message->read == 0){
            $message->read=1;
            $message->save();
        }

        return response($message,200);
    }

    public function getPrivateMessageSent(Request $request){
        
        $authUser=$request->user()->id;

        $message=PrivateMessage::where('sender_id',$authUser)
                   ->orderBy('created_at','ASC')
                   ->get();

        return response($message,200);

    }

    public function sentPrivateMessage(Request $request){

        $message = [
        'sender_id' => $request->input('sender_id'), 
        'receiver_id' => $request->input('receiver_id'),
        'message' => $request->input('message'),
        'read' => 0,
        'subject' => $request->input('subject'),
        ];

        $createData=PrivateMessage::create($message);

        $message=PrivateMessage::where('id',$createData->id)->first();

        return response($message,201);
        
    }
    
}
