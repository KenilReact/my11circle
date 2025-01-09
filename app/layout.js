import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My11Circle - Fantasy Cricket",
  description:
    "Join My11Circle to play fantasy cricket and win exciting prizes. Create your team, compete with others, and enjoy the thrill of cricket.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/11circle.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
