import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="px-4 py-12 bg-foreground text-background border-t border-border">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <div className="font-semibold text-2xl">YaMerito</div>
                        <p className="mt-3 text-sm/6 opacity-80 max-w-xs">
                            Organiza tu vida académica y personal sin que se te pase nada.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <Link href="#" aria-label="Facebook" className="p-2 rounded-md bg-background/10 hover:bg-background/15 transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="p-2 rounded-md bg-background/10 hover:bg-background/15 transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>               
                            <Link href="#" aria-label="Correo" className="p-2 rounded-md bg-background/10 hover:bg-background/15 transition-colors">
                                <Mail className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold">Producto</div>
                        <nav className="mt-4 grid gap-2 text-sm">
                            <Link href="/categorias" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">Categorías</Link>
                            <Link href="/calendario" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">Calendario</Link>
                            <Link href="/recordatorios" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">Recordatorios</Link>
                        </nav>
                    </div>

                    <div>
                        <div className="font-semibold">Cuenta</div>
                        <nav className="mt-4 grid gap-2 text-sm">
                            <Link href="/auth/login" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">Acceder</Link>
                            <Link href="/auth/signup" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">Registrarse</Link>
                        </nav>
                    </div>

                    <div>
                        <div className="font-semibold">Boletín</div>
                        <p className="mt-3 text-sm/6 opacity-80">Noticias y consejos, una vez al mes.</p>
                        <form className="mt-4 flex items-center gap-3" action="#" method="post">
                            <Input type="email" placeholder="tu@correo.com" className="bg-background text-foreground placeholder:text-foreground/60" required />
                            <button type="submit" className="h-10 px-4 rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-background/10 text-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 opacity-80">
                        <p>© {year} YaMerito. Hecho para estudiantes del Tec de Veracruz.</p>
                        <nav className="flex gap-6">
                            <Link href="#" className="hover:opacity-100 hover:underline underline-offset-4">Privacidad</Link>
                            <Link href="#" className="hover:opacity-100 hover:underline underline-offset-4">Términos</Link>
                            <Link href="#" className="hover:opacity-100 hover:underline underline-offset-4">Contacto</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;