# Security Guidelines

## Input Validation

Validate:

- Form inputs
- Invoice fields
- Query parameters

Never trust client input.

## Prevent

- XSS
- Injection attacks
- HTML injection
- Malformed PDF data

## Secrets

Never:

- Hardcode secrets
- Commit API keys
- Expose environment variables

## Storage

Do not store:

- Sensitive user data
- Financial records
- Authentication tokens

## Dependencies

Review dependencies before adding them.

Prefer well-maintained libraries.