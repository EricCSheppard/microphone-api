# Microphone API

This api will allow the users of our react front-end application to CRUD pets and their toys.

This application uses token authentication instead of sessions.

## Resources
---
### Mics

Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/mics`             | `mics#index`    |
| GET   | `/mics/:id`             | `mics#show`    |
| POST  | `/mics/`              | `mics#create`  |
| PATCH | `/mics/:id`        | `mics#update`   |
| DELETE | `/mics/:id`        | `mics#delete`   |

---
### Users

Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |