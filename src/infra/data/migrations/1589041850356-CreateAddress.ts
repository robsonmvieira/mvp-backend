import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAddress1589041850356 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'addresses',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isUnique: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'country',
              type: 'varchar'
            },
            {
              name: 'state',
              type: 'varchar'
            },
            {
              name: 'city',
              type: 'varchar'
            },
            {
              name: 'street',
              type: 'varchar'
            },
            {
              name: 'number',
              type: 'varchar'
            },
            {
              name: 'zip_code',
              type: 'varchar'
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
        }))
        // await queryRunner.createForeignKey('addresses',
        // new TableForeignKey({
        //   name: 'addressesUser',
        //   columnNames: ['id'],
        //   referencedColumnNames: ['id'],
        //   referencedTableName: 'users',
        //   onDelete: 'CASCADE'
        // }))
        // await queryRunner.createForeignKey('addresses',
        // new TableForeignKey({
        //   name: 'addressesCompany',
        //   columnNames: ['id'],
        //   referencedColumnNames: ['id'],
        //   referencedTableName: 'companies',
        //   onDelete: 'CASCADE'
        // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // await queryRunner.dropForeignKey('addresses', 'addressesCompany')
      // await queryRunner.dropForeignKey('addresses', 'addressesUser')
      await queryRunner.dropTable('addresses')
    }

}
