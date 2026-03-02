// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://njzqcxdgtlcuoaytynwh.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_-qvgvL2QJHEe5Q0w-js8ZQ_iCpoM0FE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
