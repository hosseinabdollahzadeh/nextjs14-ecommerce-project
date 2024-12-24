import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Header from "@/components/layout/Header";
import Toastify from "@/components/libraries/Toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
      <Header />
      {children}

      <BootstrapClient />
      <Toastify />
      </body>
    </html>
  );
}
