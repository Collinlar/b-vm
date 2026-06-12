'use client';

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Zap, LayoutDashboard, FileText, LogOut, Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAdmin, loading, signOut } = useAuth();

  const isLoginPage = pathname === "/admin";

  useEffect(() => {
    if (!isLoginPage && !loading && (!user || !isAdmin)) {
      router.replace("/admin");
    }
  }, [user, isAdmin, loading, router, isLoginPage]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin");
  };

  // Login page: pass through directly, let the page component manage its own loading state
  if (isLoginPage) return <>{children}</>;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-64 border-r border-border bg-card fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">The BVM Pulse</p>
              <p className="text-xs text-muted-foreground">Admin Portal</p>
            </div>
          </Link>
          <nav className="space-y-2">
            <Link href="/admin/dashboard">
              <Button
                variant={pathname === "/admin/dashboard" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/posts">
              <Button
                variant={pathname.startsWith("/admin/posts") ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <FileText className="w-4 h-4" />
                All Posts
              </Button>
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
          <Button variant="outline" size="sm" className="w-full gap-2" onClick={handleSignOut}>
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </aside>
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
