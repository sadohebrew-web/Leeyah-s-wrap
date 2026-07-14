import { WHATSAPP_NUMBER } from '../lib/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Leeyah's Wrap, I have a question about your scarves.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-[55] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" aria-hidden="true">
        <path
          d="M16 4C9.4 4 4 9.4 4 16c0 2.1.55 4.1 1.6 5.9L4 28l6.3-1.65A11.9 11.9 0 0 0 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4Z"
          fill="#fff"
        />
        <path
          d="M16 5.4C10.16 5.4 5.4 10.16 5.4 16c0 1.94.53 3.8 1.5 5.42l.23.39-.95 3.46 3.55-.93.38.22A10.55 10.55 0 0 0 16 26.6c5.84 0 10.6-4.76 10.6-10.6S21.84 5.4 16 5.4Z"
          fill="#25D366"
        />
        <path
          d="M12.4 10.2c-.28-.62-.5-.64-.77-.65l-.66-.01c-.23 0-.6.09-.92.42-.31.34-1.2 1.17-1.2 2.86s1.23 3.31 1.4 3.54c.17.23 2.38 3.81 5.88 5.19 2.9 1.15 3.5.92 4.13.86.63-.06 2.03-.83 2.32-1.63.28-.8.28-1.48.2-1.62-.08-.14-.31-.23-.65-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.88 1.12-1.08 1.35-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.72-1.68-1-.9-1.68-2-1.88-2.34-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.09-.17-.75-1.87-1.06-2.57Z"
          fill="#fff"
        />
      </svg>
    </a>
  )
}
