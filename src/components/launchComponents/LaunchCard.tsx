import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface LaunchCardProps {
  id: string
  launchCode: string
  rocketName: string
  infoButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const LaunchCard = (props: LaunchCardProps) => {
  const { t } = useTranslation()

  return (
    <Card>
      <h2>{props.launchCode}</h2>
      <h3>{props.rocketName}</h3>
      <div className="btn-div">
        <div className="btn btn-blue info-btn" onClick={props.infoButton}>
          {t('moreInfo')}
        </div>
        <div className="btn btn-pink edit-btn" onClick={props.editButton}>
          {t('edit')}
        </div>
        <div className="btn btn-red delete-btn" onClick={props.deleteButton}>
          {t('del')}
        </div>
      </div>
    </Card>
  )
}
