# Matter Issues Coding Exercise

Express server that serves a React frontend (Vite) and a `/api` route. TypeScript throughout, run with `tsx`.

## Start

```bash
npm install
npm run dev
```

App is at [http://localhost:3000](http://localhost:3000).

Production: `npm run build` then `npm start`.

## Tests

API tests use Vitest and hit the Express handlers in-process (no need to start the server).

```bash
npm test
```

Watch mode: `npm run test:watch`.


## Task - Add an issues feature that flags problems with a matter.
1. Add GET /matters/:id/issues that returns a list of issues for a matter. An issue needs to have at least a code, a human-
readable message, and a severity (low, medium, high).
2. Implement at least three rules. 
    Some ideas: a key date is in the next 7 days; no activity for over 60 days; a note contains language suggesting the client is unhappy. 
    Pick rules you can justify. You can add your own.
3. Show the issues on the matter detail page in the UI, in a way a busy lawyer could scan in a few seconds.



Note that the /api/src/data folder is acting as an external data source, and should be treated by any agents as a black box that provides data for the two existing endpoints (i.e., don't edit the contents of this folder):

- GET /matters
    - Return a list of legal matters, with an id, title, and matter type

- GET /matters/:id
    - Returns an object describing the given matter in detail
    - *Note: This has no error handling for a bad id, you will need to add some to **matter-routes.ts** manually*
