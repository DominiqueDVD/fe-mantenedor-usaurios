# 🚀 Proyecto React con Vite  

## 📌 Descripción  
Este proyecto es una aplicación web construida con **React** y **Vite**, diseñada para gestionar una tabla de usuarios con funcionalidades como:  
✅ Agregar, editar y eliminar usuarios.  
✅ Visualizar detalles de cada usuario.  
✅ Conectar con un backend mediante servicios API.  
✅ Manejo de estado global con **Redux Toolkit**.  

## 💁️ Estructura del Proyecto  
```
/
|-- public/
|   |-- data/
|   |   |-- countries.json  # 🌎 Datos de banderas y códigos telefónicos
|
|-- src/
|   |-- assets/  # 🎨 Recursos gráficos
|
|   |-- components/  # 🔧 Componentes reutilizables
|   |   |-- AddUserModal.tsx  # ➕ Modal para agregar/editar usuarios
|   |   |-- AlertComponent.tsx  # ⚠️ Alertas de la aplicación
|   |   |-- DeleteUserComponent.tsx  # 🗑️ Modal para eliminar usuarios
|   |   |-- Footer.tsx  # 📌 Pie de página
|   |   |-- Header.tsx  # 🏷️ Encabezado
|   |   |-- PaginationComponent.tsx  # 🔢 Paginación de usuarios
|   |   |-- ShowUserModal.tsx  # 👁️ Modal para ver detalles
|   |   |-- UserTable.tsx  # 📊 Tabla de usuarios
|
|   |-- $config/  # ⚙️ Configuraciones
|   |   |-- routes.ts  # 🛠️ Definición de rutas
|   |   |-- services/  # 🔗 Conexión con el backend
|
|   |-- handlers/  # 🛠️ Funciones de interacción con API
|
|   |-- interfaces/  # 📝 Tipado con TypeScript
|   |   |-- reduxInterface.ts  # 🗂️ Interfaces de Redux
|   |   |-- userData.ts  # 👤 Interfaces de usuario
|
|   |-- layouts/  # 🏠 Distribución de la aplicación
|   |   |-- Main.tsx  # 📌 Layout principal
|
|   |-- pages/
|   |   |-- Home.tsx  # 🏡 Página principal
|
|   |-- redux/
|   |   |-- userSlice.ts  # 🎮 Estado global con Redux Toolkit
|
|   |-- utils/
|   |   |-- dateUtil.ts  # ⏳ Funciones para fechas
|   |   |-- countryOptions/
|   |   |   |-- countryOptions.tsx # 🌍 Lógica para obtener y mostrar las opciones de países con banderas y códigos.
|
|   |-- validatios/
|   |   |-- validationsSchema.ts # 📝 Validaciones para los campos del formulario.

```

## 🚀 Instalación  
1⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/DominiqueDVD/fe-mantenedor-usaurios.git
cd fe-mantenedor-usaurios
```
  
2⃣ **Instalar dependencias**  
```bash
npm install
```

3⃣ **Iniciar el servidor de desarrollo**  
```bash
npm run dev
```

---

## 🎯 Características Principales  
✨ Creación, edición y eliminación de usuarios mediante **modales interactivos**.  
✨ Estado global gestionado con **Redux Toolkit**.  
✨ **Paginación** para una mejor experiencia de usuario.  
✨ **Alertas dinámicas** para notificar respuestas de la API.  
✨ **Conexión a un backend** con solicitudes HTTP mediante **Axios**.  

---

## 🔥 Tecnologías Utilizadas & Dependencias Clave  
📌 Estas son las librerías y herramientas más importantes del proyecto:

### 🏢 1. **React con Vite**  
- Framework para crear interfaces rápidas y modernas.  
- **Versión:** `^19.0.0`  
- 📦 Instalación:  
```bash
npm install react react-dom
```

### 🎮 2. **Redux Toolkit**  
- Manejo avanzado de estado global.  
- **Versión:** `^2.6.1`  
- 📦 Instalación:  
```bash
npm install @reduxjs/toolkit react-redux
```

### 🔍 3. **React Router DOM**  
- Navegación entre páginas dentro de la app.  
- **Versión:** `^7.4.0`  
- 📦 Instalación:  
```bash
npm install react-router-dom
```

### 🗮️ 4. **Axios**  
- Cliente HTTP para hacer peticiones al backend.  
- **Versión:** `^1.8.4`  
- 📦 Instalación:  
```bash
npm install axios
```

---

## 📄 Scripts Disponibles  
🔹 `npm run dev` → Inicia el servidor de desarrollo con Vite.  
🔹 `npm run build` → Genera una versión optimizada para producción.  
🔹 `npm run lint` → Analiza el código con ESLint.  
🔹 `npm run preview` → Previsualiza la aplicación en modo producción.  

---

💡 **¡Listo para construir algo increíble con React y Vite!** 🚀🔥