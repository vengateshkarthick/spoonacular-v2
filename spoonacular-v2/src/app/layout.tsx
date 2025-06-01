import { ClerkProvider } from '@clerk/nextjs';
import { Quicksand, Poppins } from "next/font/google";
import { RootLayout } from '@/components/templates/RootLayout';
import './globals.css';

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className={`${quicksand.variable} ${poppins.variable} font-sans`}>
            <RootLayout>{children}</RootLayout>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
} 