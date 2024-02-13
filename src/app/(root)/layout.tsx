import { Navbar } from "./_components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-indigo-950 pb-20 ">
      <Navbar />
      <div className="container flex flex-col gap-20">{children}</div>
    </main>
  );
}
