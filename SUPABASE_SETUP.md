# Supabase Integration Setup Guide

## 📋 Prerequisites
- Supabase account (sign up at https://supabase.com)
- Your Supabase project URL
- Your Supabase anonymous key

---

## 🔧 Step 1: Create Supabase Tables

### Table 1: `inquiries` (Contact Form)
```sql
CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Table 2: `bookings` (Booking Form)
```sql
CREATE TABLE bookings (
  id BIGSERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  session_type VARCHAR(100) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**How to create tables:**
1. Log in to Supabase Dashboard
2. Go to "SQL Editor"
3. Click "New Query"
4. Copy and paste each SQL query above
5. Click "Run"

---

## 🔐 Step 2: Get Your Supabase Credentials

1. Go to **Settings → API** in your Supabase Dashboard
2. Copy:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon Public Key** (long string starting with `eyJh...`)

---

## 📝 Step 3: Update `supabaseClient.js`

Open `/assets/js/supabaseClient.js` and replace:

```javascript
const SUPABASE_CONFIG = {
    SUPABASE_URL: 'YOUR_SUPABASE_URL',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY'
};
```

With your actual credentials:

```javascript
const SUPABASE_CONFIG = {
    SUPABASE_URL: 'https://your-project.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

---

## 🔗 Step 4: Update HTML Files

### For `contact.html` - Add Script Tags

In the `<head>` section, add Supabase library:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```

Before closing `</body>` tag, add:
```html
<script defer src="assets/js/supabaseClient.js"></script>
<script defer src="assets/js/contact-form.js"></script>
```

### Update Contact Form IDs

Ensure your contact form has these IDs:
```html
<form id="contactForm">
    <label>
        Name
        <input type="text" id="contactName" placeholder="Your Name" required />
    </label>
    <label>
        Email
        <input type="email" id="contactEmail" placeholder="name@email.com" required />
    </label>
    <label>
        Message
        <textarea id="contactMessage" placeholder="Your message"></textarea>
    </label>
    <button type="submit" class="btn primary">Send Message</button>
</form>
```

---

### For `contact.html` - Booking Form

In the `<head>` section, add:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```

Before closing `</body>` tag, add:
```html
<script defer src="assets/js/supabaseClient.js"></script>
<script defer src="assets/js/booking-form.js"></script>
```

### Update Booking Form IDs

Ensure your booking form has these IDs:
```html
<form id="bookingForm">
    <label>
        First Name
        <input type="text" id="bookingFirstName" placeholder="First Name" required />
    </label>
    <label>
        Email
        <input type="email" id="bookingEmail" placeholder="name@email.com" required />
    </label>
    <label>
        Phone
        <input type="tel" id="bookingPhone" placeholder="(123) 456-7890" />
    </label>
    <label>
        Service Type
        <select id="bookingService" required>
            <option value="">Select a service...</option>
            <option value="wedding">Wedding Photography</option>
            <option value="portrait">Portrait & Headshots</option>
            <option value="event">Event Photography</option>
            <option value="product">Product Photography</option>
            <option value="family">Family & Lifestyle</option>
            <option value="maternity">Maternity & Newborn</option>
        </select>
    </label>
    <label>
        Preferred Date
        <input type="date" id="bookingDate" required />
    </label>
    <label>
        Preferred Time
        <input type="time" id="bookingTime" />
    </label>
    <label>
        Additional Details
        <textarea id="bookingDetails" placeholder="Tell us about your vision..."></textarea>
    </label>
    <button type="submit" class="btn primary">Check Availability</button>
</form>
```

---

## 🎨 Step 5: Add Alert Styling (Optional)

Add this to `assets/css/styles.css`:

```css
/* Form Alerts */
.form-alert {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    border-left: 4px solid;
}

.form-alert--success {
    background-color: #ecfdf5;
    color: #065f46;
    border-left-color: #10b981;
}

.form-alert--error {
    background-color: #fef2f2;
    color: #7f1d1d;
    border-left-color: #ef4444;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## ✅ Step 6: Test the Forms

### Test Contact Form:
1. Open `contact.html` in browser
2. Fill in the "Send us a message" form
3. Click "Send Message"
4. Should see: ✅ "Thank you! Your message has been sent..."
5. Go to Supabase Dashboard → `inquiries` table
6. Verify the data was inserted

### Test Booking Form:
1. Scroll to "Book Your Session" form
2. Fill in all required fields
3. Click "Check Availability"
4. Should see: ✅ "Booking request submitted!..."
5. Go to Supabase Dashboard → `bookings` table
6. Verify the booking was recorded

---

## 🐛 Troubleshooting

### Form doesn't submit?
- Check browser console (F12 → Console)
- Verify form IDs match: `contactForm`, `bookingForm`
- Ensure input IDs match: `contactName`, `contactEmail`, etc.

### "Supabase not defined" error?
- Check that `supabaseClient.js` loads AFTER Supabase library
- Verify script order in HTML: library → client → form handler

### Data not appearing in Supabase?
- Check table names: `inquiries` and `bookings`
- Verify credentials in `supabaseClient.js`
- Check Supabase Dashboard → Authentication → Policies (ensure anon access is allowed)

### CORS errors?
- Go to Supabase Dashboard → Settings → API
- Check "Access Control" and allow your domain

---

## 📊 Viewing Submissions in Supabase

1. Log in to Supabase Dashboard
2. Click "Table Editor" in left sidebar
3. Select `inquiries` or `bookings` table
4. View all submissions with timestamps
5. Export data as CSV if needed (click ⋮ → Export)

---

## 🔒 Security Notes

- **Never commit credentials to GitHub** - Use environment variables in production
- **Enable RLS (Row Level Security)** if needed:
  - Supabase Dashboard → Authentication → Policies
  - Restrict table access by user roles
- **Enable CAPTCHA** for production (optional)

---

## 📚 File Summary

| File | Purpose |
|------|---------|
| `supabaseClient.js` | Initialize Supabase connection |
| `contact-form.js` | Handle contact form submissions |
| `booking-form.js` | Handle booking form submissions |
| `contact.html` | Updated with form IDs & scripts |
| `styles.css` | Alert styling |

---

## ✨ You're All Set!

Your forms now save directly to Supabase. Users will see success/error messages, and you can manage all inquiries and bookings from your Supabase Dashboard.

Questions? Check the Supabase docs: https://supabase.com/docs
