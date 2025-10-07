import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Mail, Sparkles } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="px-4 py-12 lg:py-16 bg-foreground text-background border-t border-border/20">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="font-bold text-2xl">YaMerito</div>
                        </div>
                        <p className="mt-3 text-sm leading-6 opacity-80 max-w-xs">
                            Organiza tu vida académica y personal sin que se te pase nada.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <Link 
                                href="#" 
                                aria-label="Facebook" 
                                className="p-2.5 rounded-lg bg-background/10 hover:bg-background/20 transition-all hover:scale-110"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link 
                                href="#" 
                                aria-label="Instagram" 
                                className="p-2.5 rounded-lg bg-background/10 hover:bg-background/20 transition-all hover:scale-110"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>               
                            <Link 
                                href="#" 
                                aria-label="Correo" 
                                className="p-2.5 rounded-lg bg-background/10 hover:bg-background/20 transition-all hover:scale-110"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold text-base mb-4">Producto</div>
                        <nav className="grid gap-3 text-sm">
                            <Link 
                                href="/sobre-nosotros" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Sobre Nosotros
                            </Link>
                            <Link 
                                href="/categorias" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Categorías
                            </Link>
                            <Link 
                                href="/calendario" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Calendario
                            </Link>
                            <Link 
                                href="/recordatorios" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Recordatorios
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <div className="font-semibold text-base mb-4">Cuenta</div>
                        <nav className="grid gap-3 text-sm">
                            <Link 
                                href="/auth/login" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Acceder
                            </Link>
                            <Link 
                                href="/auth/signup" 
                                className="opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                            >
                                Registrarse
                            </Link>
                        </nav>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="font-semibold text-base mb-4">Boletín</div>
                        <p className="text-sm leading-6 opacity-80 mb-4">
                            Recibe noticias y consejos, una vez al mes.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2" action="#" method="post">
                            <Input 
                                type="email" 
                                placeholder="tu@correo.com" 
                                className="bg-background text-foreground placeholder:text-foreground/60 flex-1" 
                                required 
                            />
                            <button 
                                type="submit" 
                                className="h-10 px-5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium whitespace-nowrap"
                            >
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-background/10 text-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 opacity-70">
                        <p className="text-center md:text-left">
                            © {year} YaMerito. Hecho con ❤️ para estudiantes del Tec de Veracruz.
                        </p>
                        <nav className="flex flex-wrap justify-center gap-6">
                            <Link 
                                href="#" 
                                className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity"
                            >
                                Privacidad
                            </Link>
                            <Link 
                                href="#" 
                                className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity"
                            >
                                Términos
                            </Link>
                            <Link 
                                href="#" 
                                className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity"
                            >
                                Contacto
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;