import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  bill: z.string().max(40),
  pin: z.string().regex(/^\d{6}$/),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
  page: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const lead = { ...parsed.data, receivedAt: new Date().toISOString() };
  const hook = process.env.LEAD_WEBHOOK_URL; // Google Apps Script web app / Zapier / Make

  if (!hook) {
    // Dev fallback only. In production, set LEAD_WEBHOOK_URL or leads are lost.
    console.log("[lead]", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
