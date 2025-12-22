---
# GENERAL
theme: default
author: Thomas PIERRE for Atecna
titleTemplate: "%s | Atecna"
title: Atecna
keywords: Formation, A11Y, accessibility, RGAA, WCAG
favicon: atecna/logo-short.svg
colorSchema: light
contextMenu: false
htmlAttrs:
  dir: ltr
  lang: fr

# STYLE
fonts:
  sans: Urbanist
  serif: Robot Slab
  mono: monospace
themeConfig:
  primary: var(--primary-500)
  secondary: var(--secondary-500)

# CONFIG
presenter: true
lineNumbers: true
monaco: true
monacoTypesSource: local
selectable: true
drawings:
  enabled: true
  persist: false
  presenterOnly: true
  syncAll: true
mdc: true

layout: cover # https://sli.dev/builtin/layouts
transition: fade-out
src: ./slides/accueil.html
---

---
title: Programme
src: ./slides/programme.html
---

---
title: moi
src: ./slides/moi.html
---

---
title: Introduction
src: ./slides/1.Introduction.html
---

---
title: Le Cadre Légal
src: ./slides/2.Legal.html
---

# ---
# title: Les Principes Fondamentaux de l'a11Y
# src: ./slides/3.Principes.html
# ---

# ---
# title: Les Principes Fondamentaux de l'a11Y
# src: ./slides/4.Fondamentaux.html
# ---

# ---
# title: Test à l'aveugle
# src: ./slides/5.test.html
# ---

# ---
# title: Le RGAA
# src: ./slides/6.Audit.html
# ---