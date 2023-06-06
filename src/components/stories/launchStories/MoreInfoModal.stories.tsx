import { Meta, StoryObj } from '@storybook/react'
import { MoreInfoModal } from '../../launchComponents/MoreInfoModal'
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n"
import i18n from "../../../i18n/config"

export default {
    title: 'LaunchComponents/MoreInfoModal',
    component: MoreInfoModal,
    args: {
        launch: {
            launch_code: '#0000',
            rocket: { name: 'Rocket' },
            date: '05/05/2023',
            crew: { name: 'Crew' },
            success: true
        }
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