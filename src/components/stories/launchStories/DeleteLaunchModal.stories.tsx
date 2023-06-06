import { Meta, StoryObj } from '@storybook/react'
import { DeleteLaunchModal } from '../../launchComponents/DeleteLaunchModal'
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n"
import i18n from "../../../i18n/config"

export default {
    title: 'LaunchComponents/DeleteLaunchModal',
    component: DeleteLaunchModal,
    args: {
        launch: {},
        deleteLaunch: () => undefined
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