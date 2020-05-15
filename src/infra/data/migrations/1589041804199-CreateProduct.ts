import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduct1589041804199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'products',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'

            },
            {
              name: 'title',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'price',
              type: 'varchar',
            },
            {
              name: 'available',
              type: 'boolean',
              default: true,
            },
            {
              name: 'company_id',
              type: 'uuid'
            },
            {
              name: 'image_id',
              type: 'uuid',
              isNullable: true
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
      await queryRunner.createForeignKey('products',
        new TableForeignKey({
          name: 'productCompany',
          columnNames: ['company_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'companies',
          onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('products', 'productCompany')
      await queryRunner.dropTable('products')
    }

}
