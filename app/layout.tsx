import "./globals.css";
import { Raleway, Poppins, Fira_Code } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
const fira_code = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata = {
  title: "Miloud Boumachrouk",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${fira_code.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
