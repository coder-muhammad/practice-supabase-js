import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://nitvvoupvafskuwgrvuv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdHZ2b3VwdmFmc2t1d2dydnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMTE0NTUsImV4cCI6MjA2OTc4NzQ1NX0.GwGhOo6ii0eBLSToRVENWRfQHelBbzGuAq-8DxgTW3s')