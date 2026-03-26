export function formatARS(value: number): string {
  return `$${value.toLocaleString('es-AR')}`
}