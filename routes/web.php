<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Controllers\SortingController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PageController;

use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;


require __DIR__.'/auth.php';
Route::get('/dashboard', function () {    return Inertia::render('Dashboard');})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

Route::get('/algorithms', [PageController::class, 'showAlgorithmMenu'])->name('algorithms.menu');

Route::get('/algorithms/BarSort/MergeSort', [PageController::class, 'showMergeSort'])->name('algorithms.mergeSort');
Route::post('/algorithms/BarSort/MergeSort', [SortingController::class, 'MergeSort']);
Route::get('/algorithms/BarSort/BubbleSort', [PageController::class, 'showBubbleSort'])->name('algorithms.bubbleSort');
Route::post('/algorithms/BarSort/BubbleSort', [SortingController::class, 'playBubbleSort']);


// Route::post('/algorithms', [SortingController::class, 'playAlgorithm']);
// Route::post('/process-number', [SortingController::class, 'processNumber']);
// Route::post('/sum-number', [SortingController::class, 'sumNumber']);
// Route::get('/sort', [PageController::class, 'showSortPage']);
// Route::post('/sort', [SortingController::class, 'sort']);