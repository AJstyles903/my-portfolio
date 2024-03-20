import DarkLight from "@/components/DarkLight";
import "./globals.css";
import Theme from "@/components/Theme";

export const metadata = {
  title: "My First Portfolio",
  description: "Created with NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.ico" type="image/x-icon" sizes="32x32" />
      </head>
      <body className="transition-all duration-500 dark:bg-zinc-900 bg-zinc-100">
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
