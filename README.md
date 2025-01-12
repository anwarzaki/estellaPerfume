# 🌸 Perfume E-commerce Website

A full-stack e-commerce platform specialized in perfume retail, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🔒 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- MongoDB Atlas account
- Email service account
- Cloudinary account
- Git

## 🚀 Quick Start

1. Clone the repository (**link removed for security**)

2. Setup environment variables:
   ```bash
   # Copy example env files in both directories
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

3. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```

## 🔐 Configuration

### Frontend `.env`
```env
VITE_API_URL=<backend_url>
```

⚠️ **Security Note**: Never commit `.env` files. They are already added to `.gitignore`.

## 🏗️ Project Structure

```
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── index.html
```

## 🛡️ Security Features

- JWT Authentication
- Password hashing with bcrypt
- Admin access protection
- Rate limiting
- CORS protection
- Email verification
- Secure password reset flow

## 🔥 Features

### Admin Panel
- Product management
- Order tracking
- User management
- Analytics dashboard

### User Features
- Browse perfumes
- Advanced search
- Shopping cart
- Order history
- Reviews & ratings
- Wishlist

### Authentication
- User registration
- Secure login
- Password recovery
- Email verification

## 🚫 Security Guidelines

1. Access Control:
   - Admin credentials should never be shared
   - Rotate SUPERKEY periodically
   - Monitor failed login attempts

2. API Security:
   - Use HTTPS in production
   - Implement rate limiting
   - Validate all inputs

3. Database Security:
   - Regular backups
   - Sanitize inputs
   - Use parameterized queries

4. Environment Variables:
   - Different keys for development/production
   - Regular rotation of API keys
   - Monitor service usage

## 🛠️ Development

```bash
# Start backend (development)
cd backend
npm run dev

# Start frontend (development)
cd frontend
npm run dev
```

## 📝 Important Notes

1. Database:
   - Backup frequently
   - Monitor connection pool
   - Check indexes regularly

2. API:
   - Document all endpoints
   - Version control API changes
   - Monitor rate limits

3. Authentication:
   - Regular token cleanup
   - Monitor failed attempts
   - Log suspicious activities

## 🔄 Updates & Maintenance

1. Regular Tasks:
   - Update dependencies
   - Check security advisories
   - Monitor error logs
   - Backup database
   - Rotate credentials

2. Monitoring:
   - Server health
   - API response times
   - Authentication attempts
   - Resource usage

## 📞 Support

For security concerns, contact: [CONTACT_EMAIL]
For general inquiries: [SUPPORT_EMAIL]

*Note: Replace placeholders in brackets with actual values before deployment.*
