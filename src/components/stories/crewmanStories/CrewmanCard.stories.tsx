import { Meta, StoryObj } from '@storybook/react'
import { CrewmanCard } from '../../crewmanComponents/CrewmanCard'
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n"
import i18n from "../../../i18n/config"

export default {
    title: 'CrewmanComponents/CrewmanCard',
    component: CrewmanCard,
    args: {
        name: 'Crewman',
        patent: 'test'
    },
    decorators: [
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