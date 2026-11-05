import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"FORGE — Training log",description:"Tu diario de entrenamiento. Registra, progresa y supera tus límites."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
