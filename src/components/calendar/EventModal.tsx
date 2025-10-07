"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Tag, MapPin, Edit2, Trash2, Save, X } from "lucide-react";
import type { CalendarEvent } from "@/lib/types";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent | null;
  onUpdate?: (event: CalendarEvent) => void;
  onDelete?: (eventId: string) => void;
}

export default function EventModal({ isOpen, onClose, event, onUpdate, onDelete }: EventModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState<CalendarEvent | null>(null);

  if (!event) return null;

  const handleEdit = () => {
    setEditedEvent({ ...event });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedEvent && onUpdate) {
      onUpdate(editedEvent);
    }
    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(event.id);
    }
    onClose();
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      escuela: "bg-primary",
      amigos: "bg-secondary",
      familia: "bg-accent",
      deporte: "bg-primary",
      institucional: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentEvent = isEditing ? editedEvent : event;
  if (!currentEvent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${getCategoryColor(currentEvent.category)} flex items-center justify-center`}>
                <Tag className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">
                  {isEditing ? (
                    <Input
                      value={currentEvent.title}
                      onChange={(e) => setEditedEvent({ ...currentEvent, title: e.target.value })}
                      className="text-xl font-semibold"
                    />
                  ) : (
                    currentEvent.title
                  )}
                </DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${getCategoryColor(currentEvent.category)}`} />
                  <span className="text-sm text-muted-foreground capitalize">{currentEvent.category}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Fecha */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
            <Calendar className="w-5 h-5 text-primary mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground mb-1">Fecha</div>
              {isEditing ? (
                <Input
                  type="date"
                  value={currentEvent.date}
                  onChange={(e) => setEditedEvent({ ...currentEvent, date: e.target.value })}
                />
              ) : (
                <div className="text-sm text-foreground/70">{formatDate(currentEvent.date)}</div>
              )}
              {currentEvent.endDate && (
                <>
                  <div className="text-xs text-foreground/50 mt-1">Hasta</div>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={currentEvent.endDate}
                      onChange={(e) => setEditedEvent({ ...currentEvent, endDate: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <div className="text-sm text-foreground/70">{formatDate(currentEvent.endDate)}</div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Descripción */}
          {(currentEvent.description || isEditing) && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <MapPin className="w-5 h-5 text-secondary mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">Descripción</div>
                {isEditing ? (
                  <textarea
                    value={currentEvent.description || ""}
                    onChange={(e) => setEditedEvent({ ...currentEvent, description: e.target.value })}
                    className="w-full min-h-[80px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none"
                    placeholder="Agrega una descripción..."
                  />
                ) : (
                  <div className="text-sm text-foreground/70">{currentEvent.description}</div>
                )}
              </div>
            </div>
          )}

          {/* Tipo */}
          {currentEvent.type && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <div className="text-sm font-medium text-foreground">Tipo</div>
                <div className="text-sm text-foreground/70 capitalize">{currentEvent.type}</div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          {!isEditing ? (
            <>
              {event.type !== "institucional" && (
                <>
                  <Button
                    variant="outline"
                    onClick={handleEdit}
                    className="w-full sm:w-auto"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDelete}
                    className="w-full sm:w-auto text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar
                  </Button>
                </>
              )}
              <Button onClick={onClose} className="w-full sm:w-auto">
                Cerrar
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditing(false);
                  setEditedEvent(null);
                }}
                className="w-full sm:w-auto"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button
                onClick={handleSave}
                className="w-full sm:w-auto bg-primary"
              >
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

