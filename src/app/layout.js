import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QR Code Generator",
  description: "Free online QR code generator with multiple formats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        {/* Background gradient animation */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x opacity-20"></div>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
