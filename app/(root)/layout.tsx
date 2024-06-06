export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <main>
            Sidebar
            {children}
       </main>
    </html>
  );
}
