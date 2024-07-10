# Weather Dashboard

This Weather Dashboard application allows users to search for cities and view current weather information, a 7-day forecast, and temperature trends. The app is built using React with TypeScript, and styled with Material-UI and Tailwind CSS. For data visualization, Recharts is used to display temperature trends.

## Features

1. **User Preferences**: Store user preferences, such as favorite cities, in the user profile.
2. **Search Functionality**:
   - Search bar allowing users to search for different cities.
   - Fetch weather data for the searched city using the Weather API.
   - Display a list of search suggestions as the user types.
3. **Display Current Weather**:
   - Display the current weather information for the selected city, including temperature, humidity, wind speed, and weather conditions.
   - Use Material-UI components like Card and Typography for styling.
4. **7-Day Forecast**:
   - Display a 7-day weather forecast for the selected city, including daily temperatures, weather conditions, and precipitation.
   - Use Material-UI components and icons to enhance the visual representation.
5. **Data Visualization**:
   - Implement charts to display temperature trends over the next 7 days.
   - Use Recharts for visualization, displaying line charts or bar charts to represent temperature changes.
6. **Responsive Design**:
   - Ensure the application is fully responsive and works well on various screen sizes, including mobile devices.
   - Use Material-UI’s grid system and responsive utilities to achieve a mobile-friendly layout.
7. **Error Handling**:
   - Handle errors gracefully, displaying appropriate messages when weather data cannot be fetched.
 
8. **Optional Features**:
   - Allow users to save their favorite cities and quickly access weather information for those cities.
   - Display weather alerts or notifications.
   - Provide localization support to display weather information in different languages.

# Tech Stack

- **React**: Frontend framework.
- **TypeScript**: Typed JavaScript for better code quality and maintainability.
- **Material-UI**: UI component library for styling.
- **Tailwind CSS**: Utility-first CSS framework for additional styling.
- **Recharts**: Chart library for data visualization.
- **Vite**: Build tool for faster and leaner development experience.

# Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
# Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add your Weather API key:
makefile
Copy code
REACT_APP_WEATHER_API_KEY=your_api_key
Start the development server:

bash
Copy code
npm run dev
Usage
Use the search bar to find cities and view their weather information.
View current weather details and a 7-day forecast for the selected city.
Visualize temperature trends with interactive charts.
Save favorite cities for quick access.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin feature-name.
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
OpenWeatherMap for the weather API.
Material-UI for the UI components.
Tailwind CSS for additional styling.
Recharts for data visualization.
Vite for the build tool.
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Demo

Insert gif or link to demo

