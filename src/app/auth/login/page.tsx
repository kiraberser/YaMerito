"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock auth
    alert(`Autenticado como ${email}`);
  }

  return (
    <div className="max-w-md mx-auto grid gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-2xl font-semibold">Acceder</h1>
        <p className="text-sm text-muted-foreground">Inicia sesión en tu cuenta</p>
      </div>
      <form onSubmit={onSubmit} className="grid gap-3">
        <label className="grid gap-1 text-sm">
          <span>Correo</span>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tú@tec.mx" />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Contraseña</span>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button type="submit" className="mt-2">Entrar</Button>
      </form>
      <p className="text-sm text-muted-foreground text-center">
        ¿No tienes cuenta? <Link className="underline" href="/auth/signup">Regístrate</Link>
      </p>
    </div>
  );
}


