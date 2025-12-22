import { Geist, Geist_Mono, Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900']
});

export const metadata = {
  title: "Church of Nigeria",
  description: "This is a church website where people can see information about the church and also donate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${livvic.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
