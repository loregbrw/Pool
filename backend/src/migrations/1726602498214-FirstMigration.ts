import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1726602498214 implements MigrationInterface {
    name = 'FirstMigration1726602498214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "username" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "birthdate" datetime NOT NULL, "password" nvarchar(255) NOT NULL, "image" nvarchar(255) NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
