-- CreateTable
CREATE TABLE `SideMenu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item` VARCHAR(191) NOT NULL,
    `bookingsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bookings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pnr` VARCHAR(191) NOT NULL,
    `agent` VARCHAR(191) NOT NULL,
    `pax` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `fligths` VARCHAR(191) NOT NULL,
    `departure` VARCHAR(191) NOT NULL,
    `travel` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total` VARCHAR(191) NOT NULL,
    `expiration` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SideMenu` ADD CONSTRAINT `SideMenu_bookingsId_fkey` FOREIGN KEY (`bookingsId`) REFERENCES `Bookings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
