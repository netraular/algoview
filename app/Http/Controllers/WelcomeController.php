<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    //
    public function index(Request $request): Response
    {
        $result = $request->session()->get('result', null);
        return Inertia::render('Welcome', ['result' => $result]);
    }
}
