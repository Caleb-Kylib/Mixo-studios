# 🚀 Supabase Integration - Quick Reference

## ✅ What Was Set Up

Your Mixo Studios website now has complete Supabase integration with:

- **Contact Form** → Saves to `inquiries` table
- **Booking Form** → Saves to `bookings` table
- **Form Validation** → Email validation, required fields
- **Success/Error Alerts** → User-friendly feedback messages
- **Responsive Design** → Works on all devices

---

## 📁 New Files Created

```
assets/js/
├── supabaseClient.js      ← Supabase configuration & initialization
├── contact-form.js        ← Contact form submission handler
└── booking-form.js        ← Booking form submission handler

SUPABASE_SETUP.md           ← Complete setup guide
QUICK_START.md              ← This file
```

---

## 🔧 Quick Setup (3 Steps)

### Step 1: Create Supabase Project
1. Go to https://supabase.com and sign up (free)
2. Create a new project
3. Copy your **Project URL** and **Anon Key** from Settings → API

### Step 2: Create Database Tables
In Supabase Dashboard → SQL Editor, run these queries:

**Query 1 - Contact Form Table:**
```sql
CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Query 2 - Booking Form Table:**
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

### Step 3: Add Your Credentials
Edit `assets/js/supabaseClient.js`:

```javascript
const SUPABASE_CONFIG = {
    SUPABASE_URL: 'https://your-project.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

**That's it!** Your forms are now live. 🎉

---

## 🧪 How to Test

### Test Contact Form:
1. Open `contact.html` in your browser
2. Scroll to "Send us a message" section
3. Fill in: Name, Email, Message
4. Click "Send Message"
5. You should see: ✅ Green success message

### Test Booking Form:
1. Scroll to "Book Your Session" section
2. Fill in: Name, Email, Service Type, Date
3. Click "Check Availability"
4. You should see: ✅ Green success message

### Verify Data in Supabase:
1. Log in to Supabase Dashboard
2. Go to Table Editor
3. Click `inquiries` or `bookings` table
4. See your form submissions with timestamp

---

## 📋 Form Field IDs (For Developers)

### Contact Form - `id="contactForm"`
```
contactName       → Name input
contactEmail      → Email input
contactPhone      → Phone input (optional)
contactSubject    → Subject input (optional)
contactMessage    → Message textarea (required)
```

### Booking Form - `id="bookingForm"`
```
bookingFirstName  → Client name
bookingEmail      → Email
bookingPhone      → Phone (optional)
bookingService    → Service type select
bookingDate       → Preferred date
bookingTime       → Preferred time (optional)
bookingLocation   → Location (optional)
bookingGuests     → Number of guests (optional)
bookingDetails    → Additional details (optional)
```

---

## 🔐 Security Tips

1. **Never share your credentials** - Keep Anon Key private
2. **Use environment variables** in production (not in code)
3. **Enable RLS** on tables if needed (Supabase Dashboard → Authentication)
4. **Add CAPTCHA** to forms for production (reCAPTCHA recommended)

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Supabase not defined" | Check script order: library first, then client |
| Form doesn't submit | Check browser console (F12) for errors |
| Data not in Supabase | Verify credentials in supabaseClient.js |
| CORS error | Check Supabase Settings → API → Access Control |
| Button stays disabled | Check console for JavaScript errors |

---

## 💡 What Happens When Form Submitted

1. User fills form → clicks submit
2. JavaScript validates required fields
3. Email format is checked
4. Data sent to Supabase
5. If success → Green alert + form cleared
6. If error → Red alert with error message
7. Automatically removes alert after 5 seconds

---

## 📊 Viewing Your Data

**In Supabase Dashboard:**
- Table Editor → Select table → View all submissions
- Click any row to see full details
- Export as CSV: Click ⋮ → Export → Download

**Data Columns:**

**inquiries table:**
- `id` - Auto-generated row number
- `name` - Customer name
- `email` - Customer email
- `message` - Their message
- `created_at` - When submitted

**bookings table:**
- `id` - Auto-generated row number
- `client_name` - Client name
- `email` - Client email
- `phone` - Client phone
- `session_type` - Type of photography
- `preferred_date` - Booking date
- `preferred_time` - Booking time
- `message` - Special requests
- `created_at` - When booked

---

## 📧 Next Steps (Optional Enhancements)

1. **Send confirmation emails** - Add EmailJS for auto-responses
2. **Slack notifications** - Get alerts when bookings arrive
3. **Admin dashboard** - Build a page to manage bookings
4. **Payment integration** - Accept deposits via Stripe
5. **Calendar sync** - Sync bookings to Google Calendar

---

## 📚 Useful Links

- Supabase Docs: https://supabase.com/docs
- JavaScript Client: https://supabase.com/docs/reference/javascript
- REST API: https://supabase.com/docs/reference/api
- Community: https://supabase.com/discord

---

## ❓ Need Help?

- Check `SUPABASE_SETUP.md` for detailed instructions
- Review browser console for error messages
- Test with dummy data first
- Verify all IDs match between HTML and JS files

---

**Your website is now ready to collect inquiries and bookings!** 🎥✨
