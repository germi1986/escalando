"use client";

function readCookie(name: string) {
  const prefix = `${name}=`;
  const value = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(prefix));

  if (!value) return undefined;

  try {
    return decodeURIComponent(value.slice(prefix.length));
  } catch {
    return undefined;
  }
}

export function createMetaEventId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `el_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
}

export function getMetaBrowserIdentifiers() {
  return {
    fbp: readCookie("_fbp"),
    fbc: readCookie("_fbc"),
  };
}
