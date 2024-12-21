import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
      <Header />
      {children}

      <BootstrapClient />
      </body>
    </html>
  );
}
