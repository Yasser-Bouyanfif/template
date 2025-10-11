"use client";

import { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, MapPin, PackageCheck, Truck } from "lucide-react";
import { CartContext, CartContextType } from "../contexts/CartContext";

interface Address {
  fullName?: string;
  company?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  phone?: string;
}

interface Shipping {
  carrier?: string;
  price?: number;
}

interface Order {
  id: string;
  orderNumber: string;
  total: number;
  subtotal: number;
  orderStatus: string;
  createdAt: string;
  shippingAddress?: Address;
  billingAddress?: Address;
  shipping?: Shipping;
}

function SuccessPage() {
  const {
    cart,
    clearCart,
    shippingMethod,
    shippingAddress,
    billingAddress,
    useSameAddressForBilling,
  } = useContext(
    CartContext
  ) as CartContextType;
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);


  useEffect(() => {
    const rawStripeSessionId = new URLSearchParams(window.location.search).get(
      "session_id"
    );
    const stripeSessionId = rawStripeSessionId?.trim();
    if (!stripeSessionId) {
      router.push("/cart");
      return;
    }

    const fetchOrderBySession = async () => {
      try {
        const response = await fetch("/api/order/by-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stripeSessionId }),
        });

        if (!response.ok) {
          console.error(
            "Échec de la récupération de la commande",
            await response.text()
          );
          return null;
        }

        const data = await response.json();
        setOrder(data.order);
        return data.order as Order;
      } catch (error) {
        console.error("Échec de la récupération de la commande", error);
        return null;
      }
    };

    const createOrder = async () => {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: cart.map(({ id, documentId }) => ({ id, documentId })),
          stripeSessionId,
          userEmail: user?.emailAddresses?.[0]?.emailAddress,
          shippingMethod,
          shippingAddress,
          billingAddress: useSameAddressForBilling
            ? shippingAddress
            : billingAddress,
        }),
      });

      if (!response.ok) {
        console.error(
          "Échec de la création de la commande",
          await response.text()
        );
        router.push("/cart");
        throw new Error("Order creation failed");
      }

      try {
        const resendResponse = await fetch("/api/resend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stripeSessionId }),
        });

        if (!resendResponse.ok) {
          console.error(
            "Échec de l’envoi de l’email de confirmation",
            await resendResponse.text()
          );
        }
      } catch (error) {
        console.error("Échec de l’envoi de l’email de confirmation", error);
      }

      const orderData = await fetchOrderBySession();
      if (!orderData) {
        router.push("/cart");
        throw new Error("Order fetch after creation failed");
      }

      clearCart();
    };

    const handleOrderFlow = async () => {
      if (!user || order) {
        return;
      }

      setIsLoading(true);

      try {
        if (cart.length > 0) {
          await createOrder();
        } else {
          const fetchedOrder = await fetchOrderBySession();
          if (!fetchedOrder) {
            router.push("/cart");
          }
        }
      } catch (error) {
        console.error("Erreur lors du traitement de la commande", error);
      } finally {
        setIsLoading(false);
      }
    };

    handleOrderFlow();
  }, [
    billingAddress,
    cart,
    clearCart,
    order,
    router,
    shippingAddress,
    shippingMethod,
    useSameAddressForBilling,
    user,
  ]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Commande non trouvée</h2>
          <p className="text-gray-600 mb-6">Nous n&apos;avons pas pu récupérer les détails de votre commande.</p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.createdAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 rounded-full p-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-semibold text-gray-900">Commande confirmée</h1>
                  <p className="mt-2 text-sm text-gray-600">
                    Nous avons bien reçu votre commande. Un email de confirmation a été envoyé à{" "}
                    <span className="font-medium">
                      {user?.emailAddresses?.[0]?.emailAddress}
                    </span>
                    .
                  </p>
                  <p className="mt-2 text-xs text-gray-500 font-bold">
                    Pensez à vérifier vos courriers indésirables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* En-tête de la commande */}
          <div className="px-6 py-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Récapitulatif de la commande</h2>
              <p className="mt-1 text-sm text-gray-500">
                N° de commande: <span className="font-medium">{order.orderNumber}</span>
              </p>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                <CheckCircle2 className="h-4 w-4 mr-1.5" />
                Paiement confirmé
              </div>
            </div>
          </div>

          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-base font-medium text-gray-900 mb-4">Détails de la commande</h3>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 rounded-md p-3">
                  <PackageCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Commande en cours de traitement.</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Nous avons bien reçu votre commande. Suivez son avancement sur votre espace client dans la rubrique
                    {" "}
                    <Link href="/orders" className="font-medium text-emerald-600 underline underline-offset-2">
                      Mes commandes
                    </Link>
                    .
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Date de commande: {orderDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Adresses et méthode de livraison */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Adresse de livraison */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Adresse de livraison</h4>
                  <div className="bg-gray-50 rounded-lg p-4 h-full">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Truck className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{order.shippingAddress?.fullName}</p>
                        {order.shippingAddress?.company && (
                          <p className="text-sm text-gray-500">{order.shippingAddress.company}</p>
                        )}
                        <p className="text-sm text-gray-500">{order.shippingAddress?.address1}</p>
                        {order.shippingAddress?.address2 && (
                          <p className="text-sm text-gray-500">{order.shippingAddress.address2}</p>
                        )}
                        <p className="text-sm text-gray-500">
                          {order.shippingAddress?.postalCode} {order.shippingAddress?.city}
                        </p>
                        <p className="text-sm text-gray-500">{order.shippingAddress?.country}</p>
                        {order.shippingAddress?.phone && (
                          <p className="mt-2 text-sm text-gray-500">Tél: {order.shippingAddress.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adresse de facturation */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Adresse de facturation</h4>
                  <div className="bg-gray-50 rounded-lg p-4 h-full">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{order.billingAddress?.fullName}</p>
                        {order.billingAddress?.company && (
                          <p className="text-sm text-gray-500">{order.billingAddress.company}</p>
                        )}
                        <p className="text-sm text-gray-500">{order.billingAddress?.address1}</p>
                        {order.billingAddress?.address2 && (
                          <p className="text-sm text-gray-500">{order.billingAddress.address2}</p>
                        )}
                        <p className="text-sm text-gray-500">
                          {order.billingAddress?.postalCode} {order.billingAddress?.city}
                        </p>
                        <p className="text-sm text-gray-500">{order.billingAddress?.country}</p>
                        {order.billingAddress?.phone && (
                          <p className="mt-2 text-sm text-gray-500">Tél: {order.billingAddress.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode de livraison */}
              {order.shipping && (
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Méthode de livraison</h4>
                  <div className="bg-gray-50 rounded-lg p-4 w-full">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <PackageCheck className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {order.shipping.carrier || 'Livraison standard'}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Frais de port: {order.shipping.price !== undefined && order.shipping.price > 0 
                            ? `${order.shipping.price.toFixed(2)} €` 
                            : 'Offerts'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-base font-medium text-gray-900 mb-4">Récapitulatif</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">Sous-total</span>
                <span className="font-medium text-gray-900">{(order.total - (order.shipping?.price || 0)).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                  <span className="text-gray-500">Frais de livraison</span>
                  <span className="font-medium text-gray-900">
                    {order.shipping?.price?.toFixed(2) ?? "0.00"} €
                </span>
              </div>
              <div className="flex justify-between py-2 text-base font-medium text-gray-900 border-t border-gray-200 mt-3 pt-3">
                <span>Total TTC</span>
                <span>{order.total.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Pied de page */}
          <div className="px-6 py-5 bg-gray-50 text-center sm:px-6">
            <p className="text-sm text-gray-500 mb-4">
              Un problème avec votre commande ?
              <Link
                href="/#contact"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                {" "}
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
