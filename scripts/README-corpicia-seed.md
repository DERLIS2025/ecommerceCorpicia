# Corpicia Seed Draft

Este archivo define categorías y productos de ejemplo para cargar en Medusa sin hardcodear datos en el frontend.

## Archivo fuente

- `scripts/corpicia-seed.json`

## Uso recomendado

1. Crear primero las categorías en Medusa Admin usando los `handle` del JSON.
2. Crear los productos usando:
   - `title`
   - `description`
   - `thumbnail`
   - `price` y `currency_code`
   - `stock`
   - `category_handle`
3. Asociar cada producto a su categoría correspondiente.

> Nota: El starter de Next.js consumirá estos datos automáticamente desde la API Store de Medusa una vez cargados en backend.
