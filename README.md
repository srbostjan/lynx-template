# Lynx.js Project

Este proyecto utiliza Lynx.js con React y React Router para crear una aplicación con múltiples rutas y un store de Zustand.

## Estructura del Proyecto

- `src/index.tsx`: Configuración del navegador con React Router y tres rutas.
- `src/store.ts`: Store en Zustand con un contador.
- `src/screens/Login/index.tsx`: Ruta de login.
- `src/screens/MainStack/Product/index.tsx`: Ruta con parámetros.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd linx-app
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Scripts

- `npm run build`: Construye el proyecto.
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run preview`: Previsualiza la aplicación construida.

## Uso

### Navegador con React Router

El archivo [`src/index.tsx`](src/index.tsx) configura el navegador con React Router y define tres rutas:

- `/`: Ruta principal que carga el componente `App`.
- `/login`: Ruta de login que carga el componente `Login`.
- `/product/:id`: Ruta de producto que carga el componente `Product` con parámetros.

### Store en Zustand

El archivo [`src/store/store.ts`](src/store/store.ts) define un store en Zustand con un contador y funciones para incrementar y decrementar el contador.

### Ruta de Login

El archivo [`src/screens/AuthStack/Login/index.tsx`](src/screens/AuthStack/Login/index.tsx) define la ruta de login.

### Ruta de Producto

El archivo [`src/screens/MainStack/Product/index.tsx`](src/screens/MainStack/Product/index.tsx) define una ruta de producto que acepta parámetros.
