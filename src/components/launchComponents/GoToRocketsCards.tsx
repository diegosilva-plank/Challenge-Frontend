import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

export const GoToRocketsCard = () => {
  const { t } = useTranslation()

  return (
    <Card>
      <h2>{t('goToRocketsMsg')}</h2>
      <div className="btn-div">
        <a href="rockets" style={{ textDecoration: 'none' }}>
          <div className="btn btn-green add-launch-btn">{t('goToRockets')}</div>
        </a>
      </div>
    </Card>
  )
}
