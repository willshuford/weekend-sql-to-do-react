--db "weekend-to-do-app"

CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY, 
	"name" varchar(225),
	"complete" boolean
	);
	
INSERT INTO "todo" ("name", "complete")
VALUES ('Laundry', false);

INSERT INTO "todo" ("name", "complete")
VALUES ('Homework', false);

INSERT INTO "todo" ("name", "complete")
VALUES ('Clean', false);

INSERT INTO "todo" ("name", "complete")
VALUES ('Groceries', false);

INSERT INTO "todo" ("name", "complete")
VALUES ('Bills', false);

INSERT INTO "todo" ("name", "complete")
VALUES ('Meditate', false);

SELECT * FROM todo;
UPDATE "todo" SET complete =NOT complete WHERE "id"=2'
DELETE FROM "todo" WHERE id=6;
