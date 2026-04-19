import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.PROXMOX_API_URL;
  const id = process.env.PROXMOX_TOKEN_ID;
  const secret = process.env.PROXMOX_TOKEN_SECRET;
  const nodeName = 'pvs';

  // Debug: Ellenőrizzük a terminálban, hogy betöltődtek-e az adatok
  if (!url || !id || !secret) {
    console.error("❌ HIÁNYZÓ KÖRNYEZETI VÁLTOZÓK! Ellenőrizd az .env.local fájlt!");
    return NextResponse.json({ error: true, message: "Környezeti változó hiányzik" });
  }

  try {
    const res = await fetch(`${url}/nodes/${nodeName}/status`, {
      headers: { 'Authorization': `PVEAPIToken=${id}=${secret}` },
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(5000)
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`❌ Proxmox API hiba: ${res.status} - ${text}`);
      return NextResponse.json({ error: true, status: res.status, msg: text });
    }

    const statusJson = await res.json();

    const resLxc = await fetch(`${url}/nodes/${nodeName}/lxc`, {
      headers: { 'Authorization': `PVEAPIToken=${id}=${secret}` },
      next: { revalidate: 0 }
    });
    const lxcJson = await resLxc.json();

    return NextResponse.json({ 
      node: statusJson.data, 
      lxcs: lxcJson.data || [],
      error: false 
    });

  } catch (e: any) {
    console.error("❌ Hálózati hiba a backendben:", e.message);
    return NextResponse.json({ error: true, message: e.message });
  }
}