import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface CrewCardProps {
  id: string
  name: string
  seeCrewmanButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const CrewCard = (props: CrewCardProps) => {
  const { t } = useTranslation()
  
  return (
    <Card>
      <h2>{props.name}</h2>
      <div className="btn-div">
        <div
          className="btn btn-blue crewmen-btn"
          onClick={props.seeCrewmanButton}
        >
          {t('seeCrewmen')}
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
