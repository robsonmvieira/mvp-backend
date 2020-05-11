import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeignKeyToAddressTable1589084141666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('addresses',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true
      }))

      await queryRunner.addColumn('addresses',
      new TableColumn({
        name: 'company_id',
        type: 'uuid',
        isNullable: true
      }))
      await queryRunner.createForeignKey('addresses',
        new TableForeignKey({
          name: 'addressessUser',
          referencedColumnNames:['id'],
          columnNames: ['user_id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE'
        })
      )
      await queryRunner.createForeignKey('addresses',
      new TableForeignKey({
        name: 'addressessCompnay',
        referencedColumnNames:['id'],
        columnNames: ['company_id'],
        referencedTableName: 'companies',
        onDelete: 'CASCADE',


      })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('addresses', 'addressessCompnay')
      await queryRunner.dropForeignKey('addresses', 'addressessUser')
      await queryRunner.dropColumn('addresses', 'company_id')
      await queryRunner.dropColumn('addresses', 'user_id')
    }

}
