import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Enauf Homes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
