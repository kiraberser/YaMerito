"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-sm border-b border-[#2B3467]/10 sticky top-0 z-50" aria-label="Navegación principal">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-[#2B3467] hover:text-[#EB455F] transition-colors">
                            YaMerito
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/categorias" className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                            Categorías
                        </Link>
                        <Link href="/calendario" className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                            Calendario
                        </Link>
                        <Link href="/recordatorios" className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                            Recordatorios
                        </Link>
                        <Button asChild className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white">
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
                            className="text-[#2B3467] hover:text-[#EB455F] transition-colors p-2"
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
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="md:hidden py-4 border-t border-[#2B3467]/10"
                        >
                            <div className="flex flex-col gap-4">
                                <Link href="/categorias" onClick={() => setIsMenuOpen(false)} className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                                    Categorías
                                </Link>
                                <Link href="/calendario" onClick={() => setIsMenuOpen(false)} className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                                    Calendario
                                </Link>
                                <Link href="/recordatorios" onClick={() => setIsMenuOpen(false)} className="text-[#2B3467] hover:text-[#EB455F] transition-colors font-medium">
                                    Recordatorios
                                </Link>
                                <Button asChild className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white w-fit">
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