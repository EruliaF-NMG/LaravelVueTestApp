<?php

use Illuminate\Database\Seeder;
use App\Chat;

class ChatTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1=array(
        	'sender_id'=>'1', 
        	'receiver_id'=>"2", 
        	'chat'=>'Hi Roshan',
        	'read' => 1
        );

        $user2=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Hi Lokka',
        	'read' => 1
        );

        $user3=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Kohomada Jeewethee Bro...',
        	'read' => 1
        );

        $user4=array(
        	'sender_id'=>'1', 
        	'receiver_id'=>"2", 
        	'chat'=>'Diske ammata discade... Bro....',
        	'read' => 1
        );

        $user5=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Lol.... thota hena gahapan.... paraya',
        	'read' => 1
        );

          Chat::create($user1);
          Chat::create($user2);
          Chat::create($user3);
          Chat::create($user4);
          Chat::create($user5);
    }
}
