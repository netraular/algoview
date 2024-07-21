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
            'steps'=>0,
            'data' => [],
            'sortedData' => []
        ]);
    }

    public function showBubbleSortCpp()
    {
        return Inertia::render('BubbleSortCpp', [
            'rawData'=>[400, 2, 345, 401, 233, 112, 200, 150, 300, 111],
            'data' => [],
            'sortedData' => []
        ]);
    }
}
