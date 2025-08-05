# Restaurant Review Platform

A modern Ruby on Rails web application for discovering, reviewing, and managing restaurant information. This platform allows users to browse restaurants, view detailed information, and share their dining experiences through comments and reviews.

## 🚀 Features

- **Restaurant Management**: Browse and view detailed restaurant information including descriptions, locations, and images
- **Review System**: Users can leave comments and reviews for restaurants
- **Image Gallery**: Support for multiple images per restaurant
- **Responsive Design**: Modern web interface built with Rails and Webpacker
- **Database-Driven**: PostgreSQL backend for reliable data storage

## 🛠 Tech Stack

- **Backend**: Ruby 3.0.0, Rails 6.1.3
- **Database**: PostgreSQL
- **Frontend**: HTML, SCSS, JavaScript (ES6+)
- **Build Tools**: Webpacker 5.0
- **Server**: Puma
- **Styling**: Sass/SCSS

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Ruby 3.0.0
- Rails 6.1.3+
- PostgreSQL
- Node.js and Yarn (for Webpacker)
- Bundler gem

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-review-platform
   ```

2. **Install dependencies**
   ```bash
   bundle install
   yarn install
   ```

3. **Database setup**
   
   Create the PostgreSQL user (if needed):
   ```sql
   CREATE ROLE gpaulo00 WITH CREATEDB LOGIN;
   ```
   
   Then setup the database:
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

4. **Start the development server**
   ```bash
   rails server
   ```

   The application will be available at `http://localhost:3000`

## 📊 Database Schema

The application uses three main models:

### Restaurant
- `name` (string, required): Restaurant name
- `description` (text, required): Detailed description
- `direction` (text, required): Restaurant address/location
- `image` (string, required): Main restaurant image URL

### Comment
- `name` (string, required): Reviewer name
- `comment` (text, required): Review content
- `restaurant_id` (foreign key): Associated restaurant

### Image
- `path` (string, required): Image file path
- `restaurant_id` (foreign key): Associated restaurant

## 🚀 Usage

1. **Browse Restaurants**: View the list of available restaurants on the homepage
2. **Restaurant Details**: Click on any restaurant to view detailed information
3. **Leave Reviews**: Add comments and reviews for restaurants you've visited
4. **View Images**: Browse through restaurant image galleries

## 🧪 Testing

Run the test suite with:
```bash
rails test
```

## 📁 Project Structure

```
app/
├── controllers/     # Application controllers
├── models/         # ActiveRecord models (Restaurant, Comment, Image)
├── views/          # ERB templates
├── helpers/        # View helpers
├── assets/         # Stylesheets and images
└── javascript/     # JavaScript modules and components

config/             # Application configuration
db/                # Database migrations and schema
```

## 🔒 Environment Configuration

The application supports different environments:
- **Development**: Local development with debugging enabled
- **Test**: Testing environment with test database
- **Production**: Optimized for deployment

## 📝 API Endpoints

The application includes API controller structure for potential REST API expansion:
- `GET /` - Homepage with restaurant listings
- Restaurant CRUD operations (expandable)
- Comment management (expandable)

## 🚀 Deployment

This application is ready for deployment on platforms like:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

Make sure to:
1. Set up environment variables for database credentials
2. Precompile assets: `rails assets:precompile`
3. Run migrations: `rails db:migrate`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is available as open source under the terms of the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using Ruby on Rails

---

*This project demonstrates proficiency in Ruby on Rails development, database design, and modern web application architecture.*