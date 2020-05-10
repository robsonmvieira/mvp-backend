import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1589041868343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'cpf',
              type: 'varchar'
            },
            {
              name: 'phone_number',
              type: 'varchar'
            },
            {
              name: 'password',
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
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('users')
    }

}
