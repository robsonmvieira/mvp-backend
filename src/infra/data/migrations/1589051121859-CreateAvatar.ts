import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAvatar1589051121859 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'avatar',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'original_name',
            type: 'varchar',
          },
          {
            name: 'name_saved',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'wonner',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()'
          }
        ]
      })
    )
    await queryRunner.createForeignKey('users',
      new TableForeignKey(
       {
        name: 'userAvatar',
        columnNames:['id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
       }

      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'userAvatar')
    await queryRunner.dropTable('avatar')
  }

}
