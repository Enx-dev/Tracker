-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "labelsId" INTEGER;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_labelsId_fkey" FOREIGN KEY ("labelsId") REFERENCES "Labels"("id") ON DELETE SET NULL ON UPDATE CASCADE;
