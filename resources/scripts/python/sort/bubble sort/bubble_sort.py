# bubble_sort.py

import sys
import json

def bubble_sort(arr):
    n = len(arr)
    positions = list(range(n))  # Mantenemos un seguimiento de las posiciones originales
    steps = []
    comparisons = []
    step_index = 0
    for i in range(n):
        for j in range(0, n-i-1):
            comparisons.append((step_index, step_index + 1))  # Guarda los indices de los steps comparados
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                positions[j], positions[j+1] = positions[j+1], positions[j]
                steps.append(positions[:])  # Guarda una copia del estado actual de las posiciones
                step_index += 1
            else:
                steps.append(positions[:])  # Guarda una copia del estado actual de las posiciones
                step_index += 1
    return positions, steps, comparisons

if __name__ == "__main__":
    input_data = sys.argv[1]
    arr = list(map(int, input_data.split(',')))
    sorted_positions, steps, comparisons = bubble_sort(arr)
    result = {
        'sorted_array': sorted_positions,
        'steps': steps,
        'comparisons': comparisons
    }
    print(json.dumps(result))