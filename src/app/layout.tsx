import { ClerkProvider } from "@clerk/nextjs";
import { Poppins, Quicksand } from "next/font/google";
import { RootLayout } from "@templates/RootLayout";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-full w-full">
          <div className={`${poppins.variable} ${quicksand.className}  bg-white`}>
            <RootLayout>{children}</RootLayout>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
