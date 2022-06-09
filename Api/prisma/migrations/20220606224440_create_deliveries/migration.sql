-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "delivery_date" DATETIME NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_origin" TEXT NOT NULL,
    "id_destiny" TEXT NOT NULL,
    CONSTRAINT "Delivery_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_id_origin_fkey" FOREIGN KEY ("id_origin") REFERENCES "adresses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_id_destiny_fkey" FOREIGN KEY ("id_destiny") REFERENCES "adresses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
