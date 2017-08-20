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
        $user[]=array(
        	'name'=>'Nisal', 
        	'email'=>"nisal.nmg@gmail.com", 
        	'password'=>bcrypt('12345'),
        );

        $user[]=array(
            'name'=>'Roshan', 
            'email'=>"nisal1.nmg@gmail.com", 
            'password'=>bcrypt('12345'),
        );

        $user[]=array(
            'name'=>'Saman', 
            'email'=>"nisal2.nmg@gmail.com", 
            'password'=>bcrypt('12345'),
        );

        User::insert($user);

    }
}
