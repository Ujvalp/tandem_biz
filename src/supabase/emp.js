import { createClient } from "@supabase/supabase-js";



const projectURL = import.meta.env.VITE_SUPABASE_PROJECT_URL_Emp;
const projectKey = import.meta.env.VITE_SUPABASE_PROJECT_KEY_Emp;

export const supabaseEmp = createClient(projectURL, projectKey);
