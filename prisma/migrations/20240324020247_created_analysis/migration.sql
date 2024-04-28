-- AlterTable
ALTER TABLE `JournalEntry` ADD COLUMN `status` ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT';

-- CreateTable
 CREATE TABLE `EntryAnalysis` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    `entryId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `mood` TEXT NOT NULL,
    `subject` TEXT NOT NULL,
    `negative` BOOLEAN NOT NULL,
    `summary` TEXT NOT NULL,
    `color` TEXT DEFAULT('#0101fe'),
    `sentimentScore` DOUBLE DEFAULT 0,

    INDEX `EntryAnalysis_userId_idx`(`userId`),
    UNIQUE INDEX `EntryAnalysis_entryId_key`(`entryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
