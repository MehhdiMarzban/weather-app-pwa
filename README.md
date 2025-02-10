# Weather App

This is a simple weather application built with Next.js and React Hooks. It allows users to search for the current weather conditions of any city.

## Features

- Search for current weather by city name
- Display temperature, weather conditions, and other relevant data
- Responsive design for mobile and desktop

## Technologies Used

- Next.js
- React.js
- DaisyUI
- TailwindCSS
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MehhdiMarzban/weather-app-pwa.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Application

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env.local` file in the root directory and add your API key:
    ```env
    NEXT_PUBLIC_API_KEY=your_api_key_here
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter the name of the city you want to search for in the input field.
2. Press the "Search" button.
3. View the current weather conditions for the specified city.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Next.js](https://nextjs.org/) for the awesome framework.
- [React](https://reactjs.org/) for the powerful UI library.
