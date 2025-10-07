"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Category } from "@/lib/types";
import type { LucideIcon } from "lucide-react";
import AddTaskDialog from "./AddTaskDialog";

interface CategoryCardProps {
  category: Category;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  tasksCount?: number;
  completedCount?: number;
}

export default function CategoryCard({
  category,
  title,
  description,
  icon: Icon,
  color,
  gradient,
  tasksCount = 0,
  completedCount = 0,
}: CategoryCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="h-full"
      >
        <Card 
          className={`relative overflow-hidden cursor-pointer h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-300 ${gradient} group`}
          onClick={() => setIsDialogOpen(true)}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
          
          <CardContent className="p-6 space-y-4 relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDialogOpen(true);
                }}
              >
                <Plus className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Title and description */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground capitalize flex items-center gap-2">
                {title}
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg ${color} bg-opacity-20 flex items-center justify-center`}>
                  <span className="text-sm font-bold">{tasksCount}</span>
                </div>
                <span className="text-xs text-foreground/60">tareas</span>
              </div>
              
              {completedCount > 0 && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-foreground/60">{completedCount} completadas</span>
                </div>
              )}
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </CardContent>
        </Card>
      </motion.div>

      <AddTaskDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        category={category}
        categoryColor={color}
      />
    </>
  );
}

