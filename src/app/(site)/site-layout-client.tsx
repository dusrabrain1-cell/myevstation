"use client";

/**
 * The global SiteShell in the root layout owns the shared header and footer.
 * Keep this route-group wrapper transparent to prevent duplicate site chrome.
 */
export default function SiteLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
