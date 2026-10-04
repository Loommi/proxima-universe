import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:{default:"Proxima — The Official Universe",template:"%s — Proxima"},description:"The official public canon for Proxima, a hard-science-fiction universe about humanity's first interstellar journey.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
