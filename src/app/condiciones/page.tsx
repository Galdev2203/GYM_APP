import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condiciones de uso | GYM.APP",
  description: "Condiciones provisionales de uso de GYM.APP.",
};

export default function TermsPage() {
  return <main className="legal-page">
    <a className="legal-back" href="/GYM_APP/">← Volver a GYM.APP</a>
    <p className="legal-eyebrow">INFORMACIÓN LEGAL</p>
    <h1>Condiciones de uso</h1>
    <p className="legal-lead">Documento provisional para el uso privado de GYM.APP. Debe completarse y revisarse antes de ofrecer el servicio de forma comercial o a usuarios externos.</p>
    <section><h2>1. Titular del servicio</h2><p>GYM.APP es una aplicación de registro y organización personal de entrenamientos. Titular y datos de contacto: [PENDIENTE: identificar al titular y facilitar un medio de contacto].</p></section>
    <section><h2>2. Acceso privado</h2><p>Durante esta fase, el acceso está destinado al titular y a las personas a las que se autorice expresamente. Disponer de una cuenta de Google no implica por sí solo tener autorización para utilizar el servicio.</p></section>
    <section><h2>3. Uso adecuado</h2><p>El usuario se compromete a utilizar la aplicación de forma lícita, no intentar acceder a cuentas o datos ajenos y no interferir en la disponibilidad o seguridad del servicio.</p></section>
    <section><h2>4. Información de entrenamiento</h2><p>GYM.APP es una herramienta de registro y organización. No ofrece diagnóstico, tratamiento ni asesoramiento médico. La información mostrada no sustituye la valoración de profesionales sanitarios o deportivos cualificados. Realiza los ejercicios de acuerdo con tu capacidad y solicita asesoramiento cuando lo necesites.</p></section>
    <section><h2>5. Disponibilidad y cambios</h2><p>La aplicación puede evolucionar, incorporar mejoras o dejar de ofrecer temporalmente alguna función. Se procurará evitar pérdidas de información, pero no debe utilizarse como único sistema de conservación de registros importantes.</p></section>
    <section><h2>6. Propiedad intelectual</h2><p>La interfaz, el diseño, los textos y los elementos propios de GYM.APP están protegidos por la normativa aplicable. No se concede autorización para copiar, distribuir o explotar elementos protegidos fuera de los usos permitidos por la ley.</p></section>
    <section><h2>7. Privacidad</h2><p>El tratamiento de datos personales se describe en la <a href="/GYM_APP/privacidad/">Política de privacidad</a>, que también está pendiente de completar y validar.</p></section>
    <section><h2>8. Contacto y jurisdicción</h2><p>Contacto: [PENDIENTE: correo del titular]. Las condiciones definitivas deberán identificar la normativa aplicable y respetar los derechos imperativos de los usuarios consumidores cuando corresponda.</p></section>
    <p className="legal-warning">Este texto es un borrador de trabajo, no unas condiciones contractuales definitivas. Debe revisarse antes de habilitar el acceso de terceros o cualquier pago.</p>
    <a className="legal-back" href="/GYM_APP/">Volver a la aplicación →</a>
  </main>;
}
