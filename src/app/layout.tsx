import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Л.И.С.А",
  description: "Бот Л.И.С.А - позволяет принимать данные пользователей оставивших заявки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
