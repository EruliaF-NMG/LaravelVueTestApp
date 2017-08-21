<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class PrivateMessage extends Model
{
    protected $fillable = [
        'sender_id', 'receiver_id', 'message','read','subject'
    ];

    protected $appends=['sender','receiver'];

    public function getCreatedAtAttribute($time){
    	return Carbon::parse($time)->diffForHumans();
    }

    public function getSenderAttribute(){
    	return User::where('id',$this->sender_id)->first();
    }

    public function getReceiverAttribute(){
    	return User::where('id',$this->receiver_id)->first();
    }
}
