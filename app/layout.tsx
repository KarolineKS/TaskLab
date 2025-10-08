import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskLab - To-Do List",
  description: "Sistema simples de to-do list para treinar testes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
