import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAppoiments1698391359437 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "customer_id",
                        type: "int"
                    },
                    {
                        name: "tattoo_artist_id",
                        type: "int"
                    },
                    {
                        name: "status",
                        type: "boolean",
                        default: true,                        
                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",                        
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"                 
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["customer_id"],
                        referencedTableName: "customers",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["tattoo_artist_id"],
                        referencedTableName: "tattoo_artists",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE", 
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks");
    }

}
