# Configuración de Supabase

La web está preparada para conectarse a Supabase. Hasta introducir las variables de entorno funciona en modo de vista previa.

## 1. Crear proyecto
Crea un proyecto en https://supabase.com/dashboard. En Project Settings → API copia Project URL y la clave pública (publishable/anon). Añádelas como variables de entorno en local y hosting:

    NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_CLAVE_PUBLICA

No incluyas nunca la service_role key en el navegador ni en variables NEXT_PUBLIC.

## 2. Crear base de datos
En Supabase abre SQL Editor → New query y ejecuta el archivo supabase/schema.sql. Crea perfiles, catálogo global de ejercicios, entrenamientos, series, índices, trigger de perfil y políticas RLS. Los usuarios autenticados pueden consultar el catálogo común, pero no modificarlo; solo pueden leer y modificar sus propias sesiones y series.

## 3. Google OAuth
1. En Google Cloud Console crea credenciales OAuth de tipo Web application y configura la pantalla de consentimiento.
2. En Supabase → Authentication → Providers → Google activa el proveedor e introduce Client ID y Client Secret.
3. En Google Cloud añade como Authorized redirect URI la callback que Supabase muestra en la configuración del proveedor (habitualmente https://TU-PROYECTO.supabase.co/auth/v1/callback).
4. En Supabase → Authentication → URL Configuration configura Site URL y Redirect URLs. Añade http://localhost:3000/auth/callback y la URL de producción con /auth/callback.

## 4. Ejecutar
Copia .env.example a .env.local, rellena las dos variables y ejecuta:

    npm install
    npm run dev

Abre http://localhost:3000. La autenticación Google y la persistencia se activan al conectar el proyecto.

## Modelo
- profiles: datos básicos privados ligados a auth.users.
- exercises: catálogo global, lectura para usuarios autenticados; escritura administrativa.
- workouts: sesiones privadas por usuario.
- workout_sets: series asociadas a una sesión y ejercicio; RLS valida la propiedad de la sesión.

El modelo usa Supabase Auth y PostgREST, por lo que futuras apps Android/iOS podrán consumir las mismas tablas y políticas.
