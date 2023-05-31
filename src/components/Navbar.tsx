import { useTranslation } from 'react-i18next'
import '../css/navbar.css'

export const Navbar = () => {
  const { t } = useTranslation() 

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <a
            href="/"
            style={{ left: '0px', color: 'white', textDecoration: 'none' }}
          >
            {t('rocket_system')}
          </a>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check" id="sandwich">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a className="menu-item" href="rockets">
          {t('rockets')}
        </a>
        <a className="menu-item" href="launches">
          {t('launches')}
        </a>
        <a className="menu-item" href="crews">
          {t('crews')}
        </a>
        <a className="menu-item" href="crewmen">
          {t('crewmen')}
        </a>
      </div>
    </div>
  )
}
