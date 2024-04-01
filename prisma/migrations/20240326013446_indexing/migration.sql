

-- AlterTable
ALTER TABLE `EntryAnalysis` MODIFY `color` TEXT NOT NULL DEFAULT('#0101fe');

-- CreateIndex
CREATE UNIQUE INDEX `JournalEntry_userId_id_key` ON `JournalEntry`(`userId`, `id`);
