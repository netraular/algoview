# bubble_sort.py

import sys
import json

def bubble_sort(arr):
    n = len(arr)
    steps = []
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                steps.append(arr[:])  # Guarda una copia del estado actual del array
    return arr, steps

if __name__ == "__main__":
    input_data = sys.argv[1]
    arr = list(map(int, input_data.split(',')))
    sorted_arr, steps = bubble_sort(arr)
    result = {
        'sorted_array': sorted_arr,
        'steps': steps
    }
    print(json.dumps(result))
