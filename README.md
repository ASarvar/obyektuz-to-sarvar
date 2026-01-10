# Obyekt.uz

A modern corporate website built with React for managing and displaying information about company services, news, departments, and regional offices.

## Features

- 🌐 **Multilingual Support**: Russian and Uzbek language support using i18next
- 📝 **Content Management**: Rich text editor integration (CKEditor and Editor.js)
- 📰 **News Management**: Dynamic news articles with single page views
- 🏢 **Company Information**: About, Administration, Departments, Structure pages
- 📍 **Regional Offices**: Regional office information and management
- 🔍 **Open Data**: Transparent data visualization and quarterly reports
- 📊 **Analytics Integration**: Yandex Metrika for traffic analysis
- 📱 **Responsive Design**: Mobile-friendly interface
- ⚙️ **Admin Panel**: Content management system for authorized users

## Tech Stack

- **Frontend**: React 17
- **Routing**: React Router DOM v5
- **Styling**: SASS, Bootstrap 5, CSS Modules
- **State Management**: Context API
- **Rich Text Editors**: 
  - CKEditor 5
  - Editor.js with multiple plugins
- **Internationalization**: i18next, react-i18next
- **HTTP Client**: Axios
- **Charts**: Chart.js, react-chartjs-2
- **Icons**: React Icons, Font Awesome
- **Analytics**: React Yandex Metrika, React GA
- **Image Optimization**: React Lazy Load Image Component
- **Carousel**: Swiper

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd obyektuz-to-sarvar
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with necessary environment variables

## Available Scripts

### `npm start`

Runs the app in development mode on port 3008.\
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

The page will reload when you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── About/
│   ├── Administration/
│   ├── Departments/
│   ├── News/
│   ├── Header/
│   ├── Footer/
│   └── ...
├── context/         # Context API for state management
├── Pages/           # Page components
└── i18next.js       # Internationalization configuration
```

## Key Components

- **Header/Footer**: Navigation and site footer
- **Home**: Landing page with carousel and featured content
- **News**: News listing and single article pages
- **Administration**: Company administration information
- **Departments**: Department structure and information
- **Regionals**: Regional office locations and details
- **Open Data**: Quarterly reports and transparent data
- **Services**: Company services overview
- **Contacts**: Contact information and forms

## Internationalization

The application supports two languages:
- Russian (ru)
- Uzbek (uz)

Translation files are located in `public/locales/{language}/translation.json`

## API Integration

The application connects to a backend API via proxy configuration:
```
https://obyekt.herokuapp.com/
```

## Browser Support

- Production: Modern browsers (>0.2% usage, not dead)
- Development: Latest Chrome, Firefox, and Safari versions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For more information, visit [obyekt.uz](https://obyekt.uz)
