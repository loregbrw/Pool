import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1726837282620 implements MigrationInterface {
    name = 'Migration1726837282620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Permissions" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_e83fa8a46bd5a3bfaa095d40812" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_8845c4d63009189d9372882195e" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d943b40716fbe843eab7ba72e4d" DEFAULT getdate(), "deletedAt" datetime2, "permission" varchar(20) NOT NULL, "userId" uniqueidentifier, "projectId" uniqueidentifier, CONSTRAINT "PK_e83fa8a46bd5a3bfaa095d40812" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Notes" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_d4cfe008ad0b9edfe9aee8c7129" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_40fe6ef108298a9f18ebe9a498e" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_69a474ccafd263d945bb318887b" DEFAULT getdate(), "deletedAt" datetime2, "body" nvarchar(500) NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_d4cfe008ad0b9edfe9aee8c7129" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Tags" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_61aa7408a426fea5dd8416f5a12" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_b69325715862ccae8baee75ac69" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_201460773b5348523df034cc692" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "color" nvarchar(255) NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_61aa7408a426fea5dd8416f5a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Notifications" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_c77268afe7d3c5568da66c5bebe" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_cb31143c1b87f2658191a311bfc" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_78fb33932f2fcbe46212f91acf4" DEFAULT getdate(), "deletedAt" datetime2, "status" bit NOT NULL, "date" datetime NOT NULL, "content" nvarchar(MAX) NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_c77268afe7d3c5568da66c5bebe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Sprints" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_148536d4d902230656681e5d73e" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_2fe9e8009e5e267aafe4d1d1249" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_1dbbb75b2e3bc210af7ff198f96" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "initialDate" datetime NOT NULL, "duration" int NOT NULL, "status" bit NOT NULL, "projectId" uniqueidentifier, CONSTRAINT "PK_148536d4d902230656681e5d73e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Projects" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_b25c37f2cdf0161b4f10ed3121c" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_bd5e67568a56512951980f0cc08" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_a0532cf7c059df707a1ae871558" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "description" nvarchar(500) NOT NULL, "status" bit NOT NULL, "userId" uniqueidentifier, "tagId" uniqueidentifier, CONSTRAINT "PK_b25c37f2cdf0161b4f10ed3121c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "CardTags" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_e424f03546d2742b461f197eff9" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e991534b77184b1785e46aa6870" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_5bfa4f7bcc57ff17d133218a0dc" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "color" nvarchar(255) NOT NULL, "projectId" uniqueidentifier, CONSTRAINT "PK_e424f03546d2742b461f197eff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cards" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_f8d646c98446cc0ef6872e960cc" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_bfc88b6f1d4206efecca35fde84" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_8269a459a61880b0324f17abf4e" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "description" nvarchar(1000) NOT NULL, "dueDate" datetime NOT NULL, "status" bit NOT NULL, "index" int NOT NULL, "columnId" uniqueidentifier, "sectionId" uniqueidentifier, CONSTRAINT "PK_f8d646c98446cc0ef6872e960cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "CardsColumn" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_319a9eb9a9c83b19171b609cbc0" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_584572a77066f43b0fe2f0049a7" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_172c359e13819d01aed5b976dea" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "index" int NOT NULL, "sprintId" uniqueidentifier, CONSTRAINT "PK_319a9eb9a9c83b19171b609cbc0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Sections" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_4b6cce072263b8e9c10478c7a08" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_1b66ef14599020f99ff6f250fff" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_3f9bba615d79ed2b14af5185842" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "color" nvarchar(255) NOT NULL, "index" int NOT NULL, "columnId" uniqueidentifier, CONSTRAINT "PK_4b6cce072263b8e9c10478c7a08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_cards_cards" ("usersId" uniqueidentifier NOT NULL, "cardsId" uniqueidentifier NOT NULL, CONSTRAINT "PK_7a57bae034415b9b4b7a44de0b5" PRIMARY KEY ("usersId", "cardsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_58cb57e2237e8779896c70d1f2" ON "users_cards_cards" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a3f96d2248f7fa3a8e5bc33fa6" ON "users_cards_cards" ("cardsId") `);
        await queryRunner.query(`CREATE TABLE "card_tags_cards_cards" ("cardTagsId" uniqueidentifier NOT NULL, "cardsId" uniqueidentifier NOT NULL, CONSTRAINT "PK_53d691a5dbec66f55d456de397c" PRIMARY KEY ("cardTagsId", "cardsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_539e9b400b04fbece595747695" ON "card_tags_cards_cards" ("cardTagsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_acca7db2870e3836e319e9eee2" ON "card_tags_cards_cards" ("cardsId") `);
        await queryRunner.query(`CREATE TABLE "cards_tag_card_tags" ("cardsId" uniqueidentifier NOT NULL, "cardTagsId" uniqueidentifier NOT NULL, CONSTRAINT "PK_533a45301912106aa8b6156b06e" PRIMARY KEY ("cardsId", "cardTagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d6c8d6f855013062bff0d35928" ON "cards_tag_card_tags" ("cardsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d5ef0dbc1b3cc0eaebc0e0b768" ON "cards_tag_card_tags" ("cardTagsId") `);
        await queryRunner.query(`CREATE TABLE "cards_users_users" ("cardsId" uniqueidentifier NOT NULL, "usersId" uniqueidentifier NOT NULL, CONSTRAINT "PK_205bd64101a4ff041805d411cef" PRIMARY KEY ("cardsId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c75a848cb303bf11d74053e6f5" ON "cards_users_users" ("cardsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_29e45876f52fdfc19e0448357d" ON "cards_users_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" datetime2 NOT NULL CONSTRAINT "DF_4d6dcaa56443847d1fdb3f589cd" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_61ffd183b0382276c2d733ff018" DEFAULT getdate()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "deletedAt" datetime2`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "PK_16d4f7d636df336db11d87413e3"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "id" uniqueidentifier NOT NULL CONSTRAINT "DF_16d4f7d636df336db11d87413e3" DEFAULT NEWSEQUENTIALID()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Permissions" ADD CONSTRAINT "FK_3cb723f9f5d9e9f0352bdbed145" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Permissions" ADD CONSTRAINT "FK_c23c8796ad70dbfd179e59f7893" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Notes" ADD CONSTRAINT "FK_de4642a08a8e66123f34b71a1ba" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Tags" ADD CONSTRAINT "FK_64a23c8460bc3eca5ae3d4c7a67" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Notifications" ADD CONSTRAINT "FK_28a9de2f34e218f2ccc746ed4f7" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Sprints" ADD CONSTRAINT "FK_652df3acce442c9d7b120acbf7a" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Projects" ADD CONSTRAINT "FK_828856727aa053c3e37f698caa9" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Projects" ADD CONSTRAINT "FK_41b9d355bf75682dcf9b8823aee" FOREIGN KEY ("tagId") REFERENCES "Tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CardTags" ADD CONSTRAINT "FK_26cc68b19b25fcae0202a267d3e" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cards" ADD CONSTRAINT "FK_06b2f79aa00b9cf863668ae3838" FOREIGN KEY ("columnId") REFERENCES "CardsColumn"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cards" ADD CONSTRAINT "FK_ad35a3fce143b893ba14f273e7e" FOREIGN KEY ("sectionId") REFERENCES "Sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CardsColumn" ADD CONSTRAINT "FK_2a69d467073add417d81c95847c" FOREIGN KEY ("sprintId") REFERENCES "Sprints"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Sections" ADD CONSTRAINT "FK_6d609de0fa7793d2089f2cbd392" FOREIGN KEY ("columnId") REFERENCES "CardsColumn"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_cards_cards" ADD CONSTRAINT "FK_58cb57e2237e8779896c70d1f26" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_cards_cards" ADD CONSTRAINT "FK_a3f96d2248f7fa3a8e5bc33fa6a" FOREIGN KEY ("cardsId") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "card_tags_cards_cards" ADD CONSTRAINT "FK_539e9b400b04fbece595747695c" FOREIGN KEY ("cardTagsId") REFERENCES "CardTags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "card_tags_cards_cards" ADD CONSTRAINT "FK_acca7db2870e3836e319e9eee2a" FOREIGN KEY ("cardsId") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cards_tag_card_tags" ADD CONSTRAINT "FK_d6c8d6f855013062bff0d35928a" FOREIGN KEY ("cardsId") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cards_tag_card_tags" ADD CONSTRAINT "FK_d5ef0dbc1b3cc0eaebc0e0b768d" FOREIGN KEY ("cardTagsId") REFERENCES "CardTags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cards_users_users" ADD CONSTRAINT "FK_c75a848cb303bf11d74053e6f55" FOREIGN KEY ("cardsId") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cards_users_users" ADD CONSTRAINT "FK_29e45876f52fdfc19e0448357da" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards_users_users" DROP CONSTRAINT "FK_29e45876f52fdfc19e0448357da"`);
        await queryRunner.query(`ALTER TABLE "cards_users_users" DROP CONSTRAINT "FK_c75a848cb303bf11d74053e6f55"`);
        await queryRunner.query(`ALTER TABLE "cards_tag_card_tags" DROP CONSTRAINT "FK_d5ef0dbc1b3cc0eaebc0e0b768d"`);
        await queryRunner.query(`ALTER TABLE "cards_tag_card_tags" DROP CONSTRAINT "FK_d6c8d6f855013062bff0d35928a"`);
        await queryRunner.query(`ALTER TABLE "card_tags_cards_cards" DROP CONSTRAINT "FK_acca7db2870e3836e319e9eee2a"`);
        await queryRunner.query(`ALTER TABLE "card_tags_cards_cards" DROP CONSTRAINT "FK_539e9b400b04fbece595747695c"`);
        await queryRunner.query(`ALTER TABLE "users_cards_cards" DROP CONSTRAINT "FK_a3f96d2248f7fa3a8e5bc33fa6a"`);
        await queryRunner.query(`ALTER TABLE "users_cards_cards" DROP CONSTRAINT "FK_58cb57e2237e8779896c70d1f26"`);
        await queryRunner.query(`ALTER TABLE "Sections" DROP CONSTRAINT "FK_6d609de0fa7793d2089f2cbd392"`);
        await queryRunner.query(`ALTER TABLE "CardsColumn" DROP CONSTRAINT "FK_2a69d467073add417d81c95847c"`);
        await queryRunner.query(`ALTER TABLE "Cards" DROP CONSTRAINT "FK_ad35a3fce143b893ba14f273e7e"`);
        await queryRunner.query(`ALTER TABLE "Cards" DROP CONSTRAINT "FK_06b2f79aa00b9cf863668ae3838"`);
        await queryRunner.query(`ALTER TABLE "CardTags" DROP CONSTRAINT "FK_26cc68b19b25fcae0202a267d3e"`);
        await queryRunner.query(`ALTER TABLE "Projects" DROP CONSTRAINT "FK_41b9d355bf75682dcf9b8823aee"`);
        await queryRunner.query(`ALTER TABLE "Projects" DROP CONSTRAINT "FK_828856727aa053c3e37f698caa9"`);
        await queryRunner.query(`ALTER TABLE "Sprints" DROP CONSTRAINT "FK_652df3acce442c9d7b120acbf7a"`);
        await queryRunner.query(`ALTER TABLE "Notifications" DROP CONSTRAINT "FK_28a9de2f34e218f2ccc746ed4f7"`);
        await queryRunner.query(`ALTER TABLE "Tags" DROP CONSTRAINT "FK_64a23c8460bc3eca5ae3d4c7a67"`);
        await queryRunner.query(`ALTER TABLE "Notes" DROP CONSTRAINT "FK_de4642a08a8e66123f34b71a1ba"`);
        await queryRunner.query(`ALTER TABLE "Permissions" DROP CONSTRAINT "FK_c23c8796ad70dbfd179e59f7893"`);
        await queryRunner.query(`ALTER TABLE "Permissions" DROP CONSTRAINT "FK_3cb723f9f5d9e9f0352bdbed145"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "PK_16d4f7d636df336db11d87413e3"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "DF_61ffd183b0382276c2d733ff018"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "DF_4d6dcaa56443847d1fdb3f589cd"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`DROP INDEX "IDX_29e45876f52fdfc19e0448357d" ON "cards_users_users"`);
        await queryRunner.query(`DROP INDEX "IDX_c75a848cb303bf11d74053e6f5" ON "cards_users_users"`);
        await queryRunner.query(`DROP TABLE "cards_users_users"`);
        await queryRunner.query(`DROP INDEX "IDX_d5ef0dbc1b3cc0eaebc0e0b768" ON "cards_tag_card_tags"`);
        await queryRunner.query(`DROP INDEX "IDX_d6c8d6f855013062bff0d35928" ON "cards_tag_card_tags"`);
        await queryRunner.query(`DROP TABLE "cards_tag_card_tags"`);
        await queryRunner.query(`DROP INDEX "IDX_acca7db2870e3836e319e9eee2" ON "card_tags_cards_cards"`);
        await queryRunner.query(`DROP INDEX "IDX_539e9b400b04fbece595747695" ON "card_tags_cards_cards"`);
        await queryRunner.query(`DROP TABLE "card_tags_cards_cards"`);
        await queryRunner.query(`DROP INDEX "IDX_a3f96d2248f7fa3a8e5bc33fa6" ON "users_cards_cards"`);
        await queryRunner.query(`DROP INDEX "IDX_58cb57e2237e8779896c70d1f2" ON "users_cards_cards"`);
        await queryRunner.query(`DROP TABLE "users_cards_cards"`);
        await queryRunner.query(`DROP TABLE "Sections"`);
        await queryRunner.query(`DROP TABLE "CardsColumn"`);
        await queryRunner.query(`DROP TABLE "Cards"`);
        await queryRunner.query(`DROP TABLE "CardTags"`);
        await queryRunner.query(`DROP TABLE "Projects"`);
        await queryRunner.query(`DROP TABLE "Sprints"`);
        await queryRunner.query(`DROP TABLE "Notifications"`);
        await queryRunner.query(`DROP TABLE "Tags"`);
        await queryRunner.query(`DROP TABLE "Notes"`);
        await queryRunner.query(`DROP TABLE "Permissions"`);
    }

}
