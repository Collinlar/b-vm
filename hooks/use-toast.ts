'use client';

// Minimal stub — this project uses Sonner for toasts (components/ui/sonner.tsx).
// This file exists only to satisfy component imports; use `import { toast } from "sonner"` in your code.

import { toast } from "sonner";

export function useToast() {
  return {
    toast,
    toasts: [] as never[],
    dismiss: (_toastId?: string) => {},
  };
}

export { toast };
