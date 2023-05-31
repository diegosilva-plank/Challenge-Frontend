import { MouseEvent } from 'react'
import '../css/footer.css'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    const element = e.target as HTMLInputElement
    return i18n.changeLanguage(element.value)
  }
  
  return (
    <footer id="footer">
      <div id="footer-div">
        <div id="footer-elements-div">
          <div>© 2023 Rocket System, Inc.</div>
          <div id="language-options">
            <div>{t('languageSelection')}:&nbsp;</div>
            <button className='language-btn' style={{marginLeft: 0}} onClick={changeLanguage} value='en'>English</button>
            <button className='language-btn' onClick={changeLanguage} value='pt'>Português</button>
            <button className='language-btn' style={{marginRight: 0}} onClick={changeLanguage} value='jp'>日本語</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
