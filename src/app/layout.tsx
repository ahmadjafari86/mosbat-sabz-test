import './globals.css'
import AppBar from "@/components/AppBar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Mosbat-Sabz Auth",
  description: "ahmad.j examination task",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

