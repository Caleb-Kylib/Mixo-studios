# Mux Studio - Photography Website

A modern, visually immersive photography website built with HTML, CSS, and JavaScript. Features a clean, minimal design with elegant black, white, and gold color scheme.

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, minimal design with smooth animations
- **Complete Page Structure**: All required pages and sections implemented
- **Interactive Elements**: Gallery filters, lightbox, mobile navigation, accordion FAQs
- **Professional Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations

## 📁 Project Structure

```
Mux-studio/
├── index.html              # Homepage with all required sections
├── about.html              # About Us page
├── services.html           # Services page with detailed offerings
├── portfolio.html          # Portfolio/Gallery page
├── contact.html            # Contact page with form and map
├── pricing.html            # Pricing & Packages page
├── bookings.html           # Booking/Session request page
├── blog.html               # Blog page
├── client-login.html       # Client portal login
├── gift-cards.html         # Gift cards page
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Image assets directory
└── README.md
```

## 🏠 Homepage Sections

1. **Hero Banner** - Full-width banner with overlay text and CTAs
2. **About Preview** - Short about section with image
3. **Services** - 6 service cards (Weddings, Portraits, Events, Products, Family, Maternity)
4. **Packages** - Specialty package cards with pricing
5. **Gallery** - Filterable image gallery with categories
6. **Testimonials** - Client testimonials in grid layout
7. **FAQs** - Accordion-style FAQ section
8. **Contact CTA** - Quick contact form and details
9. **Footer** - Complete footer with links, newsletter, and social media

## 🧭 Navigation

The sticky navbar includes links to:
- Home
- About Us
- Services
- Portfolio
- Packages
- Gallery
- Testimonials
- FAQs
- Contact
- Blog
- Pricing
- Bookings
- Client Login
- Gift Cards

## 🎯 Key Features

### Interactive Elements
- **Gallery Filtering**: Filter gallery images by category
- **Lightbox**: Click gallery images to view in full-screen lightbox
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll to anchor links
- **Form Handling**: Contact and newsletter form submissions
- **Accordion FAQs**: Expandable FAQ sections

### Design Elements
- **Color Palette**: Black (#0a0a0a), White (#ffffff), Gold (#d4af37)
- **Typography**: Playfair Display (headings), Inter (body)
- **Animations**: Fade-in on scroll, hover effects, smooth transitions
- **Responsive**: Mobile-first approach with breakpoints at 768px and 480px

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in a web browser
2. **No build process required**: This is a static website, no compilation needed
3. **Customize images**: Replace Unsplash image URLs with your own photography
4. **Update content**: Edit HTML files to customize text, pricing, and contact information

## 📝 Customization

### Update Contact Information
Edit contact details in:
- `index.html` (contact section)
- `contact.html` (full contact page)
- Footer sections across all pages

### Replace Images
All images currently use Unsplash placeholders. Replace with:
- Your own photography
- High-resolution images (recommended: 1920px width for hero images, 600px for thumbnails)
- Update image URLs in HTML files

### Modify Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --color-black: #0a0a0a;
    --color-white: #ffffff;
    --color-gold: #d4af37;
    /* ... */
}
```

### Update Pricing
Edit pricing information in:
- `index.html` (packages section)
- `pricing.html` (detailed pricing page)
- `services.html` (service-specific pricing)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Notes

- **Minimal & Elegant**: Clean design focused on showcasing photography
- **Full-Width Layout**: Maximum use of screen space for visual impact
- **Smooth Animations**: Subtle, professional animations throughout
- **High-Quality Imagery**: Optimized for high-resolution displays
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## 📧 Forms

All forms currently show alert messages on submission. To make them functional:
1. Set up a backend service (e.g., Formspree, Netlify Forms, or custom API)
2. Update form `action` attributes in HTML files
3. Add form validation and error handling in `assets/js/main.js`

## 🔧 Future Enhancements

Potential additions:
- Backend integration for forms and bookings
- Client portal with actual authentication
- Blog CMS integration
- Online payment processing
- Calendar integration for bookings
- Image optimization and lazy loading
- SEO optimization

## 📄 License

This project is created for Mux Studio. Customize as needed for your photography business.

---

**Built with ❤️ for capturing moments that last forever**

