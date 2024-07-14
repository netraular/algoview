<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

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
}