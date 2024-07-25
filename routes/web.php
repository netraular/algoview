<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SortingController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PageController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/algorithms', function () { return Inertia::render('Algorithms/AlgorithmsMenu');});
Route::get('/algorithms/{type}/{algorithm}', function ($type, $algorithm) {      return Inertia::render("Algorithms/".ucfirst($type)."/".ucfirst($algorithm)); });
Route::post('/process-number', [SortingController::class, 'processNumber']);
Route::post('/sum-number', [SortingController::class, 'sumNumber']);

Route::get('/sort', [PageController::class, 'showSortPage']);
Route::post('/sort', [SortingController::class, 'sort']);

Route::get('/bubble-sort-cpp', [PageController::class, 'showBubbleSortCpp']);
Route::post('/bubble-sort-cpp', [SortingController::class, 'bubbleSortCpp']);


require __DIR__.'/auth.php';
