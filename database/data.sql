insert into "vendorAccounts"
("username", "hashedPassword", "firstName", "lastName")
values ('TuneSquad', 'qwertyasdf', 'Michael', 'Jordan');

-- sample listing
insert into "listings"
("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
values (
  (select "userId" from "vendorAccounts" where "username" = 'TuneSquad'),
  'ESC Room Example',
  'This is a description of the room listed. Escape rooms are a great experience for group activity!',
  'https://images.pexels.com/photos/5063469/pexels-photo-5063469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  '123 Candy Cane Lane',
  40,
  2,
  'hard',
  60,
  '7141231234');

-- sample listing
insert into "listings"
("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
values (
  (select "userId" from "vendorAccounts" where "username" = 'TuneSquad'),
  'Bat Cave',
  'This is a description of the room listed. Escape rooms are a great experience for group activity!',
  'https://images.pexels.com/photos/6633488/pexels-photo-6633488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  '123 Candy Cane Lane',
  40,
  2,
  'hard',
  60,
  '8543216548');

-- sample listing
insert into "listings"
("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
values (
  (select "userId" from "vendorAccounts" where "username" = 'TuneSquad'),
  'Atlantis',
  'This is a description of the room listed. Escape rooms are a great experience for group activity!',
  'https://images.pexels.com/photos/9786061/pexels-photo-9786061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  '123 Candy Cane Lane',
  45,
  2,
  'hard',
  60,
  '9654568745');
