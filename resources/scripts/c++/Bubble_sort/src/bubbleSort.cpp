#include	<bubbleSort.hpp>

void	BubbleSort( std::vector<int>& arr)
{
	std::cout << "raw,";
	for (size_t i = 0; i < arr.size(); i++)
	{
		std::cout << arr[i];
		if (i != arr.size() - 1)
			std::cout << ",";
	}
	std::cout << std::endl;
	for (size_t i = 0; i < arr.size(); i++)
	{
		bool	swaped = false;
		for (size_t j = 0; j < arr.size() - i - 1; j++)
		{
			std::cout << "w," << arr[j] << "," << arr[j + 1] << std::endl;
			if (arr[j] > arr[j + 1])
			{
				std::cout << "s," << arr[j] << "," << arr[j + 1] << std::endl;
				std::swap(arr[j], arr[j + 1]);
				swaped = true;
			}
		}

		if (!swaped)
			break;		
	}
	std::cout << "sorted,";
	for (size_t i = 0; i < arr.size(); i++)
	{
		std::cout << arr[i];
		if (i != arr.size() - 1)
			std::cout << ",";
	}
	std::cout << std::endl;
}