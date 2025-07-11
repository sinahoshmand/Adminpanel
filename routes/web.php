<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('/panel')->group(function () {
    Route::get('/', [DashboardController::class , 'home'])->name('dashboard');
    Route::get('/page', [DashboardController::class , 'page'])->name('page');
});
