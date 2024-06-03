# Heart Trail Animation

A simple and visually appealing heart trail animation that follows the cursor as it moves across the screen. This project demonstrates the use of HTML, CSS, and JavaScript to create a dynamic and interactive animation effect.

## Demo

[View Live Demo](https://your-demo-link.com)

## Features

- Heart-shaped elements follow the cursor.
- Elements animate from the cursor position, changing size and hue as they fade out.
- Smooth performance with throttled event handling.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/spl3ndid/heart_trail_animation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd heart_trail_animation
    ```

3. Open the `index.html` file in your preferred web browser.

## Usage

Simply move your cursor around the screen to see the heart trail animation in action. Each heart will follow the cursor, change its hue, and fade out smoothly.

## Customization

You can customize various aspects of the animation:

- **Animation Duration**: Adjust the duration of the animation in `styles.css` by changing the `--animation-duration` variable.
  
    ```css
    :root {
        --animation-duration: 6s; /* Change this value to your preference */
    }
    ```

- **Heart Image**: Change the background image of the hearts in `styles.css` by modifying the `background` property.

    ```css
    span {
        background: url("your-new-heart-image-url.png");
        /* other styles */
    }
    ```

- **Heart Size Range**: Adjust the size range of the hearts in `index.js` by modifying the `size` calculation.

    ```javascript
    const size = Math.random() * 50 + 50; // Sizes between 50px and 100px
    ```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or create a pull request.

## Author

- **Adityan Chanduruthil** - [github-profile-link](https://github.com/spl3ndid)

## Acknowledgments

- Inspiration from various online animations and coding tutorials.


