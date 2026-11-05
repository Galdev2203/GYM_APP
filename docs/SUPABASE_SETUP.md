# Configuración de Supabase y GitHub Pages

La aplicación se publica como sitio estático en GitHub Pages. Next.js genera el contenido en `out/`; autenticación y acceso a datos ocurren desde el navegador mediante Supabase.

## 1. Crear proyecto Supabase
Crea un proyecto en https://supabase.com/dashboard. En Project Settings → API copia la Project URL y la clave pública (publishable/anon). La clave pública puede incluirse en el bundle del navegador; nunca uses la clave `service_role`.

## 2. Configurar variables en GitHub
En el repositorio abre Settings → Secrets and variables → Actions → Variables y crea:
- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: clave pública/publishable del proyecto.

Se inyectan durante la compilación estática. Para desarrollo local, copia `.env.example` a `.env.local` y rellena los mismos valores.

## 3. Crear base de datos
En Supabase abre SQL Editor → New query y ejecuta el contenido de `supabase/schema.sql`. Crea perfiles, catálogo global, entrenamientos, series, índices, trigger de perfil y políticas RLS.

Los usuarios autenticados pueden consultar el catálogo común, pero no modificarlo. Solo pueden leer y modificar sus propias sesiones y series.

## 4. Google OAuth
1. En Google Cloud Console crea credenciales OAuth de tipo Web application y configura la pantalla de consentimiento.
2. En Supabase → Authentication → Providers → Google activa el proveedor e introduce Client ID y Client Secret.
3. En Google Cloud añade como Authorized redirect URI la callback que muestra Supabase (habitualmente `https://TU-PROYECTO.supabase.co/auth/v1/callback`).
4. En Supabase → Authentication → URL Configuration configura Site URL como `https://galdev2203.github.io/GYM_APP/` y añade Redirect URL `https://galdev2203.github.io/GYM_APP/auth/callback/`.
5. Para pruebas locales añade también `http://localhost:3000/GYM_APP/auth/callback/` solo si ejecutas el sitio con el basePath configurado. Para `next dev`, el basePath también es `/GYM_APP`.

## 5. Activar GitHub Pages
En GitHub abre Settings → Pages y selecciona **Build and deployment → Source: GitHub Actions**. Cada push a `main` ejecutará el workflow y publicará `out/`.

La URL prevista es: https://galdev2203.github.io/GYM_APP/

## 6. Ejecutar localmente
```bash
npm install
cp .env.example .env.local
npm run dev
```
Abre http://localhost:3000/GYM_APP/. Para comprobar la versión estática ejecuta `npm run build` y sirve la carpeta `out` con un servidor estático.

## Modelo de datos
- `profiles`: datos básicos privados ligados a auth.users.
- `exercises`: catálogo global compartido, lectura para usuarios autenticados; escritura administrativa.
- `workouts`: sesiones privadas por usuario.
- `workout_sets`: series asociadas a sesión y ejercicio; RLS valida la propiedad de la sesión.

El mismo Supabase Auth y PostgREST podrá ser consumido por las futuras aplicaciones Android/iOS.
