# ADR-003

## Title

Modules expose only Public API

## Context

Direct imports caused tight coupling.

Example

Orders

↓

Catalog/components/ProductCard.tsx

Changing ProductCard broke Orders.

## Decision

Every module exports

index.ts

Only index.ts may be imported.

Example

✅

import { ProductCard }
from "@/modules/catalog"

❌

import ProductCard
from "@/modules/catalog/components/ProductCard"

## Consequences

Lower coupling.

Better encapsulation.

Safer refactoring.
