import {Selector, Role} from 'testcafe';
import {SignInPage} from "./page-objects/signin.po";

const signinPage = new SignInPage();
fixture(`Group spec`)
   // .page`https://vimbox.skyeng.ru`
    .beforeEach(async t => {

    })

    .afterEach(async t => {

    });

test('Navigate To URL test', async t => {
    const teacherWin = await t.getCurrentWindow();
    // await t.maximizeWindow();
    // // open window for first student
    // const firstStudentWin = await t.openWindow('https://vimbox.skyeng.ru');
    // await t.maximizeWindow();
    // //open window for second student
    // const secondStudentWin = await t.openWindow('https://vimbox.skyeng.ru');
    // await t.maximizeWindow();

    //login as teacher
    await t.switchToWindow(teacherWin);
    const studentUser = Role('https://vimbox.skyeng.ru', async t => {
        await signinPage.enterCredentials(t, `testVimbox123@mailnator.com`, `testpassword321`)
    });
    await t.useRole(studentUser);
    await t.navigateTo(`https://vimbox.skyeng.ru/showcase`)

});