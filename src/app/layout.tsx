import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"GYM.APP — Tu diario de entrenamiento",description:"Registra tus entrenamientos, organiza tus rutinas y sigue tu progreso con GYM.APP."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
