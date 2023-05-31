import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface CrewmanCardProps {
  id: string
  name: string
  patent: string
  seeCrewsButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const CrewmanCard = (props: CrewmanCardProps) => {
  const { t } = useTranslation()
  
  return (
    <Card>
      <h2>{props.name}</h2>
      <h3>{props.patent}</h3>
      <div className="btn-div">
        <div className="btn btn-blue crews-btn" onClick={props.seeCrewsButton}>
          {t('seeCrews')}
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