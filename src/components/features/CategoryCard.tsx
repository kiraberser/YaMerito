"use client";

import Link from "next/link";
import { MotionProps, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/types";
import { Heart, Users, GraduationCap, Dumbbell } from "lucide-react";

const categoryIcon: Record<Category, React.ReactNode> = {
  familia: <Heart className="text-red-500" />,
  amigos: <Users className="text-purple-500" />,
  escuela: <GraduationCap className="text-blue-500" />,
  deporte: <Dumbbell className="text-emerald-500" />,
  institucional: <GraduationCap className="text-zinc-500" />,
};

export interface CategoryCardProps extends MotionProps {
  category: Exclude<Category, "institucional">;
  description?: string;
}

export function CategoryCard({ category, description, ...motionProps }: CategoryCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} {...motionProps}>
      <Link href={`/categorias/${category}`} className="block">
        <Card className={cn("bg-white hover:shadow-md transition-shadow")}>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-muted">
              {categoryIcon[category]}
            </div>
            <CardTitle className="capitalize">{category}</CardTitle>
          </CardHeader>
          {description && <CardContent className="text-sm text-muted-foreground">{description}</CardContent>}
        </Card>
      </Link>
    </motion.div>
  );
}


