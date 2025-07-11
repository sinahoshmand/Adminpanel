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
        return Inertia::render('Admin/Page');
    }
}
