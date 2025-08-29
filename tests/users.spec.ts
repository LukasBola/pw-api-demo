import { expect, test } from '@playwright/test';

// Test REST API: GET /api/users

test('GET /api/users returns 20 users', async ({ request }) => {
  const response = await request.get('http://localhost:3000/api/users', {
    headers: {
      accept: 'application/json',
    },
  });
  expect(response.ok()).toBeTruthy();
  const users = await response.json();
  expect(Array.isArray(users)).toBe(true);
  expect(users.length).toBe(16);
});
