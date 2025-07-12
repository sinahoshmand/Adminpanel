<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function home()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function page()
    {
           $text = "This is Panel Page";
        return Inertia::render('Admin/Page' , compact('text'));
    }


    public function subPage()
    {
        return Inertia::render('Admin/SubPage');
    }
}
