<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class PageController extends Controller
{
    //
    public function showSortPage()
    {
        return Inertia::render('SortPage', [
            'data' => [],
            'sortedData' => []
        ]);
    }
}
