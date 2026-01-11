# SubsTracker Backend API

A robust REST API for managing and tracking subscription services. Built with Node.js, Express, and MongoDB, featuring JWT authentication, automated renewal reminders, and workflow management with Upstash QStash.

## Features

- **Authentication & Authorization** - JWT-based user authentication with secure password hashing
- **Subscription Management** - Track subscriptions with details like price, frequency, category, and payment method -**Automated Workflows** - Renewal reminders and notifications via email using Upstash QStash -**Security** - Rate limiting and bot protection with Arcjet
- **Subscription Analytics** - Monitor active, inactive, and cancelled subscriptions
- **Email Notifications** - Automated email alerts for upcoming renewals

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt/bcryptjs
- **Email**: Nodemailer
- **Workflow Engine**: Upstash QStash & Workflow
- **Security**: Arcjet (rate limiting, bot protection)
- **Development**: Nodemon, ESLint

## Project Structure

```
Backend_SubsTracker/
├── app.js                  # Application entry point
├── config/                 # Configuration files
│   └── env.js             # Environment variables
├── controllers/           # Request handlers
│   ├── auth.controllers.js
│   ├── subscriptions.controllers.js
│   ├── user.controllers.js
│   └── workflow.controllers.js
├── database/              # Database connection
│   └── mongodb.js
├── middleware/            # Express middleware
│   ├── auth.middleware.js
│   ├── arcjet.middleware.js
│   └── error.middleware.js
├── models/                # Mongoose schemas
│   ├── subscription.models.js
│   └── user.models.js
├── routes/                # API route definitions
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   ├── user.routes.js
│   └── workflow.routes.js
└── utils/                 # Utility functions
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Backend_SubsTracker
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.development.local` file in the root directory:

```env
PORT=3000
NODE_ENV=development
CONN_URI=mongodb://localhost:27017/substrack
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your_qstash_token
SERVER_URL=http://localhost:3000
EMAIL_PASSWORD=your_email_app_password
```

4. Start the development server:

```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/sign-up` - Register a new user
- `POST /api/v1/auth/sign-in` - Login user
- `GET /api/v1/auth/sign-out` - Logout user

### Users

- `GET /api/v1/users` - Get all users (protected)
- `GET /api/v1/users/:id` - Get user by ID (protected)
- `PUT /api/v1/users/:id` - Update user (protected)
- `DELETE /api/v1/users/:id` - Delete user (protected)

### Subscriptions

- `POST /api/v1/subscriptions` - Create a new subscription (protected)
- `GET /api/v1/subscriptions` - Get all subscriptions for logged-in user (protected)
- `GET /api/v1/subscriptions/:id` - Get subscription by ID (protected)
- `PUT /api/v1/subscriptions/:id` - Update subscription (protected)
- `DELETE /api/v1/subscriptions/:id` - Delete subscription (protected)

### Workflows

- `POST /api/v1/workflows` - Trigger workflow for renewal reminders (protected)

## Subscription Model

Subscriptions include the following properties:

- **name**: Subscription service name (3-50 characters)
- **price**: Cost per billing cycle (positive number)
- **currency**: USD, EUR, GBP, or INR
- **frequency**: daily, weekly, monthly, or yearly
- **category**: sports, entertainment, news, education, lifestyle, technology, or other
- **paymentMethod**: Payment method used
- **status**: active, inactive, or cancelled
- **startDate**: Subscription start date
- **renewalDate**: Next renewal date (auto-calculated if not provided)
- **user**: Reference to the user who owns the subscription

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- HTTP-only cookies for token storage
- Input validation and sanitization
- Error handling middleware
- Rate limiting (Arcjet integration ready)

## Development

The project uses ES Modules (`"type": "module"`) and includes:

- ESLint for code quality
- Nodemon for automatic server restart
- Morgan for HTTP request logging
- Cookie parser for handling authentication cookies

## License

Private project

## Author

Ayush Amin
