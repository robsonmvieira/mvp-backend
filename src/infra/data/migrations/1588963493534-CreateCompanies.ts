import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompanies1588963493534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
      await queryRunner.createTable(
        new Table({
        name: 'companies',
        columns:[
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'cnpj',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: false,
            isUnique: true
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
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('companies')
    }

}
