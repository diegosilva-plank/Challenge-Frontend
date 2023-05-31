import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface RocketCardProps {
  id: string
  name: string
  launchButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const RocketCard = (props: RocketCardProps) => {
  const { t } = useTranslation()
  
  return (
    <Card>
      <h2>{props.name}</h2>
      <div className="btn-div">
        <div className="btn btn-blue launch-btn" onClick={props.launchButton}>
          {t('launch')}
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