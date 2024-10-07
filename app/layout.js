import localFont from "next/font/local";
import "./globals.css";

const comic = localFont({
  src: [
    {
      path: '../public/font/enaragy.ttf',
      weight: '400',
      style: 'normal', // Optionally specify style
    },
  ],
  variable: '--font-comic',
});

const alex = localFont({
  src: [
    {
      path: '../public/font/Alexandria-Bold.ttf',
      weight: '700',
      style: 'normal', 
    },
  ],
  variable: '--font-alex',
});

const edu = localFont({
  src: [
    {
      path: '../public/font/edu.ttf',
   
    },
  ],
  variable: '--font-edu',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${edu.variable} ${comic.variable} ${alex.variable}`}>
        {children}
      </body>
    </html>
  );
}
