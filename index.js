import { createClient } from '@supabase/supabase-js';
// const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://nitvvoupvafskuwgrvuv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdHZ2b3VwdmFmc2t1d2dydnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMTE0NTUsImV4cCI6MjA2OTc4NzQ1NX0.GwGhOo6ii0eBLSToRVENWRfQHelBbzGuAq-8DxgTW3s');

const { data, error } = await supabase
  .from('characters')
  .select()
console.log('Data:', data);
console.log('Error:', error);


const {error1} = await supabase
  .from('countries')
  .insert({id: 1, name: 'Mordor'})

console.log('Insert Error:', error1);