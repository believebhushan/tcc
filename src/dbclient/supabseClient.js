import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hufsoatizqyomnqibtaq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1ZnNvYXRpenF5b21ucWlidGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTQ1MzUsImV4cCI6MTk5MTE5MDUzNX0.K9_b9pFXyRh3-rOeYaLkHXY5W7IvoTQDbPxF8FmeZic'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)