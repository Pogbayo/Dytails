import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { AdminDataProvider } from "@/context/AdminDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dytails Investment",
  description: "Dytails Investment",
  icons: {
    icon: "/plainlogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll scrollbar-hide`}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <AuthProvider>
          <Navbar />
          <AdminDataProvider>{children}</AdminDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
