import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface AddCrewmanModalProps {
  addCrewmanBtn: MouseEventHandler<HTMLDivElement>
}

export const AddCrewmanCard = (props: AddCrewmanModalProps) => {
  const { t } = useTranslation()
  
  return (
    <Card>
      <div className="btn-div">
        <div
          className="btn btn-green add-crewman-btn"
          onClick={props.addCrewmanBtn}
        >
          {t('addCrewman')}
        </div>
      </div>
    </Card>
  )
}
