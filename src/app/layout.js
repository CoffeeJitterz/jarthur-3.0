import "./globals.css";
import Navigation from "@/Components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation />
      <body>
        {children}
      </body>
    </html>
  );
}
