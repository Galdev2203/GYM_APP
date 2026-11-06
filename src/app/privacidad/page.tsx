import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad | GYM.APP",
  description: "Información sobre el tratamiento de datos personales en GYM.APP.",
};

export default function PrivacyPage() {
  return <main className="legal-page">
    <a className="legal-back" href="/GYM_APP/">← Volver a GYM.APP</a>
    <p className="legal-eyebrow">INFORMACIÓN LEGAL</p>
    <h1>Política de privacidad</h1>
    <p className="legal-lead">Esta página es un borrador informativo para la fase privada de GYM.APP. No debe considerarse una política definitiva hasta completar los datos del responsable y verificar los tratamientos reales.</p>
    <section><h2>1. Responsable del tratamiento</h2><p><strong>Responsable:</strong> [PENDIENTE: nombre o razón social].</p><p><strong>Contacto de privacidad:</strong> [PENDIENTE: correo electrónico de contacto].</p><p><strong>Dirección:</strong> [PENDIENTE: dirección a efectos de notificaciones, si corresponde].</p></section>
    <section><h2>2. Qué datos se pueden tratar</h2><p>En función de las funciones que utilices, GYM.APP puede tratar datos identificativos de la cuenta (por ejemplo, nombre, correo y avatar facilitados por Google), rutinas, ejercicios, fechas de entrenamiento, pesos, repeticiones, series y otra información que decidas registrar.</p><p>Los registros de entrenamiento pueden revelar información relacionada con la condición física. Antes de abrir el servicio a terceros debe evaluarse específicamente si algún tratamiento constituye tratamiento de categorías especiales de datos y qué garantías serían necesarias.</p></section>
    <section><h2>3. Finalidades y bases jurídicas</h2><p>Los datos se utilizan para permitir el acceso a la aplicación, guardar y mostrar tus rutinas e historial y mantener el funcionamiento y la seguridad del servicio. La base jurídica concreta de cada finalidad debe ser confirmada por el responsable antes de publicar esta política como definitiva.</p></section>
    <section><h2>4. Proveedores y destinatarios</h2><p>La autenticación utiliza Google y la infraestructura de datos utiliza Supabase. Deben revisarse y documentarse los roles de estos proveedores, sus condiciones, ubicaciones de tratamiento y, cuando proceda, las garantías aplicables a transferencias internacionales.</p><p>No se debe afirmar que los datos nunca se comparten sin haber comprobado todas las dependencias y configuraciones del servicio.</p></section>
    <section><h2>5. Conservación</h2><p>Los datos se conservarán durante el tiempo necesario para prestar el servicio y atender las responsabilidades que puedan derivarse. Los plazos concretos, el procedimiento de borrado y las copias de seguridad están pendientes de definir.</p></section>
    <section><h2>6. Tus derechos</h2><p>Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando proceda, así como retirar el consentimiento si esa fuera la base jurídica. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p><p>Para ejercer tus derechos: [PENDIENTE: correo de contacto].</p></section>
    <section><h2>7. Seguridad y cambios</h2><p>Se aplican medidas técnicas y organizativas proporcionadas al servicio. Esta información deberá actualizarse cuando cambien las funcionalidades, proveedores o tratamientos.</p></section>
    <p className="legal-warning">Pendiente de revisión: completar los campos entre corchetes, verificar el flujo real de datos y obtener revisión jurídica antes de invitar a usuarios externos.</p>
    <a className="legal-back" href="/GYM_APP/">Volver a la aplicación →</a>
  </main>;
}
