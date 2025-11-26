// Supabase Client Configuration
// Initialize Supabase connection with environment variables

const SUPABASE_CONFIG = {
    SUPABASE_URL: 'YOUR_SUPABASE_URL',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY'
};

// Initialize Supabase client
const { createClient } = window.supabase;

const supabaseClient = createClient(
    SUPABASE_CONFIG.SUPABASE_URL,
    SUPABASE_CONFIG.SUPABASE_ANON_KEY
);

console.log('✅ Supabase client initialized');
