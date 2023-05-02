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
  'https://upload.wikimedia.org/wikipedia/commons/6/66/Jigsaw_puzzle_01_by_Scouten.jpg',
  '123 Candy Cane Lane',
  40,
  2,
  'easy',
  60,
  '7141231234');

-- sample listing
insert into "listings"
("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
values (
  (select "userId" from "vendorAccounts" where "username" = 'TuneSquad'),
  'Bat Cave',
  'This is a description of the room listed. Escape rooms are a great experience for group activity!',
  'https://live.staticflickr.com/65535/49924899213_b4ee6d0e6b_b.jpg',
  '123 Candy Cane Lane',
  40,
  2,
  'medium',
  60,
  '8543216548');

-- sample listing
insert into "listings"
("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
values (
  (select "userId" from "vendorAccounts" where "username" = 'TuneSquad'),
  'Atlantis',
  'This is a description of the room listed. Escape rooms are a great experience for group activity!',
  'https://images.pexels.com/photos/6956669/pexels-photo-6956669.jpeg',
  '123 Candy Cane Lane',
  45,
  2,
  'hard',
  60,
  '9654568745');
