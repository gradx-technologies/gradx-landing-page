-- Run this once in Neon SQL Editor if you prefer to create the table manually.
-- The application also safely creates it on its first successful submission.

CREATE TABLE IF NOT EXISTS contact_leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  organization VARCHAR(160) NOT NULL,
  email VARCHAR(254) NOT NULL,
  audience VARCHAR(20) NOT NULL CHECK (audience IN ('College', 'Employer', 'Other')),
  message TEXT NOT NULL DEFAULT '',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS contact_leads_submitted_at_idx
  ON contact_leads (submitted_at DESC);
