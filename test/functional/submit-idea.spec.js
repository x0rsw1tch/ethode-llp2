
const { test, trait } = use('Test/Suite')('Submit Idea')

trait('Test/Browser', { headless: true })

test('I should see the submit idea input', async ({ browser }) => {
  const page = await browser.visit('/submit-idea')
  await page.hasElement('input.idea')
})
