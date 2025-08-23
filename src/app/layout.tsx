import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { RootLayout } from "@templates/RootLayout";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-full w-full">
          <div className={`!${poppins.variable} bg-white`}>
            <RootLayout>{children}</RootLayout>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
