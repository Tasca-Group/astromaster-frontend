import { API_URL } from "./constants";

export interface GratisCheckResponse {
  tropisch: string;
  siderisch: string;
  abweichung: boolean;
  ophiuchus: boolean;
}

export interface ZeichenVergleich {
  tropisch: string;
  siderisch: string;
  abweichung: boolean;
}

export interface GratisCheckExtendedResponse extends GratisCheckResponse {
  sonne: ZeichenVergleich;
  mond: ZeichenVergleich;
  aszendent: ZeichenVergleich | null;
  hat_uhrzeit: boolean;
}

export interface BestellungResponse {
  id: string;
  status: string;
}

export interface BestellungStatusResponse {
  id: string;
  status: "neu" | "berechne" | "fertig" | "fehler";
  pdf_bereit: boolean;
  erstellt_am: string;
}

export interface CheckoutSessionResponse {
  url: string;
  session_id: string;
}

export async function gratisCheck(geburtsdatum: string): Promise<GratisCheckResponse> {
  const res = await fetch(`${API_URL}/api/gratis-check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ geburtsdatum }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Fehler beim Check");
  }
  return res.json();
}

export async function gratisCheckExtended(data: {
  geburtsdatum: string;
  geburtszeit?: string;
  geburtsort?: string;
}): Promise<GratisCheckExtendedResponse> {
  const body: Record<string, string> = { geburtsdatum: data.geburtsdatum };
  if (data.geburtszeit) body.geburtszeit = data.geburtszeit;
  if (data.geburtsort) body.geburtsort = data.geburtsort;

  const res = await fetch(`${API_URL}/api/gratis-check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Fehler beim Check");
  }
  return res.json();
}

export async function createCheckoutSession(data: {
  name: string;
  email: string;
  geburtsdatum: string;
  geburtszeit: string;
  geburtsort: string;
  version: "normal" | "pro";
  design?: "dark" | "light";
}): Promise<CheckoutSessionResponse> {
  const res = await fetch(`${API_URL}/api/create-checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Fehler bei der Zahlung");
  }
  return res.json();
}

export async function createOrder(data: {
  name: string;
  email: string;
  geburtsdatum: string;
  geburtszeit: string;
  geburtsort: string;
  version: "normal" | "pro";
  stripe_session_id?: string;
}): Promise<BestellungResponse> {
  const res = await fetch(`${API_URL}/api/bestellung`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Fehler bei der Bestellung");
  }
  return res.json();
}

export async function getOrderStatus(id: string): Promise<BestellungStatusResponse> {
  const res = await fetch(`${API_URL}/api/bestellung/${id}/status`);
  if (!res.ok) throw new Error("Status nicht gefunden");
  return res.json();
}
