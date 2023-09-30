import { ICON } from 'presentation/components/assets/icons/icon'

import 'presentation/styles/global.scss'
export function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <a
        href="https://api.whatsapp.com/send?phone=5519997715391"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ICON.BiLogoWhatsapp className="icon" />
      </a>
    </div>
  )
}
