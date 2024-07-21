#include <bubbleSort.hpp>

int	main(int argc, char **argv)
{
	std::vector<int> array;
	if (argc < 3)
	{
		char	s[2] = " ";
		char	*splited = strtok(argv[1], s);
		while (splited != NULL)
		{
			array.push_back(atoi(splited));
			splited = strtok(NULL, s);
		}
	}
	else
		for (int i = 1; i < argc; i++)
		{
			array.push_back(atoi(argv[i]));
		}	
	
	(void) argc;
	(void) argv;
	BubbleSort(array);
}