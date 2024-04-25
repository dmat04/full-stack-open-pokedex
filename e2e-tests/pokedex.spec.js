const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText(
      'Pokémon and Pokémon character names are trademarks of Nintendo')
    ).toBeVisible()
  })

  test('a particular pokedex entry can be opened', async ({ page }) => {
    await page.goto('')

    const pokemon = 'ivysaur'

    const link = page.getByRole('link', { name: pokemon })
    await expect(link).toBeVisible()
    await link.click()

    await expect(page.getByText(pokemon)).toBeVisible()
    await expect(page.getByTestId('stats')).toBeVisible()
  })
})