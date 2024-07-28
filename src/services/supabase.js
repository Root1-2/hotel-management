import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tfaazsaeohlqgomjxkfc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmYWF6c2Flb2hscWdvbWp4a2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNTU5NTIsImV4cCI6MjAzNzczMTk1Mn0.AW0VNwVmtn81NCZlvdW2T7JNYm3ic6PelqCy3Qol8O8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
