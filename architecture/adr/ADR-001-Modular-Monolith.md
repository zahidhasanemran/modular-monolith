# ADR-001

## Title

Use Modular Monolith Architecture

## Status

Accepted

## Context

KY Supermarket is a startup.

We have

- 2 frontend developers
- 1 backend developer

Fast delivery is more important than independent deployments.

## Decision

Use Modular Monolith.

Each business capability is implemented as a module.

Every module exposes only index.ts.

Modules cannot import another module's internal files.

## Consequences

Pros

- Easier development
- Easier debugging
- Simple deployment
- Better maintainability

Cons

- Entire application deployed together.
