# Project: edu-todomvc

> Schulungsprojekt zum Erstellen einer Angular-Anwendung.

Dieses Projekt bedient nicht Best-Practices bei der Angular-Anwendungsentwicklung,
sondern stellt eine didaktische Hinführung zu jenen dar. Dabei durchläuft das
Projekt diverse Iterationsstufen, um sich der Entwicklung mit Angular
schrittweise anzunähern.

Die Iterationen werden in Git-Branches wiedergespiegelt.

## Iterationen:

### 00-Common-Project-Configuration

Allgemeine Konfigurations-Änderungen am Starter-Projekt und der
Entwicklungsumgebung. Hierbei beziehe ich mich hauptsächlich aus VS Code.

- Editorconfig
- Linting mit ESLint
- Code-Formatierung mit Prettier
- Angular Language Service

### 01-Template-Syntax

Die erste Iterations-Stufe legt den Fokus auf die Annäherung an die
Template-Syntax. Ausgehend von der Darstellung eines einzelnen Todo-Items
werden die verschiedenen Techniken (Interpolation, Property-Binding,
Standard-Direktiven, Template-Variablen) demonstriert und der normale
Datenfluss im Komponentenbaum (Top-Down) demonstriert. Die Liste
der Todos wird hierbei am Ende lediglich ein Array in einer Todos-Shell
Eigenschaft sein - also nur In-Memory.
