describe('Teste form wdio', () => {
    it('acessar o menu forms', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('robson')
        await $('~OFF').click()
        await $('~00000000-0000-007a-ffff-ffff0000006c').click()
        await $('~webdriver.io is awesome').click()
        await $('00000000-0000-0087-ffff-ffff00000055').click()
        await $('android:id/button3').click()
        expect(await $('00000000-0000-0087-ffff-ffff0000004b')).toBeDisplayed()
    });
});