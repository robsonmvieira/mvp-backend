import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeignKeyAddressToCompany1589129511084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('companies',
        new TableColumn({
          name: 'address_id',
          type: 'uuid'
        })
      )
      await queryRunner.createForeignKey('companies',
        new TableForeignKey({
          name: 'companyAddress',
          referencedColumnNames: ['id'],
          columnNames: ['address_id'],
          referencedTableName: 'addresses',
          onDelete: 'SET NULL'
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('companies', 'companyAddress')
      await queryRunner.dropColumn('companies', 'address_id')

    }

}
