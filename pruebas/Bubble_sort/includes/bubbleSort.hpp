#ifndef	BUBBLESORT_HPP
# define	BUBBLESORT_HPP

# include <iostream>
# include <vector>
# include <ctime>
# include <SFML/Graphics.hpp>

const int WINDOW_WIDTH = 800;
const int WINDOW_HEIGHT = 600;
const int ARRAY_SIZE = 5;
const int BAR_WIDTH = WINDOW_WIDTH / ARRAY_SIZE;

void	BubbleSort( std::vector<int>& arr, sf::RenderWindow& window, sf::RectangleShape bars[] );

#endif