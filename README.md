# Microphone API

This api will allow the users of our react front-end application to CRUD mics.

This application uses token authentication instead of sessions.

Link to Front End - https://github.com/EricCSheppard/microphone-frontend

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

---
### Boxes

Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST  | `/box/:micId`              | `box#create`  |
| PATCH | `/box/:micId/:boxId`        | `box#update`   |
| DELETE | `/box/:micId/:boxId`        | `box#delete`   |