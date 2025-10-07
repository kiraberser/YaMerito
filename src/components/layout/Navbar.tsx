"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-primary/95 backdrop-blur-md text-white border-b border-primary-foreground/10 sticky top-0 z-50 shadow-sm" aria-label="Navegación principal">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                YaMerito
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-6">
                        <Link 
                            href="/sobre-nosotros" 
                            className="text-white/90 hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                        >
                            Sobre Nosotros
                        </Link>
                        <Link 
                            href="/categorias" 
                            className="text-white/90 hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                        >
                            Categorías
                        </Link>
                        <Link 
                            href="/calendario" 
                            className="text-white/90 hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                        >
                            Calendario
                        </Link>
                        <Link 
                            href="/recordatorios" 
                            className="text-white/90 hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                        >
                            Recordatorios
                        </Link>
                        <div className="w-px h-6 bg-white/20 mx-2" />
                        <Button 
                            asChild 
                            className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href="/auth/login">Acceder</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="text-white hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/5"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden border-t border-white/10"
                        >
                            <div className="flex flex-col gap-2 py-4">
                                <Link 
                                    href="/sobre-nosotros" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="text-white hover:text-accent transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    Sobre Nosotros
                                </Link>
                                <Link 
                                    href="/categorias" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="text-white hover:text-accent transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    Categorías
                                </Link>
                                <Link 
                                    href="/calendario" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="text-white hover:text-accent transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    Calendario
                                </Link>
                                <Link 
                                    href="/recordatorios" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="text-white hover:text-accent transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    Recordatorios
                                </Link>
                                <div className="h-px bg-white/10 my-2" />
                                <Button 
                                    asChild 
                                    className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white w-full shadow-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Link href="/auth/login">Acceder</Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;