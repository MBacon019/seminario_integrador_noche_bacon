// src/presentation/router/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { useAuthStore } from '@/presentation/store/auth.store'
import ProtectedRoute from './ProtectedRoute'
import AppShell from '@/presentation/components/AppShell'
import PlaceholderPage from '../pages/PlaceholderPage'
import CatalogPage from '../pages/catalog/CatalogPage'
import ProductDetailPage from '../pages/catalog/ProductDetailPage'
import CartPage from '../pages/cart/CartPage'

// ─── Lazy imports ─────────────────────────────────────────────────────────────

// Auth (sin shell)
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))

// Órdenes (módulo 7)
const CheckoutPage = lazy(() => import('../pages/orders/CheckoutPage'))
const OrdersPage = lazy(() => import('../pages/orders/OrdersPage'))
const OrderDetailPage = lazy(() => import('../pages/orders/OrderDetailPage'))

// ─── Loader global ────────────────────────────────────────────────────────────

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

// ─── Router ───────────────────────────────────────────────────────────────────

export default function AppRouter() {
  const loadSession = useAuthStore((state) => state.loadSession)

  // Cargar la sesión guardada al iniciar la app.
  // loadSession() restaura los tokens y valida el token con /auth/me/
  useEffect(() => {
    loadSession()
  }, [loadSession])

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ── Rutas de autenticación (sin AppShell) ── */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ── Rutas con AppShell ── */}
          <Route element={<AppShell />}>
            {/* Públicas — placeholder hasta el módulo 4/5 */}
            <Route path="/" element={<CatalogPage/>} />
            <Route path="/catalog" element={<CatalogPage/>} />
            <Route path="/products/:id" element={<ProductDetailPage/>} />

            {/* Requieren autenticación */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/new"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute>
                  <OrderDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <PlaceholderPage title="Perfil — Módulo 8" />
                </ProtectedRoute>
              }
            />

            {/* Requieren autenticación + rol staff — placeholder hasta los módulos 9 a 13 */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Dashboard — Módulo 9" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Categorías — Módulo 10" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Productos — Módulo 11" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Órdenes — Módulo 12" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Usuarios — Módulo 13" />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}