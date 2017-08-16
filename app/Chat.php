<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Chat extends Model
{
    protected $fillable = [
        'sender_id', 'receiver_id', 'chat','read'
    ];

    protected $appends=['sender_id','receiver_id'];

    public function getSenderAttributes(){
    	return User::where('id',this->sender_id)->first();
    }

    public function getReceiverAttributes(){
    	return User::where('id',this->receiver_id)->first();
    }
}
