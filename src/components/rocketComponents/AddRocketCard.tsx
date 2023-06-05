import { MouseEventHandler } from 'react'
import { Card } from '../Card'
import { useTranslation } from 'react-i18next'

interface AddRocketModalProps {
  addRocketBtn: MouseEventHandler<HTMLDivElement>
}

export const AddRocketCard = (props: AddRocketModalProps) => {
  const { t } = useTranslation() 

  return (
    <Card>
      <div className="btn-div">
        <div
          data-cy="add-rocket-btn"
          className="btn btn-green add-rocket-btn"
          onClick={props.addRocketBtn}
        >
          {t('addRocket')}
        </div>
      </div>
    </Card>
  )
}