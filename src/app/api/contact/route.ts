import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export const runtime = "nodejs"; // nodemailer no funciona en edge

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function safe(s: unknown, max = 2000) {
  return String(s ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Honeypot anti-spam (si quieres, añade el input hidden en el form)
    const website = safe(form.get("website"), 200);
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = safe(form.get("name"), 120);
    const company = safe(form.get("company"), 160);
    const email = safe(form.get("email"), 180);
    const message = safe(form.get("message"), 4000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email no válido." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    const to = process.env.CONTACT_TO || "wearegenesis.ai@gmail.com";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: "SMTP no configurado." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `Nuevo lead web — ${name}${company ? ` (${company})` : ""}`;

    const text = [
      `Nombre: ${name}`,
      `Empresa: ${company || "-"}`,
      `Email: ${email}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
        <h2>Nuevo lead desde la web</h2>
        <p><b>Nombre:</b> ${escapeHtml(name)}</p>
        <p><b>Empresa:</b> ${escapeHtml(company || "-")}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <hr/>
        <p><b>Mensaje:</b></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `GÉNESIS Web <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error enviando el mensaje." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
