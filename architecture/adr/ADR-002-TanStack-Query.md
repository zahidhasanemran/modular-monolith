# ADR-002

## Title

Use TanStack Query for Server State

## Status

Accepted

## Context

Application communicates heavily with REST APIs.

Need

- caching
- retries
- optimistic updates
- loading states

## Decision

TanStack Query manages all server state.

No fetch() inside React components.

All requests go through

modules/\*/api/client.ts

## Consequences

Pros

Automatic caching

Automatic retries

DevTools

Cons

Additional dependency.
