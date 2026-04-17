import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_NEWSLETTER_URL;
  const secret = process.env.GOOGLE_SCRIPT_NEWSLETTER_SECRET;

  if (!scriptUrl || !secret) {
    return NextResponse.json({ error: 'misconfigured' }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const email =
    typeof body === 'object' && body !== null && 'email' in body
      ? String((body as { email?: unknown }).email ?? '').trim()
      : '';

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, email, source: 'about' }),
    });

    const text = await upstream.text();
    let parsed: { ok?: boolean } = {};
    try {
      parsed = JSON.parse(text) as { ok?: boolean };
    } catch {
      // Apps Script may return non-JSON on failure
    }

    if (!upstream.ok || parsed.ok !== true) {
      return NextResponse.json({ error: 'upstream' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'network' }, { status: 502 });
  }
}
