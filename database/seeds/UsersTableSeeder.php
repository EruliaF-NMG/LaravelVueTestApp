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

        $user2=array(
            'name'=>'Roshan', 
            'email'=>"nisal1.nmg@gmail.com", 
            'password'=>bcrypt('12345'),
        );

        $user3=array(
            'name'=>'Saman', 
            'email'=>"nisal2.nmg@gmail.com", 
            'password'=>bcrypt('12345'),
        );

        User::create($user1);
         User::create($user2);
          User::create($user3);

    }
}
