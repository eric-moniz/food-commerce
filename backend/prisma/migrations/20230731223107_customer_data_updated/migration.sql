/*
  Warnings:

  - You are about to drop the column `fullname` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "fullname",
ADD COLUMN     "fullName" VARCHAR(255) NOT NULL;
