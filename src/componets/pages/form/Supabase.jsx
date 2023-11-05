import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ynnrtklospmwsctsrbuy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlubnJ0a2xvc3Btd3NjdHNyYnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDU2NTIsImV4cCI6MjAxNDU4MTY1Mn0.XzFvE2-nMzizMB2lOtffoxkHq55pYDp5qhhYQoVBxuw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;