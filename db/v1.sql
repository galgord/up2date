DO $$ BEGIN
    CREATE TYPE product_unit_type AS ENUM ('kg', 'g', 'lt', 'ml', 'unit');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "Profile" (
  "id" uuid PRIMARY KEY NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255),
  "phone" VARCHAR(255),
  "isMarket" BOOLEAN NOT NULL DEFAULT false,
  "marketId" BIGINT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Market" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL UNIQUE,
  "description" TEXT,
  "profileId" uuid NOT NULL REFERENCES "Profile" (id),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Category" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL UNIQUE,
  "description" TEXT,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "MarketAdress" (
  "id" BIGSERIAL PRIMARY KEY,
  "marketId" BIGINT NOT NULL  REFERENCES "Market" (id) ON DELETE CASCADE,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "line1" VARCHAR(255),
  "line2" VARCHAR(255),
  "country" VARCHAR(255),
  "state" VARCHAR(255),
  "city" VARCHAR(255),
  "placeID" VARCHAR(255),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

alter table "MarketAdress"
  add constraint fkey_adress_to_market
  foreign key ("marketId") 
  references "Market" (id);

comment on constraint fkey_adress_to_market 
  on "MarketAdress"
  is E'@graphql({"foreign_name": "market", "local_name": "adress"})';


CREATE TABLE IF NOT EXISTS "MarketCategory" (
  "marketId" BIGINT NOT NULL,
  "categoryId" BIGINT NOT NULL,
  PRIMARY KEY ("marketId", "categoryId"),
  FOREIGN KEY ("marketId") REFERENCES "Market" (id) ON DELETE CASCADE,
  FOREIGN KEY ("categoryId") REFERENCES "Category" (id) ON DELETE CASCADE
);

alter table "MarketCategory"
  add constraint fkey_category_to_market
  foreign key ("marketId") 
  references "Market" ("id");

comment on constraint fkey_category_to_market 
  on "MarketCategory"
  is E'@graphql({"foreign_name": "market", "local_name": "category"})';

CREATE TABLE IF NOT EXISTS "Order" (
  "id" BIGSERIAL PRIMARY KEY,
  "buyerId" uuid NOT NULL REFERENCES "Profile" (id),
  "sellerId" BIGINT NOT NULL REFERENCES "Market" (id),
  "total" FLOAT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Product" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" varchar(100) NOT NULL,
  "description" text,
  "marketId" BIGINT NOT NULL,
  "unit" product_unit_type DEFAULT 'unit',
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  FOREIGN KEY ("marketId") REFERENCES "Market" (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "ProductType" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL UNIQUE,
  "description" TEXT,
  "visible" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "ProductProductType" (
  "productId" BIGINT NOT NULL,
  "productTypeId" BIGINT NOT NULL,
  PRIMARY KEY ("productId", "productTypeId"),
  FOREIGN KEY ("productId") REFERENCES "Product" (id) ON DELETE CASCADE,
  FOREIGN KEY ("productTypeId") REFERENCES "ProductType" (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "ProductPhoto" (
  "id" UUID NOT NULL PRIMARY KEY,
  "productId" BIGINT NOT NULL,
  "url" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),

  FOREIGN KEY ("productId") REFERENCES "Product" (id) ON DELETE CASCADE
);

alter table "ProductProductType"
  add constraint fkey_type_to_product 
  foreign key ("productId") 
  references "Product" (id);

comment on constraint fkey_type_to_product 
  on "ProductProductType"
  is E'@graphql({"foreign_name": "product", "local_name": "type"})';

alter table "ProductPhoto"
  add constraint fkey_photo_to_product
  foreign key ("productId") 
  references "Product" (id);

comment on constraint fkey_photo_to_product 
  on "ProductPhoto"
  is E'@graphql({"foreign_name": "product", "local_name": "photos"})';


CREATE TABLE IF NOT EXISTS "OrderProduct" (
  "orderId" BIGINT NOT NULL,
  "productId" BIGINT NOT NULL,
  PRIMARY KEY ("orderId", "productId"),
  FOREIGN KEY ("orderId") REFERENCES "Order" (id) ON DELETE CASCADE,
  FOREIGN KEY ("productId") REFERENCES "Product" (id) ON DELETE CASCADE
);

alter table "OrderProduct"
  add constraint fkey_product_to_order
  foreign key ("orderId") 
  references "Order" ("id");

comment on constraint fkey_product_to_order 
  on "OrderProduct"
  is E'@graphql({"foreign_name": "Order", "local_name": "products"})';