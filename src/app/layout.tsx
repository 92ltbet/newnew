import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VenComic - Đọc truyện tranh online",
  description: "Đọc truyện tranh online miễn phí, cập nhật nhanh chóng và liên tục",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="text-xl font-bold">VenComic</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-pink-400">Trang chủ</a></li>
                <li><a href="/the-loai" className="hover:text-pink-400">Thể loại</a></li>
                <li><a href="/theo-doi" className="hover:text-pink-400">Theo dõi</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="min-h-screen bg-gray-900">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-300 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center">© 2024 VenComic - Đọc truyện tranh online miễn phí</p>
          </div>
        </footer>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
