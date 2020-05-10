import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeignKeyToAddressTable1589084141666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('addresses',
      new TableColumn({
        name: 'user_id',
        type: 'uuid'
      }))
      // await queryRunner.addColumn('addressess',
      // new TableColumn({
      //   name: 'company_id',
      //   type: 'uuid'
      // }))
      await queryRunner.createForeignKey('addresses',
        new TableForeignKey({
          name: 'addressessUser',
          referencedColumnNames:['id'],
          columnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE'

        })
      )
    //   await queryRunner.createForeignKey('addressess',
    //   new TableForeignKey({
    //     name: 'addressessCompnay',
    //     referencedColumnNames:['id'],
    //     columnNames: ['id'],
    //     referencedTableName: 'companies',
    //     onDelete: 'CASCADE'

    //   })
    // )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      // await queryRunner.dropForeignKey('addressess', 'addressessCompnay')
      await queryRunner.dropForeignKey('addresses', 'addressessUser')
      // await queryRunner.dropColumn('addressess', 'company_id')
      await queryRunner.dropColumn('addresses', 'user_id')
    }

}
