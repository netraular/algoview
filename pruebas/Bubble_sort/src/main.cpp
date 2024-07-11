#include <bubbleSort.hpp>

int	main(int argc, char **argv)
{
	sf::RenderWindow window(sf::VideoMode(WINDOW_WIDTH, WINDOW_HEIGHT), "BUBBLE SORT");
	std::vector<int> array;
	array.push_back(5);
	array.push_back(2);
	array.push_back(3);
	array.push_back(1);
	array.push_back(4);
	sf::RectangleShape bars[ARRAY_SIZE];
	for (size_t i = 0; i < ARRAY_SIZE; i++)
	{
		bars[i].setSize(sf::Vector2f(BAR_WIDTH - 1, array[i]));
		bars[i].setPosition(i*BAR_WIDTH, WINDOW_HEIGHT - array[i]);
		bars[i].setFillColor(sf::Color::White);
	}
	
	(void) argc;
	(void) argv;
	BubbleSort(array, window, bars);

	while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed) {
                window.close();
            }
        }

        window.clear();
        for (int i = 0; i < ARRAY_SIZE; ++i) {
            window.draw(bars[i]);
        }
        window.display();
    }
}