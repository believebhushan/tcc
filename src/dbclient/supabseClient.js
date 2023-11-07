import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ifuolegtaokvhdrzabfq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdW9sZWd0YW9rdmhkcnphYmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzOTk2NDQsImV4cCI6MTk4Nzk3NTY0NH0.YhjKI6AyjvM6Y29EXBCmcYPlCV0mq9Ah_CaMuvQRua4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
