# bubble_sort.py

import sys
import json

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

if __name__ == "__main__":
    input_data = sys.argv[1]
    arr = list(map(int, input_data.split(',')))
    sorted_arr = bubble_sort(arr)
    print(json.dumps(sorted_arr))
