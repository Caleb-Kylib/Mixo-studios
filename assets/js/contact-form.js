// Contact Form Handler
// Manages contact form submissions to Supabase 'inquiries' table

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.warn('⚠️ Contact form not found (ID: contactForm)');
        return;
    }

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Collect form values
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            message: document.getElementById('contactMessage').value.trim()
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            showAlert('error', '❌ Please fill in all required fields (Name, Email, Message)');
            return;
        }

        // Validate email format
        if (!isValidEmail(formData.email)) {
            showAlert('error', '❌ Please enter a valid email address');
            return;
        }

        // Disable submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Insert into Supabase
            const { data, error } = await supabaseClient
                .from('inquiries')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) {
                throw new Error(error.message);
            }

            // Success
            showAlert('success', '✅ Thank you! Your message has been sent. We\'ll be in touch within 24 hours.');
            contactForm.reset();

        } catch (error) {
            console.error('❌ Form submission error:', error);
            showAlert('error', `❌ Something went wrong: ${error.message}`);

        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
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
