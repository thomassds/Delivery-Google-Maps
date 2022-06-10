-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "delivery_date" TIMESTAMP(3),
    "id_client" TEXT NOT NULL,
    "id_origin" TEXT NOT NULL,
    "id_destiny" TEXT NOT NULL,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_origin_fkey" FOREIGN KEY ("id_origin") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_destiny_fkey" FOREIGN KEY ("id_destiny") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
