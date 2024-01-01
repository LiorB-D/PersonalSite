import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lior Ben-David",
  description: "Lior Ben-David Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="image"
          property="og:image"
          content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"
        />
        <meta
          name="twitter:image"
          property="twitter:image"
          content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"
        />
        <meta
          name="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta property="twitter:domain" content={`liorbd.me`} />
        <meta property="twitter:url" name="twitter:url" content="" />
        <meta
          name="twitter:title"
          property="twitter:title"
          content={"Lior Ben-David"}
        />
        <meta
          name="twitter:description"
          property="twitter:description"
          content={"Lior Ben-David Personal Website"}
        />
        <meta
          name="twitter:image"
          content="https://cdn.aarp.net/content/dam/aarp/travel/trips/2020/08/1140-sunset-at-shenandoah-national-park.jpg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
