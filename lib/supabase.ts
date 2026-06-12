import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Guards — surface a clear error at runtime rather than a cryptic crash during build
const isMissingEnv = !SUPABASE_URL || !SUPABASE_ANON_KEY;

/** Browser / Client Component supabase client */
export const supabase = isMissingEnv
  ? (null as unknown as ReturnType<typeof createClient>)
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });

/** Server-side supabase client (no session persistence).
 *  Returns null when env vars are absent (e.g. during static build without .env.local).
 *  All callers in lib/blog.ts guard against null via try/catch or early return. */
export function createServerClient() {
  if (isMissingEnv) return null as unknown as ReturnType<typeof createClient>;
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
