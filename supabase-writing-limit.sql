-- Add writing tests counter to profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS writing_tests_used_this_month integer DEFAULT 0;

-- Update increment_tests_used: only increments for FREE users (reading limit)
CREATE OR REPLACE FUNCTION increment_tests_used(uid uuid)
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET tests_used_this_month = tests_used_this_month + 1
  WHERE id = uid AND plan = 'free';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- New function: increments writing counter for BASIC users only
CREATE OR REPLACE FUNCTION increment_writing_tests_used(uid uuid)
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET writing_tests_used_this_month = writing_tests_used_this_month + 1
  WHERE id = uid AND plan = 'basic';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update monthly cron reset to also reset writing counter
CREATE OR REPLACE FUNCTION reset_monthly_tests()
RETURNS void AS $$
BEGIN
  UPDATE profiles SET
    tests_used_this_month = 0,
    writing_tests_used_this_month = 0;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
