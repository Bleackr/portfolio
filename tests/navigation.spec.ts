import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByText('About Me')).toBeVisible();

    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByText('Featured Projects')).toBeVisible();

    // Navigate to Contact
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByText(/Get In Touch/i)).toBeVisible();

    // Navigate back to Home (Hero)
    await page.getByRole('link', { name: 'MH.' }).or(page.getByRole('link', { name: 'MW.' })).click();
    await expect(page).toHaveURL(/\/$/);
  });
});
