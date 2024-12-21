import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
      {children}

      <BootstrapClient />
      </body>
    </html>
  );
}
