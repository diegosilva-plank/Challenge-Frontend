import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface AddCrewModalProps {
  addCrewBtn: MouseEventHandler<HTMLDivElement>
}

export const AddCrewCard = (props: AddCrewModalProps) => {
  const { t } = useTranslation()
  
  return (
    <Card>
      <div className="btn-div">
        <div className="btn btn-green add-crew-btn" onClick={props.addCrewBtn}>
          {t('addCrew')}
        </div>
      </div>
    </Card>
  )
}
