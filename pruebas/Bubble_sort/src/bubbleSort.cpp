#include	<bubbleSort.hpp>

void	BubbleSort( std::vector<int>& arr, sf::RenderWindow& window, sf::RectangleShape bars[] )
{
	for (size_t i = 0; i < arr.size(); i++)
	{
		bool	swaped = false;
		for (size_t j = 0; j < arr.size() - i - 1; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				std::swap(arr[j], arr[j + 1]);

				bars[j].setSize(sf::Vector2f(BAR_WIDTH - 1, arr[j]));
				bars[j].setPosition(j * BAR_WIDTH, WINDOW_HEIGHT - arr[j]);

                bars[j + 1].setSize(sf::Vector2f(BAR_WIDTH - 1, arr[j + 1]));
                bars[j + 1].setPosition((j + 1) * BAR_WIDTH, WINDOW_HEIGHT - arr[j + 1]);

				swaped = true;
			}

			window.clear();
            for (size_t k = 0; k < arr.size(); ++k) {
                window.draw(bars[k]);
            }
            window.display();

            // Delay for visualization
            sf::sleep(sf::milliseconds(50));
		}

		if (!swaped)
			break;		
	}
}