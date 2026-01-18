-- Migration: Add members_paid column to expenses table
-- Run this SQL if you have an existing database without the members_paid column
-- This tracks which members have paid their share: { "member_uuid": true/false }

-- Add the column if it doesn't exist
ALTER TABLE expenses ADD COLUMN IF NOT EXISTS members_paid JSONB DEFAULT '{}';

-- Update any existing rows to have an empty object instead of NULL
UPDATE expenses SET members_paid = '{}' WHERE members_paid IS NULL;

-- Optional: Add a comment to document the column
COMMENT ON COLUMN expenses.members_paid IS 'JSONB object tracking which members have paid their share: {"member_id": true/false}';
