<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('/panel')->group(function () {
    Route::get('/', [DashboardController::class , 'home'])->name('dashboard');
    Route::get('/page', [DashboardController::class , 'page'])->name('page');
    Route::get('/sub-page', [DashboardController::class , 'subPage'])->name('page.sub');
});

Route::get('/', [HomeController::class , 'main'])->name('main');
