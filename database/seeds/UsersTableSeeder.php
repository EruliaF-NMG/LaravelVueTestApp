<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1=array(
        	'name'=>'Nisal', 
        	'email'=>"nisal.nmg@gmail.com", 
        	'password'=>bcrypt('12345'),
        );

        User::create($user1);

    }
}
