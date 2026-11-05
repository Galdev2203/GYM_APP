"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthCallback() {
  const [message, setMessage] = useState("Comprobando tu sesión…");

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setMessage("Falta configurar Supabase. Vuelve a intentarlo cuando esté conectado.");
      return;
    }
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      setMessage("No se ha recibido el código de acceso. Vuelve a iniciar sesión.");
      return;
    }
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      if (error) {
        setMessage("No se pudo completar el acceso: " + error.message);
        return;
      }
      window.location.replace("/GYM_APP/");
    });
  }, []);

  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, fontFamily: "system-ui" }}>
    <div style={{ textAlign: "center" }}><h1>FORGE</h1><p>{message}</p></div>
  </main>;
}
