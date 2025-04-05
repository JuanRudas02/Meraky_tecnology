export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // solo retorna los children, sin <html> ni <body>
}
