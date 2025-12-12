import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const endpoint = process.env.FORMSPREE_ENDPOINT;

    if (!endpoint) {
      return new Response(JSON.stringify({ error: "Formspree endpoint missing" }), {
        status: 500,
      });
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Formspree error" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}