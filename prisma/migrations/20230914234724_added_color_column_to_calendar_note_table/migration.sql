/*
  Warnings:

  - Added the required column `color` to the `CalendarNote` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CalendarNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "dateAttatched" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

INSERT INTO "new_CalendarNote" ("createdAt", "dateAttatched", "id", "note", "title", "updatedAt") SELECT "createdAt", "dateAttatched", "id", "note", "title", "updatedAt" FROM "CalendarNote";
DROP TABLE "CalendarNote";
ALTER TABLE "new_CalendarNote" RENAME TO "CalendarNote";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
