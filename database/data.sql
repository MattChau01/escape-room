insert into "vendorAccounts"
("username", "hashedPassword", "firstName", "lastName")
values ('TuneSquad', 'qwertyasdf', 'Michael', 'Jordan');

insert into "listings"
("userId", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit")
values ((select "userId" from "vendorAccounts" where "username" = 'TuneSquad'), 'new escape room', 'https://www.google.com/', '123 Candy Cane Lane', 40, 2, 'hard', 60);
