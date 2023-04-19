set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."vendorAccounts" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"createdAt" timestamptz(6) NOT NULL DEFAULT now(),
	CONSTRAINT "vendorAccount_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."listings" (
	"entryId" serial NOT NULL,
	"userId" int NOT NULL,
	"description" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"createdAt" timestamptz(6) NOT NULL DEFAULT now(),
	"address" TEXT NOT NULL,
	"price" INT NOT NULL,
	"minimumPlayers" INT NOT NULL,
	"difficulty" TEXT NOT NULL,
	"timeLimit" int NOT NULL,
	CONSTRAINT "listings_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "listings" ADD CONSTRAINT "listings_fk0" FOREIGN KEY ("userId") REFERENCES "vendorAccounts"("userId");
