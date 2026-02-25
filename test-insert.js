import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udfvvlkyqlzowtpjyaul.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZnZ2bGt5cWx6b3d0cGp5YXVsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY2NjgxMywiZXhwIjoyMDg3MjQyODEzfQ.k_OgzNU_4lW7as1OkuUgHVdIJkbLiezqwI9mb6xgr_0';

const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

async function main() {
    const { data, error } = await supabaseAdmin
        .from('referrals')
        .insert({
            referrer_name: 'Test Referrer',
            referrer_email: 'test@example.com',
            referrer_phone: '07123456789',
            referrer_organization: 'Test Authority',
            referrer_role: 'Quick Referral',
            yp_first_name: 'Pending',
            yp_last_name: 'Pending',
            yp_dob: '2010-01-01',
            placement_type: 'Supported Accommodation',
            funding_authority: 'Test Authority',
            funding_agreed: false,
            expected_start_date: new Date().toISOString().split('T')[0],
            additional_info: 'This is a test insertion from the local debugging script to verify Supabase connections.',
            status: 'new'
        }).select();

    if (error) {
        console.error("Supabase Error:", error);
    } else {
        console.log("Successfully inserted test referral:", data);
    }
}

main();
