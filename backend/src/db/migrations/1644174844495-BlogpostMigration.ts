import {MigrationInterface, QueryRunner} from "typeorm";

export class BlogpostMigration1644174844495 implements MigrationInterface {
    name = 'BlogpostMigration1644174844495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blogpost" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "author" character varying NOT NULL, "likes" integer, CONSTRAINT "PK_3b62414e6a3029221a15c81884c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blogpost"`);
    }

}
