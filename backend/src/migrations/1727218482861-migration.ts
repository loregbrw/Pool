import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1727218482861 implements MigrationInterface {
    name = 'Migration1727218482861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cards" ALTER COLUMN "dueDate" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cards" ALTER COLUMN "dueDate" SET NOT NULL`);
    }

}
