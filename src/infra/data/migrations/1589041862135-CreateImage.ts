import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateImage1589041862135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'images',
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
      // await queryRunner.createForeignKey('images',
      // new TableForeignKey({
      //   name: 'imageProduct',
      //   columnNames: ['id'],
      //   referencedColumnNames: ['id'],
      //   referencedTableName: 'products',
      //   onDelete: 'CASCADE'
      // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('images', 'imageProduct')
      await queryRunner.dropTable('images')
    }

}
