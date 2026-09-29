# Security Policy

This adapter connects ioBroker to cctvQL, so it can reach camera and NVR systems.

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Report it privately through GitHub's **Report a vulnerability** button under this repository's Security tab, or email arunrajiah@gmail.com with "ioBroker.cctvql security" in the subject.

Please include what is affected, steps to reproduce, the possible impact, and any suggested fix.

## What to expect

- We will acknowledge your report within 3 working days.
- We aim to confirm the issue and share a plan within 10 working days.
- We will credit you in the advisory and changelog unless you ask us not to.
- We ask you to give us up to 90 days to release a fix before you disclose publicly.

## Areas we especially care about

- how the adapter stores the cctvQL address and any credentials in ioBroker
- anything that exposes camera streams, snapshots or recordings to someone who should not have access
- dependencies with known vulnerabilities
