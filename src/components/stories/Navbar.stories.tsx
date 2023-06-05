import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '../Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n"
import i18n from "../../i18n/config"

export default {
    title: 'Components/Navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
        withI18n,
        (Story: React.ComponentType) => (
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        )
    ]
} as Meta

export const Default: StoryObj = {

}