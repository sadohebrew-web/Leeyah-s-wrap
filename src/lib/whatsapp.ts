export const WHATSAPP_NUMBER = '2347042428997'

export function buildWhatsAppLink(productName: string, colorName?: string): string {
  const message = colorName
    ? `Hello Leeyah's Wrap, I'm interested in purchasing the ${productName} (${colorName}). Please share payment and delivery details.`
    : `Hello Leeyah's Wrap, I'm interested in purchasing the ${productName}. Please share the available colors and payment/delivery details.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
