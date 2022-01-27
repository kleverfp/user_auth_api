import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUser1643078971599 implements MigrationInterface {
    private userTable = new Table({
        name:'users',
        columns:[
            {
                name:'id',
                type:'uuid',
                isPrimary:true,
                isGenerated:true,
                generationStrategy:'increment'
            },
            {
                name:'name',
                type:'varchar',
                length:'255',
                isNullable:false
            },
            {
                name:'email',
                type:'varchar',
                length:'255',
                isUnique:true,
                isNullable:false
            },
            {
                name:'role',
                type:'varchar',
                length:'25',
                isNullable:false
            },
            {
                name:'status',
                type:'boolean',
                isNullable:false,
                default:true
            },
            {
                name:'password',
                type:'varchar',
                length:'255',
                isNullable:false
            },
            {
                name:'salt',
                type:'varchar',
                length:'255',
                isNullable:false
            },
            {
                name:'confirmationToken',
                type:'varchar',
                length:'64',
                isNullable:true
            },
            {
                name:'recoverToken',
                type:'varchar',
                length:'64',
                isNullable:true
            },
            {
                name: 'created_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            }
        ]
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.userTable);
    }

}
