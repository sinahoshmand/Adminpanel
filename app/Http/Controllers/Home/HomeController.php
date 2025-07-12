<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
     public function main()
     {
         return Inertia::render('Home/Main')->rootView('home');
     }
}
