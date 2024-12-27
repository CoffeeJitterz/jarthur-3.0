import "./globals.css";
import Navigation from "@/Components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>      
        {children}
        <Navigation />
      </body>
    </html>
  );
}
