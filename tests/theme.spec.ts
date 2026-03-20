import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should toggle between dark and light mode', async ({ page }) => {
    const container = page.locator('.app-container');
    const toggleButton = page.getByRole('button', { name: /light|dark/i });

    // Initial state (should be dark)
    await expect(container).toHaveAttribute('data-theme', 'dark');
    await expect(toggleButton).toHaveText(/light/i);

    // Toggle to light mode
    await toggleButton.click();
    await expect(container).toHaveAttribute('data-theme', 'light');
    await expect(toggleButton).toHaveText(/dark/i);

    // Toggle back to dark mode
    await toggleButton.click();
    await expect(container).toHaveAttribute('data-theme', 'dark');
    await expect(toggleButton).toHaveText(/light/i);
  });

  test('should persist theme preference in localStorage', async ({ page }) => {
    const toggleButton = page.getByRole('button', { name: /light|dark/i });

    // Change to light mode
    await toggleButton.click();
    
    // Reload page
    await page.reload();
    
    // Check if still in light mode
    const container = page.locator('.app-container');
    await expect(container).toHaveAttribute('data-theme', 'light');
  });
});
