import Link from "next/link"

const Footer = () => {
    return (
        <footer className="px-4 py-12 bg-primary border-t border-primary-foreground/10 text-primary-foreground">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-semibold text-xl">YaMerito</div>
                    <nav className="flex gap-6 text-sm">
                        <Link href="#" className="opacity-80 hover:opacity-100 transition-colors">Inicio</Link>
                        <Link href="#" className="opacity-80 hover:opacity-100 transition-colors">Contacto</Link>
                        <Link href="#" className="opacity-80 hover:opacity-100 transition-colors">Privacidad</Link>
                    </nav>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center opacity-80 text-sm">
                    © 2024 YaMerito. Hecho para estudiantes del Tec de Veracruz.
                </div>
            </div>
        </footer>
    )
}

export default Footer