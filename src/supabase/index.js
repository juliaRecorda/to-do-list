
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://alvwhjibfowrdofthdqt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdndoamliZm93cmRvZnRoZHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwOTA0MDksImV4cCI6MTk5NzY2NjQwOX0.uXzrdpqNPb_egy7SpA5SkFE6kolwGIdaQi1R2I1y648"
export default createClient(supabaseUrl, supabaseKey)