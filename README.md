# Confiance Financial Platform

A comprehensive financial investment platform built with React and Spring Boot microservices.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**Server starts at:** http://localhost:5173

## 🔑 Demo Credentials

| Role        | Email                  | Password    |
|-------------|------------------------|-------------|
| Super Admin | admin@confiance.com    | Admin@123   |
| Admin       | admin2@confiance.com   | Admin@123   |
| User        | user@confiance.com     | User@123    |

## ✨ Features

- 🏦 **Portfolio Management** - Track and manage your investment portfolio
- 📊 **Real-time Analytics** - Live charts and performance metrics
- 💼 **Multi-role Access** - User, Admin, and Super Admin roles
- 🔐 **Secure Authentication** - JWT-based auth with auto-refresh
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful landing page with animations

## 📚 Complete Documentation

For detailed documentation including:
- Architecture overview
- API documentation
- Authentication & Authorization
- Component structure
- Deployment guide
- Troubleshooting

**👉 See [DOCUMENTATION.md](./DOCUMENTATION.md)**

## 🛠️ Tech Stack

**Frontend:**
- React 18.3.1 + Vite
- Bootstrap 5.3.3
- React Router v6
- React Query
- Axios
- Framer Motion
- React Hook Form + Zod

**Backend:**
- Spring Boot
- Spring Security
- JWT Authentication
- MySQL Database

## 📁 Project Structure

```
src/
├── components/         # Reusable components
├── context/           # React Context (Auth)
├── services/          # API services
├── utils/             # Utilities
├── Pages/             # Page components
│   ├── LandingPage/   # Public landing
│   ├── AuthPages/     # Login/Signup
│   └── Dashboard/     # Protected dashboards
├── Layout/            # Layout components
└── Route/             # Routing config
```

## 🔒 Environment Setup

Create `.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_APP_NAME=Confiance Financial Platform
VITE_ENABLE_LOGS=true
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For detailed help and troubleshooting, check [DOCUMENTATION.md](./DOCUMENTATION.md)

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ by Confiance Team**
# frontend
