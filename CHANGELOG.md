# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Google-analytics.
- Full content search.
- Infer lang from location pathname.

### Fixed

- Error in search caused by absence of description, title or tags.

## [0.2.0] - 2025-01-22

### Added

- Support for more image formats: `(jpg|jpeg|png|gif|webp)`
- Filtering by path prefix. E.g we can now filter by `/DE/`.
- CHANGELOG

### Changed

- Fix `gatsby-plugin-image` errors
- `package.json` with `overrides` of `gatsby` -> `gatsby-script` to `1.4.0`

## [0.1.0] - 2023-13-31

### Added

- Make search box more user-friendly
- Remove error causing fallback images
- Implement use of custom banner
- Add mobile styles
- Upgrade to gatsby 4.19.2
- Downgrade typography 0.16.19
- Downgrade to React 17