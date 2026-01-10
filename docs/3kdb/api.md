---
sidebar_position: 14
title: API Reference
---

# API Reference

This section describes options for generating and publishing API documentation for `3kdb`:

- Automatic generation: run the appropriate documentation generator for the project's language (Doxygen for C/C++, JSDoc/TypeDoc for JS/TS, Sphinx for Python, Rustdoc for Rust) during your docs build and import the generated output into `docs/api`.
- Manual reference: curate key types, functions, and examples here.

If you tell me the language and preferred generator, I can scaffold a `docs/api/` import pipeline and add an npm `generate-api` script to `package.json`.
