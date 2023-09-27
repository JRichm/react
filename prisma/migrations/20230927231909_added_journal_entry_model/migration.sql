-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryTitle" TEXT NOT NULL,
    "entryText" TEXT NOT NULL,
    "entryImage" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GroceryItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_GroceryItem" ("active", "createdAt", "id", "itemName", "updatedAt") SELECT "active", "createdAt", "id", "itemName", "updatedAt" FROM "GroceryItem";
DROP TABLE "GroceryItem";
ALTER TABLE "new_GroceryItem" RENAME TO "GroceryItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
