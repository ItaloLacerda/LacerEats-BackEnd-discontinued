/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_users` on the `users` table. All the data in the column will be lost.
  - Added the required column `idUsers` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id_users`,
    ADD COLUMN `idUsers` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idUsers`);
