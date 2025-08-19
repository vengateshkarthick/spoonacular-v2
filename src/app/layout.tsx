import { ClerkProvider } from '@clerk/nextjs';
import { Poppins } from "next/font/google";
import { RootLayout } from '@/components/templates/RootLayout';
import './globals.css';

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
          <div className={`!${poppins.variable}`}>
            <RootLayout>{children}</RootLayout>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
} 