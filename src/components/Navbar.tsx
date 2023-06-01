import { useTranslation } from 'react-i18next'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { t } = useTranslation() 

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/" style={{ left: '0px', color: 'white', textDecoration: 'none' }}> {t('rocket_system')}</Link>
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
        <Link to="/rockets" className="menu-item">{t('rockets')}</Link>
        <Link to="/launches" className="menu-item">{t('launches')}</Link>
        <Link to="/crews" className="menu-item">{t('crews')}</Link>
        <Link to="/crewmen" className="menu-item">{t('crewmen')}</Link>
      </div>
    </div>
  )
}
