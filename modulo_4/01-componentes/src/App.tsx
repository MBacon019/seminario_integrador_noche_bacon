// src/App.tsx

import UserGreeting from './components/UserGreeting'
import WelcomeBanner       from './components/WelcomeBanner'
import DigitalCounter from './useState/DigitalCounter'
import TaskManager from './useState/TaskManager'
import UserProfileForm from './useState/UserProfile'
import BasicCounter from './useReducer/BasicCounter'
import RegistrationForm from './useReducer/RegistrationForm'
import ShoppingCart from './useReducer/ShoppingCart'
import ThemeToggle from './useContext/ThemeToggle'
import UserBadge from './useContext/UserBadge'
import LoginForm from './useContext/LoginForm'
import AppHeader from './useContext/AppHeader'
import PrimeSieve from './useMemo/PrimeSieve'
import FilteredCatalog from './useMemo/FilteredCatalog'
import OrderMetrics from './useMemo/OrderMetrics'
import MultiTagFilter from './useMemo/MultiTagFilter'
import MemoizedList from './useCallback/MemoizedList'
import SearchWithFetch from './useCallback/SearchWithFetch'
import FilterTable from './useCallback/FilterTable'
import PaginatedFetch from './useCallback/PaginatedFetch'
import { useAuth } from './contexts/AuthContext'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// │  14  DigitalCounter      — useState: contador con step configurable     │
// │  15  UserProfileForm     — useState: formulario con múltiples campos    │
// │  16  TaskManager         — useState: CRUD de tareas                     │
// ├──────────────────────────────────────────────────────────────────────────┤
// │  SECCIÓN: useReducer                                                    │
// │  17  BasicCounter       — useReducer básico con 4 acciones tipadas      │
// │  18  RegistrationForm   — formulario con validación y estados de envío  │
// │  19  ShoppingCart       — carrito de compras completo con useReducer    │
// ├──────────────────────────────────────────────────────────────────────────┤
// │  SECCIÓN: useContext                                                    │
// │  20  ThemeToggle       — botón que alterna el tema desde el contexto    │
// │  21  UserBadge         — badge de usuario autenticado con logout        │
// │  22  LoginForm         — formulario de login conectado a AuthContext    │
// │  23  AppHeader         — header que consume dos contextos simultáneos   │
// ├──────────────────────────────────────────────────────────────────────────┤
// │  SECCIÓN: useMemo                                                       │
// │  24  PrimeSieve        — useMemo: criba de primos con slider + counter  │
// │  25  FilteredCatalog   — dos useMemo encadenados: filtrar → ordenar     │
// │  26  OrderMetrics      — múltiples useMemo derivados de un filtro       │
// │  27  MultiTagFilter    — filtro AND por tags con conteos memoizados     │
// ├──────────────────────────────────────────────────────────────────────────┤
// │  SECCIÓN: useCallback                                                   │
// │  28  MemoizedList      — useCallback + React.memo: evita re-renders     │
// │  29  SearchWithFetch   — useCallback en deps de useEffect (sin bucle)   │
// │  30  FilterTable       — tres callbacks estables, tabla memoizada       │
// │  31  PaginatedFetch    — useCallback con [page] para paginación         │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 17

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  const { state } = useAuth()

  const content =
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :
    PASO === 14 ? <DigitalCounter label='Contador' step={1} /> :
    PASO === 15 ? <UserProfileForm /> :
    PASO === 16 ? <TaskManager /> :

    PASO === 17 ? <BasicCounter /> :
    PASO === 18 ? <RegistrationForm /> :
    PASO === 19 ? <ShoppingCart /> :
    PASO === 20 ? <ThemeToggle /> :
    PASO === 21 ? <UserBadge /> :
    PASO === 22 ? <LoginForm /> :
    PASO === 23 ? <AppHeader /> :
    PASO === 24 ? <PrimeSieve /> :
    PASO === 25 ? <FilteredCatalog /> :
    PASO === 26 ? <OrderMetrics /> :
    PASO === 27 ? <MultiTagFilter /> :
    PASO === 28 ? <MemoizedList /> :
    PASO === 29 ? <SearchWithFetch /> :
    PASO === 30 ? <FilterTable /> :
    PASO === 31 ? <PaginatedFetch /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  const sectionTitle =
    PASO >= 17 && PASO <= 19 ? 'useReducer' :
    PASO >= 20 && PASO <= 23 ? 'useContext' :
    PASO >= 24 && PASO <= 27 ? 'useMemo' :
    PASO >= 28 && PASO <= 31 ? 'useCallback' : ''

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {sectionTitle && (
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#6b7280', marginBottom: 8,
        }}>
          {sectionTitle}
        </div>
      )}
      {(PASO >= 20 && PASO <= 22) ? (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      ) : (
        content
      )}
    </main>
  )
}
