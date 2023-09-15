-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CalendarNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "color" TEXT,
    "dateAttatched" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_CalendarNote" ("color", "createdAt", "dateAttatched", "id", "note", "title", "updatedAt") SELECT "color", "createdAt", "dateAttatched", "id", "note", "title", "updatedAt" FROM "CalendarNote";
DROP TABLE "CalendarNote";
ALTER TABLE "new_CalendarNote" RENAME TO "CalendarNote";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
