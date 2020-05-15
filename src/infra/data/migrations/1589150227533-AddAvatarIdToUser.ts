import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddAvatarIdToUser1589150227533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey('users',
        new TableForeignKey({
          name: 'avatarUser',
          columnNames: ['avatar_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'avatar',
          onDelete: 'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'userAvatar')

  }

}
