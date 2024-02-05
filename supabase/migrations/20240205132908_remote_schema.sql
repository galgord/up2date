
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."product_unit_type" AS ENUM (
    'kg',
    'g',
    'lt',
    'ml',
    'unit'
);

ALTER TYPE "public"."product_unit_type" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."Category" (
    "id" bigint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" text,
    "active" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."Category" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Category_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Category_id_seq" OWNED BY "public"."Category"."id";

CREATE TABLE IF NOT EXISTS "public"."Market" (
    "id" bigint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" text,
    "profileId" uuid NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."Market" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."MarketAdress" (
    "id" bigint NOT NULL,
    "marketId" bigint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" text,
    "line1" character varying(255),
    "line2" character varying(255),
    "country" character varying(255),
    "state" character varying(255),
    "city" character varying(255),
    "placeID" character varying(255),
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."MarketAdress" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."MarketAdress_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."MarketAdress_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."MarketAdress_id_seq" OWNED BY "public"."MarketAdress"."id";

CREATE TABLE IF NOT EXISTS "public"."MarketCategory" (
    "marketId" bigint NOT NULL,
    "categoryId" bigint NOT NULL
);

ALTER TABLE "public"."MarketCategory" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Market_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Market_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Market_id_seq" OWNED BY "public"."Market"."id";

CREATE TABLE IF NOT EXISTS "public"."Order" (
    "id" bigint NOT NULL,
    "buyerId" uuid NOT NULL,
    "sellerId" bigint NOT NULL,
    "total" double precision NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."Order" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."OrderProduct" (
    "orderId" bigint NOT NULL,
    "productId" bigint NOT NULL
);

ALTER TABLE "public"."OrderProduct" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Order_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Order_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Order_id_seq" OWNED BY "public"."Order"."id";

CREATE TABLE IF NOT EXISTS "public"."Product" (
    "id" bigint NOT NULL,
    "name" character varying(100) NOT NULL,
    "description" text,
    "marketId" bigint NOT NULL,
    "unit" public.product_unit_type DEFAULT 'unit'::public.product_unit_type,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."Product" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."ProductPhoto" (
    "id" uuid NOT NULL,
    "productId" bigint NOT NULL,
    "url" character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."ProductPhoto" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."ProductProductType" (
    "productId" bigint NOT NULL,
    "productTypeId" bigint NOT NULL
);

ALTER TABLE "public"."ProductProductType" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."ProductType" (
    "id" bigint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" text,
    "visible" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."ProductType" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."ProductType_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."ProductType_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."ProductType_id_seq" OWNED BY "public"."ProductType"."id";

CREATE SEQUENCE IF NOT EXISTS "public"."Product_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Product_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Product_id_seq" OWNED BY "public"."Product"."id";

CREATE TABLE IF NOT EXISTS "public"."Profile" (
    "id" uuid NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    "email" character varying(255),
    "phone" character varying(255),
    "isMarket" boolean DEFAULT false NOT NULL,
    "marketId" bigint,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "public"."Profile" OWNER TO "postgres";

ALTER TABLE ONLY "public"."Category" ALTER COLUMN "id" SET DEFAULT nextval('public."Category_id_seq"'::regclass);

ALTER TABLE ONLY "public"."Market" ALTER COLUMN "id" SET DEFAULT nextval('public."Market_id_seq"'::regclass);

ALTER TABLE ONLY "public"."MarketAdress" ALTER COLUMN "id" SET DEFAULT nextval('public."MarketAdress_id_seq"'::regclass);

ALTER TABLE ONLY "public"."Order" ALTER COLUMN "id" SET DEFAULT nextval('public."Order_id_seq"'::regclass);

ALTER TABLE ONLY "public"."Product" ALTER COLUMN "id" SET DEFAULT nextval('public."Product_id_seq"'::regclass);

ALTER TABLE ONLY "public"."ProductType" ALTER COLUMN "id" SET DEFAULT nextval('public."ProductType_id_seq"'::regclass);

ALTER TABLE ONLY "public"."Category"
    ADD CONSTRAINT "Category_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."MarketAdress"
    ADD CONSTRAINT "MarketAdress_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."MarketCategory"
    ADD CONSTRAINT "MarketCategory_pkey" PRIMARY KEY ("marketId", "categoryId");

ALTER TABLE ONLY "public"."Market"
    ADD CONSTRAINT "Market_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."Market"
    ADD CONSTRAINT "Market_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."OrderProduct"
    ADD CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("orderId", "productId");

ALTER TABLE ONLY "public"."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."ProductPhoto"
    ADD CONSTRAINT "ProductPhoto_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."ProductProductType"
    ADD CONSTRAINT "ProductProductType_pkey" PRIMARY KEY ("productId", "productTypeId");

ALTER TABLE ONLY "public"."ProductType"
    ADD CONSTRAINT "ProductType_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."ProductType"
    ADD CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Profile"
    ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."MarketAdress"
    ADD CONSTRAINT "MarketAdress_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES public."Market"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MarketCategory"
    ADD CONSTRAINT "MarketCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MarketCategory"
    ADD CONSTRAINT "MarketCategory_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES public."Market"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Market"
    ADD CONSTRAINT "Market_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES public."Profile"(id);

ALTER TABLE ONLY "public"."OrderProduct"
    ADD CONSTRAINT "OrderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."OrderProduct"
    ADD CONSTRAINT "OrderProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Order"
    ADD CONSTRAINT "Order_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES public."Profile"(id);

ALTER TABLE ONLY "public"."Order"
    ADD CONSTRAINT "Order_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES public."Market"(id);

ALTER TABLE ONLY "public"."ProductPhoto"
    ADD CONSTRAINT "ProductPhoto_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."ProductProductType"
    ADD CONSTRAINT "ProductProductType_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."ProductProductType"
    ADD CONSTRAINT "ProductProductType_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES public."ProductType"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Product"
    ADD CONSTRAINT "Product_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES public."Market"(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Profile"
    ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MarketAdress"
    ADD CONSTRAINT "fkey_adress_to_market" FOREIGN KEY ("marketId") REFERENCES public."Market"(id);

ALTER TABLE ONLY "public"."MarketCategory"
    ADD CONSTRAINT "fkey_category_to_market" FOREIGN KEY ("marketId") REFERENCES public."Market"(id);

ALTER TABLE ONLY "public"."ProductPhoto"
    ADD CONSTRAINT "fkey_photo_to_product" FOREIGN KEY ("productId") REFERENCES public."Product"(id);

ALTER TABLE ONLY "public"."OrderProduct"
    ADD CONSTRAINT "fkey_product_to_order" FOREIGN KEY ("orderId") REFERENCES public."Order"(id);

ALTER TABLE ONLY "public"."ProductProductType"
    ADD CONSTRAINT "fkey_type_to_product" FOREIGN KEY ("productId") REFERENCES public."Product"(id);

ALTER TABLE "public"."Category" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON "public"."Category" FOR SELECT USING (true);

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."Category" TO "anon";
GRANT ALL ON TABLE "public"."Category" TO "authenticated";
GRANT ALL ON TABLE "public"."Category" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Category_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Category_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Category_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Market" TO "anon";
GRANT ALL ON TABLE "public"."Market" TO "authenticated";
GRANT ALL ON TABLE "public"."Market" TO "service_role";

GRANT ALL ON TABLE "public"."MarketAdress" TO "anon";
GRANT ALL ON TABLE "public"."MarketAdress" TO "authenticated";
GRANT ALL ON TABLE "public"."MarketAdress" TO "service_role";

GRANT ALL ON SEQUENCE "public"."MarketAdress_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."MarketAdress_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."MarketAdress_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."MarketCategory" TO "anon";
GRANT ALL ON TABLE "public"."MarketCategory" TO "authenticated";
GRANT ALL ON TABLE "public"."MarketCategory" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Market_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Market_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Market_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Order" TO "anon";
GRANT ALL ON TABLE "public"."Order" TO "authenticated";
GRANT ALL ON TABLE "public"."Order" TO "service_role";

GRANT ALL ON TABLE "public"."OrderProduct" TO "anon";
GRANT ALL ON TABLE "public"."OrderProduct" TO "authenticated";
GRANT ALL ON TABLE "public"."OrderProduct" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Order_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Order_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Order_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Product" TO "anon";
GRANT ALL ON TABLE "public"."Product" TO "authenticated";
GRANT ALL ON TABLE "public"."Product" TO "service_role";

GRANT ALL ON TABLE "public"."ProductPhoto" TO "anon";
GRANT ALL ON TABLE "public"."ProductPhoto" TO "authenticated";
GRANT ALL ON TABLE "public"."ProductPhoto" TO "service_role";

GRANT ALL ON TABLE "public"."ProductProductType" TO "anon";
GRANT ALL ON TABLE "public"."ProductProductType" TO "authenticated";
GRANT ALL ON TABLE "public"."ProductProductType" TO "service_role";

GRANT ALL ON TABLE "public"."ProductType" TO "anon";
GRANT ALL ON TABLE "public"."ProductType" TO "authenticated";
GRANT ALL ON TABLE "public"."ProductType" TO "service_role";

GRANT ALL ON SEQUENCE "public"."ProductType_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."ProductType_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."ProductType_id_seq" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Product_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Product_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Product_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Profile" TO "anon";
GRANT ALL ON TABLE "public"."Profile" TO "authenticated";
GRANT ALL ON TABLE "public"."Profile" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
