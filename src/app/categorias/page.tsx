import { CategoryCard } from "@/components/features/CategoryCard";

export default function CategoriasHomePage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">Categorías</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CategoryCard category="familia" description="Cumpleaños y aniversarios" />
        <CategoryCard category="amigos" description="Fiestas y reuniones" />
        <CategoryCard category="escuela" description="Tareas, exámenes, inscripciones" />
        <CategoryCard category="deporte" description="Entrenamientos y partidos" />
      </div>
    </div>
  );
}


