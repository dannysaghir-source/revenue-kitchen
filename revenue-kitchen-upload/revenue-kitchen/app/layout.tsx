import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "Revenue Kitchen — Restaurant Marketing Agency UK",
    description: "Restaurant marketing agency run by a real operator. We help UK restaurants doing £250K+ grow revenue, fix margins and ditch delivery apps.",
    icons: {
          icon: "/favicon.ico",
          apple: "/apple-touch-icon.png",
    },
    openGraph: {
          title: "Revenue Kitchen — Restaurant Marketing Agency UK",
          description: "My restaurant does £1M+ a year, no 3rd party delivery apps. Now I help other operators do the same.",
          url: "https://www.revenuekitchen.co.uk",
          siteName: "Revenue Kitchen",
          images: [
            {
                      url: "https://www.revenuekitchen.co.uk/og-image.png",
                      width: 1200,
                      height: 630,
                      alt: "Revenue Kitchen — Restaurant Marketing Agency UK",
            },
                ],
          locale: "en_GB",
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: "Revenue Kitchen — Restaurant Marketing Agency UK",
          description: "My restaurant does £1M+ a year, no 3rd party delivery apps. Now I help other operators do the same.",
          images: ["https://www.revenuekitchen.co.uk/og-image.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="en">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
                </head>
                <body>
                  {children}
                        <Script
                                    src="https://www.googletagmanager.com/gtag/js?id=G-TLWVHP41R5"
                                    strategy="afterInteractive"
                                  />
                        <Script id="google-analytics" strategy="afterInteractive">
                          {`
                                      window.dataLayer = window.dataLayer || [];
                                                  function gtag(){dataLayer.push(arguments);}
                                                              gtag('js', new Date());
                                                                          gtag('config', 'G-TLWVHP41R5');
                                                                                    `}
                        </Script>
                </body>
          </html>
        );
}
