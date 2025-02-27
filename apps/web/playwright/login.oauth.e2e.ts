import { expect, test } from "@playwright/test";

import { IS_GOOGLE_LOGIN_ENABLED } from "@calcom/features/auth/lib/google";
import { isSAMLLoginEnabled } from "@calcom/features/ee/sso/lib/saml";

test("Should display Google Login button", async ({ page }) => {
  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(!IS_GOOGLE_LOGIN_ENABLED, "It should only run if Google Login is installed");

  await page.goto(`/auth/login`);

  await expect(page.locator(`[data-testid=google]`)).toBeVisible();
});

test("Should display SAML Login button", async ({ page }) => {
  // eslint-disable-next-line playwright/no-skipped-test
  test.skip(!isSAMLLoginEnabled, "It should only run if SAML Login is installed");

  // TODO: Fix this later
  // Button is visible only if there is a SAML connection exists (self-hosted)
  // await page.goto(`/auth/login`);
  // await expect(page.locator(`[data-testid=saml]`)).toBeVisible();
});
