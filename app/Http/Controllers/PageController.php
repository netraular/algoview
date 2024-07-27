<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showSortPage()
    {
        return Inertia::render('Algorithms/Others/SortPage', [
            'steps'=>0,
            'data' => [],
            'sortedData' => []
        ]);
    }

    public function showBubbleSort()
    {
        return Inertia::render('Algorithms/AlgorithmsMenu', ['selectedAlgorithm' => 'BubbleSort']);
    }

    public function showMergeSort()
    {
        return Inertia::render('Algorithms/AlgorithmsMenu', ['selectedAlgorithm' => 'MergeSort']);
    }

    public function showAlgorithmMenu()
    {
        return Inertia::render('Algorithms/AlgorithmsMenu');
    }
}
