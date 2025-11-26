// Booking Form Handler
// Manages booking form submissions to Supabase 'bookings' table

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    
    if (!bookingForm) {
        console.warn('⚠️ Booking form not found (ID: bookingForm)');
        return;
    }

    bookingForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Collect form values
        const formData = {
            client_name: document.getElementById('bookingFirstName').value.trim(),
            email: document.getElementById('bookingEmail').value.trim(),
            phone: document.getElementById('bookingPhone').value.trim(),
            session_type: document.getElementById('bookingService').value.trim(),
            preferred_date: document.getElementById('bookingDate').value.trim(),
            preferred_time: document.getElementById('bookingTime').value.trim(),
            message: document.getElementById('bookingDetails').value.trim()
        };

        // Validate required fields
        if (!formData.client_name || !formData.email || !formData.session_type || !formData.preferred_date) {
            showAlert('error', '❌ Please fill in all required fields (Name, Email, Service Type, Date)');
            return;
        }

        // Validate email format
        if (!isValidEmail(formData.email)) {
            showAlert('error', '❌ Please enter a valid email address');
            return;
        }

        // Disable submit button
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Checking Availability...';

        try {
            // Insert into Supabase
            const { data, error } = await supabaseClient
                .from('bookings')
                .insert([
                    {
                        client_name: formData.client_name,
                        email: formData.email,
                        phone: formData.phone,
                        session_type: formData.session_type,
                        preferred_date: formData.preferred_date,
                        preferred_time: formData.preferred_time,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) {
                throw new Error(error.message);
            }

            // Success
            showAlert('success', '✅ Booking request submitted! We\'ll confirm your session within 24 hours.');
            bookingForm.reset();

        } catch (error) {
            console.error('❌ Booking submission error:', error);
            showAlert('error', `❌ Something went wrong: ${error.message}`);

        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Check Availability';
        }
    });
});

// Utility: Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility: Show alert messages
function showAlert(type, message) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `form-alert form-alert--${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 6px;
        font-size: 14px;
        animation: slideDown 0.3s ease-out;
    `;

    // Insert before form
    const form = document.getElementById('contactForm') || document.getElementById('bookingForm');
    if (form) {
        form.parentNode.insertBefore(alert, form);
    }

    // Auto-remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}
