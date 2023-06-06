import { Meta, StoryObj } from '@storybook/react'
import { EditLaunchModal } from '../../launchComponents/EditLaunchModal'
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n"
import i18n from "../../../i18n/config"

export default {
    title: 'LaunchComponents/EditLaunchModal',
    component: EditLaunchModal,
    args: {
        allCrews: [{ name: 'Crew 1' }, { name: 'Crew 2' }],
        launch: {},
        editLaunch: () => undefined
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