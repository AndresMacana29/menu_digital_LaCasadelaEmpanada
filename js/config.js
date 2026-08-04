// ============================================================
// ZONA DE CONFIGURACIÓN — EDITAR PARA CADA CLIENTE
// Este es el único archivo que cambia entre un negocio y otro.
//
// ⚠️ PENDIENTES POR CONFIRMAR CON EL CLIENTE (La Casa de la Empanada):
//   - Número de WhatsApp real del negocio (se dejó un valor de ejemplo).
//   - Horario de atención (no aparece en las fotos de la carta física).
//   - Precio del wafle "Duo Frutal" (no es visible en la foto).
//   - Precio del sándwich "Clásico Irresistible" (parcialmente tapado en
//     la foto por un resaltador verde — se asumió $4.000 por ser el más
//     sencillo de la sección, a confirmar).
//   - Logo/mascota: falta reemplazar el emoji por el archivo real del logo.
// ============================================================
const CONFIG = {
  // ── DATOS DEL NEGOCIO ──────────────────────────────────────
  nombre:    "La Casa de la Empanada",
  tagline:   "Empanadas, sándwiches y postres artesanales",
  emoji:     "🥟",
  whatsapp:  "573506194325",   // TODO: reemplazar por el número real, sin + ni espacios
  horario:   "Horario por confirmar",
  // ── CATEGORÍAS Y MENÚ ─────────────────────────────────────
  // "nota" (opcional) se muestra como aviso debajo del título de la categoría.
  categorias: [
    { id: "todo",          nombre: "Todos" },
    { id: "empanadas",     nombre: "Empanadas" },
    { id: "sandwiches",    nombre: "Sándwiches" },
    { id: "arepas",        nombre: "Arepas Rellenas" },
    { id: "ensaladas",     nombre: "Ensaladas de Fruta" },
    { id: "wafles",        nombre: "Wafles" },
    { id: "copa-gelatina", nombre: "Copa de Gelatina" },
    { id: "copa-helado",   nombre: "Copa de Helado" },
    { id: "brownie",       nombre: "Brownie" },
    { id: "bebidas-cal",   nombre: "Bebidas Calientes" },
    { id: "jugos",         nombre: "Jugos Naturales" },
    { id: "granizados",    nombre: "Granizados", nota: "Todos los granizados admiten toppings adicionales por +$2.000" },
    { id: "sodas",         nombre: "Sodas Saborizadas" },
  ],
  productos: [
    // id, cat, emoji, nombre, descripcion, precio (en pesos)

    // ── EMPANADAS ──────────────────────────────────────────
    { id:1,  cat:"empanadas", emoji:"🥟", nombre:"Clásica Poderosa", desc:"Carne desmechada, arroz y huevo.", precio:3000 },
    { id:2,  cat:"empanadas", emoji:"🥟", nombre:"Pollo Cremoso", desc:"Pollo en salsa de champiñones, maíz tierno y queso.", precio:4000 },
    { id:3,  cat:"empanadas", emoji:"🥟", nombre:"Triple Carga", desc:"Carne desmechada, salchicha y jamón.", precio:4000 },
    { id:4,  cat:"empanadas", emoji:"🥟", nombre:"Picantona", desc:"Carne desmechada, chorizo, jalapeños y maíz tierno.", precio:4000 },
    { id:5,  cat:"empanadas", emoji:"🥟", nombre:"Montañera", desc:"Arroz, chorizo, pollo, plátano maduro, chicharrón y maíz tierno.", precio:4000 },
    { id:6,  cat:"empanadas", emoji:"🥟", nombre:"Ranchera", desc:"Carne molida, salchicha, huevo, maíz tierno y queso.", precio:4000 },
    { id:7,  cat:"empanadas", emoji:"🍍", nombre:"Aloha", desc:"Piña, jamón y queso.", precio:3000 },

    // ── SÁNDWICHES ─────────────────────────────────────────
    { id:8,  cat:"sandwiches", emoji:"🥪", nombre:"Clásico Irresistible", desc:"Jamón y queso. ⚠️ Precio por confirmar.", precio:4000 },
    { id:9,  cat:"sandwiches", emoji:"🥪", nombre:"Fusión Perfecta", desc:"Pollo desmechado, jamón, queso, lechuga y tomate.", precio:6000 },
    { id:10, cat:"sandwiches", emoji:"🥪", nombre:"Todo en Uno", desc:"Pollo en salsa de champiñones, tocineta, jamón, maíz tierno y queso.", precio:8000 },
    { id:11, cat:"sandwiches", emoji:"🥪", nombre:"Mexicano", desc:"Carne en salsa BBQ, jamón, queso, aguacate, jalapeños y nachos.", precio:8000 },
    { id:12, cat:"sandwiches", emoji:"🍟", nombre:"Adicional: Papa a la Francesa", desc:"Porción adicional para acompañar tu sándwich.", precio:3000 },

    // ── AREPAS RELLENAS ────────────────────────────────────
    { id:13, cat:"arepas", emoji:"🫓", nombre:"Explosiva", desc:"Carne desmechada, salchicha, maíz tierno y queso.", precio:6000 },
    { id:14, cat:"arepas", emoji:"🫓", nombre:"Doble Poder", desc:"Carne y pollo desmechado, maíz tierno y queso.", precio:6000 },

    // ── ENSALADAS DE FRUTA (variantes como tarjetas separadas) ──
    { id:15, cat:"ensaladas", emoji:"🍨", nombre:"Ensalada Grande con Helado", desc:"Fruta fresca picada, tamaño grande, con helado.", precio:15000 },
    { id:16, cat:"ensaladas", emoji:"🍨", nombre:"Ensalada Grande sin Helado", desc:"Fruta fresca picada, tamaño grande, sin helado.", precio:13000 },
    { id:17, cat:"ensaladas", emoji:"🍨", nombre:"Ensalada Pequeña con Helado", desc:"Fruta fresca picada, tamaño pequeño, con helado.", precio:12000 },
    { id:18, cat:"ensaladas", emoji:"🍨", nombre:"Ensalada Pequeña sin Helado", desc:"Fruta fresca picada, tamaño pequeño, sin helado.", precio:11000 },
    { id:19, cat:"ensaladas", emoji:"🍓", nombre:"Fruta Picada", desc:"Fruta fresca picada, sin helado.", precio:6000 },
    { id:20, cat:"ensaladas", emoji:"🍨", nombre:"Parfait", desc:"Capas de fruta, granola y crema.", precio:10000 },

    // ── WAFLES ─────────────────────────────────────────────
    { id:21, cat:"wafles", emoji:"🧇", nombre:"Duo Frutal", desc:"Base de arequipe o chocolate, dos frutas, helado y toppings. Opciones: mango, fresa, banano o durazno. ⚠️ Precio por confirmar.", precio:12000 },
    { id:22, cat:"wafles", emoji:"🧇", nombre:"Oreo", desc:"Base de crema de la casa, galletas oreo y helado.", precio:12000 },
    { id:23, cat:"wafles", emoji:"🧇", nombre:"Frutos Amarillos", desc:"Base de dulce de maracuyá, mango, durazno y helado.", precio:13000 },
    { id:24, cat:"wafles", emoji:"🧇", nombre:"Mix de Frutas", desc:"Base de arequipe o chocolate, mango, fresa, durazno, banano, crema y helado.", precio:15000 },
    { id:25, cat:"wafles", emoji:"🧇", nombre:"Fresas con Crema", desc:"Base de crema con fresas, queso y helado.", precio:15000 },

    // ── COPA DE GELATINA ───────────────────────────────────
    { id:26, cat:"copa-gelatina", emoji:"🍮", nombre:"Gelatina, Queso y Crema", desc:"", precio:7000 },
    { id:27, cat:"copa-gelatina", emoji:"🍮", nombre:"Gelatina, Queso, Crema y Helado", desc:"", precio:8000 },

    // ── COPA DE HELADO ─────────────────────────────────────
    { id:28, cat:"copa-helado", emoji:"🍧", nombre:"Copa de Helado", desc:"Dos helados, queso, crema, una fruta, un barquillo y un topping.", precio:10000 },

    // ── BROWNIE ────────────────────────────────────────────
    { id:29, cat:"brownie", emoji:"🍫", nombre:"Brownie con Helado y Fruta", desc:"", precio:14000 },
    { id:30, cat:"brownie", emoji:"🍫", nombre:"Brownie con Helado", desc:"", precio:12000 },

    // ── BEBIDAS CALIENTES ──────────────────────────────────
    { id:31, cat:"bebidas-cal", emoji:"☕", nombre:"Café", desc:"", precio:3000 },
    { id:32, cat:"bebidas-cal", emoji:"☕", nombre:"Perico", desc:"", precio:2000 },
    { id:33, cat:"bebidas-cal", emoji:"🍫", nombre:"Milo", desc:"", precio:3000 },
    { id:34, cat:"bebidas-cal", emoji:"☕", nombre:"Tinto", desc:"", precio:1800 },
    { id:35, cat:"bebidas-cal", emoji:"🌿", nombre:"Aromática de Hierbas", desc:"", precio:2000 },
    { id:36, cat:"bebidas-cal", emoji:"🍎", nombre:"Aromática de Frutas", desc:"", precio:3000 },
    { id:37, cat:"bebidas-cal", emoji:"🥣", nombre:"Avena Cubana", desc:"", precio:3000 },
    { id:38, cat:"bebidas-cal", emoji:"🥤", nombre:"Masato", desc:"", precio:2000 },

    // ── JUGOS NATURALES (variantes agua/leche como tarjetas separadas) ──
    { id:39, cat:"jugos", emoji:"🫐", nombre:"Jugo de Mora en Agua", desc:"", precio:5000 },
    { id:40, cat:"jugos", emoji:"🫐", nombre:"Jugo de Mora en Leche", desc:"", precio:6000 },
    { id:41, cat:"jugos", emoji:"🍓", nombre:"Jugo de Fresa en Agua", desc:"", precio:5000 },
    { id:42, cat:"jugos", emoji:"🍓", nombre:"Jugo de Fresa en Leche", desc:"", precio:6000 },
    { id:43, cat:"jugos", emoji:"🍈", nombre:"Jugo de Lulo en Agua", desc:"", precio:6000 },
    { id:44, cat:"jugos", emoji:"🍈", nombre:"Jugo de Lulo en Leche", desc:"", precio:7000 },
    { id:45, cat:"jugos", emoji:"🟣", nombre:"Jugo de Maracuyá en Agua", desc:"⚠️ Precio actualizado, verificar.", precio:7500 },
    { id:46, cat:"jugos", emoji:"🟣", nombre:"Jugo de Maracuyá en Leche", desc:"⚠️ Precio actualizado, verificar.", precio:8500 },
    { id:47, cat:"jugos", emoji:"🍈", nombre:"Jugo de Guanábana en Agua", desc:"", precio:6000 },
    { id:48, cat:"jugos", emoji:"🍈", nombre:"Jugo de Guanábana en Leche", desc:"", precio:7000 },
    { id:49, cat:"jugos", emoji:"🥭", nombre:"Jugo de Mango en Agua", desc:"", precio:6000 },
    { id:50, cat:"jugos", emoji:"🥭", nombre:"Jugo de Mango en Leche", desc:"", precio:7000 },
    { id:51, cat:"jugos", emoji:"🥭", nombre:"Jugo Maracumango", desc:"Mezcla de maracuyá y mango.", precio:9000 },
    { id:52, cat:"jugos", emoji:"🍊", nombre:"Jugo de Naranja", desc:"", precio:6000 },
    { id:53, cat:"jugos", emoji:"🍊", nombre:"Jugo de Mandarina", desc:"", precio:7000 },
    { id:54, cat:"jugos", emoji:"🍋", nombre:"Limonada con Limón Mandarino y Panela", desc:"", precio:3000 },
    { id:55, cat:"jugos", emoji:"🍋", nombre:"Limonada con Limón Tahití y Leche Condensada", desc:"", precio:5000 },
    { id:56, cat:"jugos", emoji:"🥥", nombre:"Limonada de Coco", desc:"", precio:8000 },
    { id:57, cat:"jugos", emoji:"🍒", nombre:"Limonada Cerezada", desc:"", precio:8000 },

    // ── GRANIZADOS ─────────────────────────────────────────
    { id:58, cat:"granizados", emoji:"🍊", nombre:"Granizado de Naranja", desc:"Preparado con fruta natural.", precio:8000 },
    { id:59, cat:"granizados", emoji:"🍊", nombre:"Granizado de Mandarina", desc:"Preparado con fruta natural.", precio:8000 },
    { id:60, cat:"granizados", emoji:"☕", nombre:"Granizado de Café", desc:"", precio:8000 },
    { id:61, cat:"granizados", emoji:"🍫", nombre:"Granizado de Chocolate", desc:"", precio:9000 },
    { id:62, cat:"granizados", emoji:"🟣", nombre:"Granizado de Maracuyá", desc:"", precio:7000 },
    { id:63, cat:"granizados", emoji:"🍒", nombre:"Granizado de Cereza", desc:"", precio:7000 },
    { id:64, cat:"granizados", emoji:"🫐", nombre:"Granizado de Mora Azul", desc:"", precio:7000 },
    { id:65, cat:"granizados", emoji:"🍬", nombre:"Granizado de Chicle", desc:"", precio:7000 },
    { id:66, cat:"granizados", emoji:"🍬", nombre:"Granizado Bom Bom", desc:"", precio:7000 },

    // ── SODAS SABORIZADAS ──────────────────────────────────
    { id:67, cat:"sodas", emoji:"🥤", nombre:"Soda de Fresa", desc:"", precio:12000 },
    { id:68, cat:"sodas", emoji:"🥤", nombre:"Soda de Manzana", desc:"", precio:12000 },
    { id:69, cat:"sodas", emoji:"🥤", nombre:"Soda de Maracuyá", desc:"", precio:12000 },
  ]
};
