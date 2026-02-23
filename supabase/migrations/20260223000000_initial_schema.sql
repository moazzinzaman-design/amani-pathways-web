-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. Contact Messages Table
-- ==========================================
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    phone TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) for contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Only authenticated admins (Service Role) can view all messages
CREATE POLICY "Service role can perform all actions on contact_messages"
    ON contact_messages
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- ==========================================
-- 2. Referrals Table
-- ==========================================
CREATE TABLE referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Step 1: Referrer Details
    referrer_name TEXT NOT NULL,
    referrer_email TEXT NOT NULL,
    referrer_phone TEXT NOT NULL,
    referrer_organization TEXT NOT NULL,
    referrer_role TEXT NOT NULL,
    
    -- Step 2: Young Person Details
    yp_first_name TEXT NOT NULL,
    yp_last_name TEXT NOT NULL,
    yp_dob DATE NOT NULL,
    yp_gender TEXT,
    yp_ethnicity TEXT,
    yp_nationality TEXT,
    yp_immigration_status TEXT,
    yp_language TEXT,
    yp_interpreter_needed BOOLEAN DEFAULT false,
    
    -- Step 3: Placement Details
    placement_type TEXT NOT NULL,
    funding_authority TEXT NOT NULL,
    funding_agreed BOOLEAN DEFAULT false,
    expected_start_date DATE NOT NULL,
    expected_duration TEXT,
    
    -- Step 4: Needs & Risks (Stored as JSONB for flexibility)
    needs_and_risks JSONB NOT NULL DEFAULT '{}'::jsonb,
    
    -- Step 5: Additional Info
    additional_info TEXT,
    
    -- System fields
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'under_review', 'accepted', 'declined')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) for referrals
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Only authenticated admins (Service Role) can view all referrals
CREATE POLICY "Service role can perform all actions on referrals"
    ON referrals
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Function to auto-update 'updated_at' column
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_referrals_modtime
    BEFORE UPDATE ON referrals
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();
