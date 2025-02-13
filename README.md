# QR Code Generator

## Description

This project is a simple QR code generator that takes a URL input from the user and generates a QR code image in SVG format. It utilizes the `inquirer` package for user input and the `qr-image` package to create the QR code.

## Features

- Prompts the user to enter a URL.
- Generates a QR code in SVG format based on the provided URL.
- Saves the QR code image to a file named `i_love_qr.svg`.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required npm packages:
   ```bash
   npm install inquirer qr-image
   ```

## Usage

1. Run the application:
   ```bash
   node index.js
   ```

2. When prompted, enter the URL you want to convert into a QR code.

3. The QR code will be saved as `i_love_qr.svg` in the project directory.

## Error Handling

- If the prompt cannot be rendered in the current environment, an error message will be displayed.
- Any other errors will also be caught and logged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [inquirer](https://www.npmjs.com/package/inquirer) - For user input handling.
- [qr-image](https://www.npmjs.com/package/qr-image) - For generating QR codes.
