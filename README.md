# Product: KY-Supermarket (E-commerce)

## Features:
* Search - AI based best product suggestion at best price
* Catalogs
* Authentication
* Payments
* Orders
* Shopping Cart
* Reviews 
* Track Order
* Recommendation
* User

## Core Subdomains
----------------
* Catalog
* Orders
* Shopping Cart
* Search with AI Recommendation

## Supporting Subdomains
---------------------
* Payments
* Reviews
* Track Order

## Generic Subdomains
------------------
* Authentication
* User
* Notification    




## Architectural Decission
### STYLE: Modular Monolith
### Architectural Characterstics: 
* Performance (Product page load within 2 sec) 
* Maintainability 
* Agility 
### CONSTRAINS:
* Deploy in AWS
* Supabase Auth 
* Fast Delivery 
### TECH STACK:
* Frontend: Next JS, Transtack Query, Zustand, Tailwind
* Database: Supabase
* Backend: REST API & GraphQL 

## Rules:
* Modules cannot import another module's internal files.
* Shared never imports modules.
* Modules may import
*  - shared
*  - own files
*  - other module's public api 
* Must use roles - no fetch, axios - Transtack query 
* module deprecation rule -
* avoid process.env
* No circular dependency.
* no .../../ import user @/ instead 
* Shared contains zero business logic.
* Each module owns its own types.
* Every module exports only index.ts
* eslint-plugin-import - import order, no-cycle



# Foder Structure
* modules
*   - catalog
*     - features 
*     - components
*     - hooks
*     - utils
*     - types
*     - api
*         queries.ts // TanStack Query hooks
*              getProducts()
*              getProduct()
*              searchProducts()
*          mutations.ts // TanStack Mutation hooks
*              createProduct()
*              updateProduct()
*              deleteProduct()
*          client.ts // fetch/axios/graphql requests
*          dto.ts // request/response shapes
*          index.ts 
*     - store 
*     - index.ts 
*   - search
*   - authentication
*   - payment
*   - orders
*   - shopping-cart
*   - reviews
*   - track-order
*   - users 
* shared
*   - libs
*   - utils
*   - hooks
*   - ui
*   - config
*        client.ts
*        env.ts with zod 
*   - api 
*   - components
* types
*    api.ts 
*    pagination.ts
* stores
* constants/ 
* featureFlags/
*    flags.ts
* architecture/
*    decisions/
*       ADR-001-modular-monolith.md
*        ADR-002-tanstack-query.md
*        ADR-003-public-api.md
*    dependency-rules.md
*    module-boundaries.md
*    folder-structure.md
* .prettierrc
* .prettierignore


# Must use packages: 
* eslint-plugin-boundaries
* eslint
* prettier 
* cva for variants 
* tailwind-merge for Overrides classes
* clsx for Toggles classes 
* dependency-cruiser


# Future Expansion:
* add design system
* write each feature test case 