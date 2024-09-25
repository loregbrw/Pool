import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1727280313806 implements MigrationInterface {
    name = 'Migration1727280313806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cards" ALTER COLUMN "dueDate" datetime`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cards" ALTER COLUMN "dueDate" datetime NOT NULL`);
    }

}
