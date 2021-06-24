import {Selector} from 'testcafe';

export class SignInPage {
    loginField: Selector = Selector('[name="username"]');
    passwordField: Selector = Selector('[action*="submit"] [name="password"]');
    loginButton: Selector = Selector('[class*=password-form-button]');
    loginFormFrame: Selector = Selector('[class="authentication-page"]');
    avatarIcon: Selector = Selector('[data-qa-id="icon-avatar"],vim-core-user-avatar');
    newLayoutAvatar: Selector = Selector(`studcab-layout-current-user,vim-core-user-avatar`);


    async enterCredentials(t: TestController, email: string, password: string) {
        await t
            .typeText(this.loginField, email, {replace: true, paste: true})
            .typeText(this.passwordField, password, {replace: true, paste: true})
            .click(this.loginButton)
    }
}