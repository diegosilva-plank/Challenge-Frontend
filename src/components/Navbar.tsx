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
        <Link data-cy="nav-rockets" to="/rockets" className="menu-item">{t('rockets')}</Link>
        <Link data-cy="nav-launches"to="/launches" className="menu-item">{t('launches')}</Link>
        <Link data-cy="nav-crews" to="/crews" className="menu-item">{t('crews')}</Link>
        <Link data-cy="nav-crewmen" to="/crewmen" className="menu-item">{t('crewmen')}</Link>
      </div>
    </div>
  )
}
