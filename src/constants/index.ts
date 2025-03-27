export * from './menu'; // Export everything from menu.tsx
import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from './forms';
import { LANDING_PAGE_MENU, MenueProps } from "./menu";

type GroupConstantsProps = {
    landipageMenu: MenueProps[]
    signUpForm: AuthFormProps[]
    signInForm: AuthFormProps[]
    // groupList: GroupListProps
    // createGroupPlaceholder: CreateGroupPlaceholderProps
}

export const GROUPLE_CONSTANTS: GroupConstantsProps = {
    landipageMenu: LANDING_PAGE_MENU,
    signUpForm: SIGN_UP_FORM,
    signInForm: SIGN_IN_FORM,
    // groupList: GROUP_LIST,
    // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
}

