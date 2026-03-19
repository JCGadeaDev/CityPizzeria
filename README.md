# City Pizzeria 🍕

Aplicación web de e-commerce para pedidos de pizza. Permite explorar el menú, ver ofertas especiales, gestionar un carrito de compras y completar el proceso de checkout con validación de formulario.

> Proyecto de práctica para demostrar conceptos fundamentales de React: estado, composición de componentes, props y formularios controlados.

---

## Demo

<!-- Agrega aquí el link de tu deploy (Vercel, Netlify, GitHub Pages) -->

---

## Características

- **Menú de pizzas** con 6 opciones y sus precios
- **Sección de ofertas** con descuentos y precios tachados
- **Carrito lateral (sidenav)** con control de cantidades en tiempo real
- **Flujo de checkout en 3 pasos:** carrito → formulario → confirmación
- **Validación de formulario:** nombre, teléfono, tipo de pedido (delivery/pickup) y método de pago
- **Cálculo automático** de subtotal, GST (5%) y total
- **Diseño responsivo** con soporte mobile (hamburger menu)

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19.1.1 | Librería principal de UI |
| React DOM | 19.1.1 | Renderizado en el DOM |
| Bootstrap | 5.3.7 | Framework CSS |
| React Bootstrap | 2.10.10 | Componentes Bootstrap para React |
| Create React App | 5.0.1 | Tooling y configuración del proyecto |
| web-vitals | 2.1.4 | Monitoreo de performance |

**Testing:**
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event

---

## Arquitectura

### Estructura de archivos

```
city-pizzeria/
├── public/
│   └── index.html
└── src/
    ├── index.js              # Entry point — monta App con React.StrictMode
    ├── App.js                # Componente raíz — estado global y layout
    ├── Items.js              # Datos estáticos del menú (6 pizzas)
    ├── Deals.js              # Datos estáticos de ofertas (3 deals)
    ├── App.test.js
    ├── assets/
    │   └── css/
    │       ├── styles.css    # Estilos globales
    │       ├── box.css       # Cards del menú y ofertas
    │       ├── nav-bar.css   # Barra de navegación
    │       └── basket.css    # Sidenav del carrito
    └── components/
        ├── Header.js         # Navbar con logo, links y badge del carrito
        ├── Menu.js           # Grilla de pizzas
        ├── Item.js           # Card individual de pizza (reutilizable)
        ├── DealsSection.js   # Sección de ofertas con badges de descuento
        └── Cart.js           # Carrito completo con checkout y confirmación
```

### Árbol de componentes

```
App (estado global)
├── Header        ← recibe: name, basketCount
├── Menu          ← recibe: items[], addItem()
│   └── Item[]    ← recibe: id, name, desc, price, addItem()
├── DealsSection  ← recibe: deals[], addItem()
└── Cart          ← recibe: items[], removeItem(), clearCart()
    ├── Vista: carrito     (tabla + totales)
    ├── Vista: checkout    (formulario con validación)
    └── Vista: confirmación (resumen del pedido)
```

### Estado (State Management)

Todo el estado está centralizado en `App.js` con React Hooks, sin librerías externas:

```js
const [basket, setBasket] = useState([])    // Items en el carrito con cantidad
const [step, setStep]     = useState('cart') // Paso actual del checkout
const [form, setForm]     = useState({...})  // Datos del formulario
const [errors, setErrors] = useState({})     // Errores de validación
```

**Acciones principales:**
- `addItem()` — agrega pizza o incrementa cantidad si ya existe
- `removeItem()` — decrementa cantidad o elimina si llega a 0
- `clearCart()` — vacía el carrito tras confirmar el pedido

### Estilos

Enfoque híbrido:
- **Bootstrap 5** para layout responsivo y componentes base (grid, buttons, badges, tables, forms)
- **CSS custom** por sección (4 archivos en `assets/css/`)
- **Inline styles** de React para estilos dinámicos
- Sin CSS Modules, sin CSS-in-JS, sin Tailwind

---

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/city-pizzeria.git
cd city-pizzeria

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

```bash
# Generar build de producción
npm run build

# Ejecutar tests
npm test
```

---

## Conceptos de React aplicados

- Composición de componentes y props drilling
- Estado local con `useState`
- Renderizado condicional (3 vistas del carrito)
- Listas con `.map()` y uso de `key`
- Formularios controlados con validación
- Comunicación hijo → padre mediante callbacks

---

## Autor

**JCGadeaDev** — [GitHub](https://github.com/JCGadeaDev) · [Portfolio](https://portafolio-jc-gadea.vercel.app/)
