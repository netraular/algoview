#include <sum.hpp>

int	main(int argc, char **argv)
{
	(void) argc;
	std::cout << sum(atoi(argv[1])) << std::endl;
}