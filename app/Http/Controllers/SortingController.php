<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

define('_CPP', 1);
define('_PYTHON', 2);

class SortingController extends Controller
{
    //Test for react interaction
    public function processNumber(Request $request)
    {
        $number = $request->input('number');
        $result = $number * 2; // Simplemente multiplica el número por 2

        // Retorna una respuesta Inertia
        return redirect()->route('welcome')->with('result', $result);
    }
    //Test for react interaction
    public function sumNumber(Request $request)
    {
        // RECIBIR NUMBER POR INPUT
        $number = $request->input('number');

        $binaryPath = base_path('resources/scripts/c++/sum/sum');
        $command = escapeshellcmd("$binaryPath $number");

        $output = [];
        $returnVar = 0;
        exec($command, $output, $returnVar);
        $result=$output[0];
        return redirect()->route('welcome')->with('result', $result);
    }

    public function bubbleSortCpp(Request $request)
    {
        $rawData = $request->input('columns');
        $rawDataString = implode(' ', $rawData);

        $process = new Process([base_path('resources/scripts/c++/Bubble_sort/bubble'), $rawDataString]);
        $process->run();

        if (!$process->isSuccessful())
        {
            throw new ProcessFailedException($process);
        }

        $data = explode("\n", $process->getOutput());
        return Inertia::render('Algorithms/AlgorithmsMenu', [
            'rawData' => $rawData,
            'data' => $data,
        ]);
    }

    public function sort(Request $request)
    {
        $data = $request->input('data');
        $dataString = implode(',', $data);
    
        $process = new Process(['python3', base_path('resources/scripts/python/sort/bubble sort/bubble_sort.py'), $dataString]);
        $process->run();
    
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
    
        $output = json_decode($process->getOutput(), true);
        $sortedData = $output['sorted_array'];
        $steps = $output['steps'];
        $comparisons = $output['comparisons'];
        return Inertia::render('SortPage', [
            'sortedData' => $sortedData,
            'steps' => $steps,
            'comparisons' => $comparisons,
            'data' => $data
        ]);
    }

    public function playBubbleSort(Request $request)
    {
        $rawData = $request->input('columns');
        $path = $request->input('path');
        $mode = $request->input('mode');

        if ($mode == _CPP)
        {
            $rawDataString = implode(' ', $rawData);
            $process = new Process([base_path($path), $rawDataString]);
        }
        else if($mode == _PYTHON)
        {
            $rawDataString = implode(',', $rawData);
            $process = new Process(['python3', base_path('resources/scripts/python/sort/bubble sort/bubble_sort.py'), $rawDataString]);
        }

        $process->run();

        if (!$process->isSuccessful())
        {
            throw new ProcessFailedException($process);
        }

        if ($mode == _CPP)
        {
            $data = explode("\n", $process->getOutput());
            return Inertia::render('Algorithms/AlgorithmsMenu', [
                'rawData' => $rawData,
                'data' => $data,
            ]);
        }
        else if ($mode == _PYTHON)
        {
            $output = json_decode($process->getOutput(), true);
            $sortedData = $output['sorted_array'];
            $steps = $output['steps'];
            $comparisons = $output['comparisons'];
            return Inertia::render('SortPage', [
                'sortedData' => $sortedData,
                'steps' => $steps,
                'comparisons' => $comparisons,
                'data' => $rawData,
            ]);
        }
    }

    public function MergeSort(Request $request)
    {
        $columns = $request->input('columns');
        sort($columns);
    
        return Inertia::render('Algorithms/AlgorithmsMenu', ['sortedColumns' => $columns]);
    }
}
