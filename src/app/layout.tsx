import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/styles/globals.scss";


const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem Vindo! | Portifólio de Marcos.",
  description: "Meu Portifólio é minha porta de entrada e minha vitrine, sinta-se à vontade!",
  icons: '/favicon.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
