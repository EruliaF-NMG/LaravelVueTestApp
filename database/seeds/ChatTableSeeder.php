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
        $user[]=array(
        	'sender_id'=>'1', 
        	'receiver_id'=>"2", 
        	'chat'=>'Hi Roshan',
        	'read' => 1
        );

        $user[]=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Hi Lokka',
        	'read' => 1
        );

        $user[]=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Kohomada Jeewethee Bro...',
        	'read' => 1
        );

        $user[]=array(
        	'sender_id'=>'1', 
        	'receiver_id'=>"2", 
        	'chat'=>'Diske ammata discade... Bro....',
        	'read' => 1
        );

        $user[]=array(
        	'sender_id'=>'2', 
        	'receiver_id'=>"1", 
        	'chat'=>'Lol.... thota hena gahapan.... paraya',
        	'read' => 1
        );

        Chat::insert($user);
          
    }
}
