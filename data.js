let pokemon = [
  {
    "classification": "Tiny Turtle Pokemon",
    "name": "Squirtle",
    "dexNum": 7,
    "weightKg": 9,
    "heightM": 0.5,
    "weightLbs": 20,
    "heightFt": 1.6,
    "factoid": "Squirts water from its mouth with surprising accuracy. It can hit targets over 160 feet away."
  },
  {
    "classification": "Turtle Pokemon",
    "name": "Wartortle",
    "dexNum": 8,
    "weightKg": 22.5,
    "heightM": 1,
    "weightLbs": 50,
    "heightFt": 3.3,
    "factoid": "Its fluffy tail is a symbol of long life. Older Wartortle have darker, more tattered tails."
  },
  {
    "classification": "Shellfish Pokemon",
    "name": "Blastoise",
    "dexNum": 9,
    "weightKg": 85.5,
    "heightM": 1.6,
    "weightLbs": 188,
    "heightFt": 5.2,
    "factoid": "The water cannons on its shell can blast through thick steel at over 100 mph."
  },
  {
    "classification": "Duck Pokemon",
    "name": "Psyduck",
    "dexNum": 54,
    "weightKg": 19.6,
    "heightM": 0.8,
    "weightLbs": 43,
    "heightFt": 2.6,
    "factoid": "Always suffering from a splitting headache. Its psychic powers leak out when the pain peaks."
  },
  {
    "classification": "Duck Pokemon",
    "name": "Golduck",
    "dexNum": 55,
    "weightKg": 76.6,
    "heightM": 1.7,
    "weightLbs": 169,
    "heightFt": 5.6,
    "factoid": "The gem on its forehead glows when it unleashes psychic energy. It is also an incredibly fast swimmer."
  },
  {
    "classification": "Tadpole Pokemon",
    "name": "Poliwag",
    "dexNum": 60,
    "weightKg": 12.4,
    "heightM": 0.6,
    "weightLbs": 27,
    "heightFt": 2,
    "factoid": "Its skin is so thin you can see its spiral innards from the outside. It uses its tail as a rudder."
  },
  {
    "classification": "Tadpole Pokemon",
    "name": "Poliwhirl",
    "dexNum": 61,
    "weightKg": 20,
    "heightM": 1,
    "weightLbs": 44,
    "heightFt": 3.3,
    "factoid": "The spiral on its belly hypnotizes opponents. Staring too long can make anyone sleepy."
  },
  {
    "classification": "Tadpole Pokemon",
    "name": "Poliwrath",
    "dexNum": 62,
    "weightKg": 54,
    "heightM": 1.3,
    "weightLbs": 119,
    "heightFt": 4.3,
    "factoid": "An Olympic-level swimmer with arms built for combat. It can outswim even professional human divers."
  },
  {
    "classification": "Jellyfish Pokemon",
    "name": "Tentacool",
    "dexNum": 72,
    "weightKg": 45.5,
    "heightM": 0.9,
    "weightLbs": 100,
    "heightFt": 3,
    "factoid": "Its body is 99% water. It can absorb and redirect sunlight through its crystal-like body parts."
  },
  {
    "classification": "Jellyfish Pokemon",
    "name": "Tentacruel",
    "dexNum": 73,
    "weightKg": 55,
    "heightM": 1.6,
    "weightLbs": 121,
    "heightFt": 5.2,
    "factoid": "Can extend up to 80 tentacles to ensnare prey. It controls its tentacle count with ease."
  },
  {
    "classification": "Dopey Pokemon",
    "name": "Slowpoke",
    "dexNum": 79,
    "weightKg": 36,
    "heightM": 1.2,
    "weightLbs": 79,
    "heightFt": 3.9,
    "factoid": "Takes 5 seconds to feel pain after being bitten. It uses its tail as fishing bait without noticing."
  },
  {
    "classification": "Hermit Crab Pokemon",
    "name": "Slowbro",
    "dexNum": 80,
    "weightKg": 78.5,
    "heightM": 1.6,
    "weightLbs": 173,
    "heightFt": 5.2,
    "factoid": "A Shellder biting its tail triggers a chemical reaction that makes Slowpoke smarter, relatively speaking."
  },
  {
    "classification": "Sea Lion Pokemon",
    "name": "Seel",
    "dexNum": 86,
    "weightKg": 90,
    "heightM": 1.1,
    "weightLbs": 198,
    "heightFt": 3.6,
    "factoid": "Thrives in freezing waters. The horn on its head is used to break through Arctic ice."
  },
  {
    "classification": "Sea Lion Pokemon",
    "name": "Dewgong",
    "dexNum": 87,
    "weightKg": 120,
    "heightM": 1.7,
    "weightLbs": 265,
    "heightFt": 5.6,
    "factoid": "Sleeps on the seafloor in cold water. The colder the temperature, the more energetic it becomes."
  },
  {
    "classification": "Bivalve Pokemon",
    "name": "Shellder",
    "dexNum": 90,
    "weightKg": 4,
    "heightM": 0.3,
    "weightLbs": 9,
    "heightFt": 1,
    "factoid": "Its shell is harder than diamond. It clamps shut with incredible force to protect its soft body."
  },
  {
    "classification": "Bivalve Pokemon",
    "name": "Cloyster",
    "dexNum": 91,
    "weightKg": 132.5,
    "heightM": 1.5,
    "weightLbs": 292,
    "heightFt": 4.9,
    "factoid": "Even a bomb can't crack its shell. It propels itself by shooting water from its opening."
  },
  {
    "classification": "River Crab Pokemon",
    "name": "Krabby",
    "dexNum": 98,
    "weightKg": 6.5,
    "heightM": 0.4,
    "weightLbs": 14,
    "heightFt": 1.3,
    "factoid": "When food is scarce, it dissolves bubbles with its claws and eats them as a substitute."
  },
  {
    "classification": "Pincer Pokemon",
    "name": "Kingler",
    "dexNum": 99,
    "weightKg": 60,
    "heightM": 1.3,
    "weightLbs": 132,
    "heightFt": 4.3,
    "factoid": "Its oversized claw can crush steel beams. It is so heavy that Kingler tires out quickly."
  },
  {
    "classification": "Dragon Pokemon",
    "name": "Horsea",
    "dexNum": 116,
    "weightKg": 8,
    "heightM": 0.4,
    "weightLbs": 18,
    "heightFt": 1.3,
    "factoid": "Wraps its tail around coral to anchor itself in strong currents. Spits ink when threatened."
  },
  {
    "classification": "Dragon Pokemon",
    "name": "Seadra",
    "dexNum": 117,
    "weightKg": 25,
    "heightM": 1.2,
    "weightLbs": 55,
    "heightFt": 3.9,
    "factoid": "Can swim backwards just as fast as forwards. Its sharp fins can puncture thick wetsuits."
  },
  {
    "classification": "Goldfish Pokemon",
    "name": "Goldeen",
    "dexNum": 118,
    "weightKg": 15,
    "heightM": 0.6,
    "weightLbs": 33,
    "heightFt": 2,
    "factoid": "Its elegant fins flow like a ballgown. Its horn is sharp enough to pierce boat hulls."
  },
  {
    "classification": "Goldfish Pokemon",
    "name": "Seaking",
    "dexNum": 119,
    "weightKg": 39,
    "heightM": 1.3,
    "weightLbs": 86,
    "heightFt": 4.3,
    "factoid": "Uses its horn to drill into boulders and make nests. Males compete with horn-drilling contests."
  },
  {
    "classification": "Starshape Pokemon",
    "name": "Staryu",
    "dexNum": 120,
    "weightKg": 34.5,
    "heightM": 0.8,
    "weightLbs": 76,
    "heightFt": 2.6,
    "factoid": "As long as its red core remains intact, it can regenerate any lost limbs overnight."
  },
  {
    "classification": "Mysterious Pokemon",
    "name": "Starmie",
    "dexNum": 121,
    "weightKg": 80,
    "heightM": 1.1,
    "weightLbs": 176,
    "heightFt": 3.6,
    "factoid": "Its core flashes seven colors in the dark. Some believe it communicates with the stars."
  },
  {
    "classification": "Fish Pokemon",
    "name": "Magikarp",
    "dexNum": 129,
    "weightKg": 10,
    "heightM": 0.9,
    "weightLbs": 22,
    "heightFt": 3,
    "factoid": "Widely considered the weakest Pokemon alive. Yet it can leap mountains if it trains long enough."
  },
  {
    "classification": "Atrocious Pokemon",
    "name": "Gyarados",
    "dexNum": 130,
    "weightKg": 235,
    "heightM": 6.5,
    "weightLbs": 518,
    "heightFt": 21.3,
    "factoid": "Once it goes on a rampage, it won't calm down for 40 days. Entire cities have been leveled."
  },
  {
    "classification": "Transport Pokemon",
    "name": "Lapras",
    "dexNum": 131,
    "weightKg": 220,
    "heightM": 2.5,
    "weightLbs": 485,
    "heightFt": 8.2,
    "factoid": "Ferries people across bodies of water. It understands human speech and sings haunting melodies."
  },
  {
    "classification": "Bubble Jet Pokemon",
    "name": "Vaporeon",
    "dexNum": 134,
    "weightKg": 29,
    "heightM": 1,
    "weightLbs": 64,
    "heightFt": 3.3,
    "factoid": "Its body cells are similar to water molecules. It can melt into water and become invisible."
  },
  {
    "classification": "Big Jaw Pokemon",
    "name": "Totodile",
    "dexNum": 158,
    "weightKg": 9.5,
    "heightM": 0.6,
    "weightLbs": 21,
    "heightFt": 2,
    "factoid": "Its powerful jaws can crush anything. It tends to bite its own trainer out of excitement."
  },
  {
    "classification": "Big Jaw Pokemon",
    "name": "Croconaw",
    "dexNum": 159,
    "weightKg": 25,
    "heightM": 1.1,
    "weightLbs": 55,
    "heightFt": 3.6,
    "factoid": "Once its fangs sink in, they never let go. Lost teeth regrow within 24 hours."
  },
  {
    "classification": "Big Jaw Pokemon",
    "name": "Feraligatr",
    "dexNum": 160,
    "weightKg": 88.8,
    "heightM": 2.3,
    "weightLbs": 196,
    "heightFt": 7.5,
    "factoid": "Despite its enormous bulk, it moves with explosive speed in water. It overwhelms prey instantly."
  },
  {
    "classification": "Angler Pokemon",
    "name": "Chinchou",
    "dexNum": 170,
    "weightKg": 12,
    "heightM": 0.5,
    "weightLbs": 26,
    "heightFt": 1.6,
    "factoid": "Its antennae tips generate enough electricity to stun large fish. It lives in total ocean darkness."
  },
  {
    "classification": "Light Pokemon",
    "name": "Lanturn",
    "dexNum": 171,
    "weightKg": 22.5,
    "heightM": 1.2,
    "weightLbs": 50,
    "heightFt": 3.9,
    "factoid": "Its light is visible from over 3 miles underwater. Nicknamed the deep-sea star by sailors."
  },
  {
    "classification": "Aquamouse Pokemon",
    "name": "Marill",
    "dexNum": 183,
    "weightKg": 8.5,
    "heightM": 0.4,
    "weightLbs": 19,
    "heightFt": 1.3,
    "factoid": "The oil-filled ball on its tail acts as a float. It can dive for river food without being swept away."
  },
  {
    "classification": "Aquarabbit Pokemon",
    "name": "Azumarill",
    "dexNum": 184,
    "weightKg": 28.5,
    "heightM": 0.8,
    "weightLbs": 63,
    "heightFt": 2.6,
    "factoid": "Its round body and bubble pattern serve as camouflage in river water. Predators overlook it easily."
  },
  {
    "classification": "Frog Pokemon",
    "name": "Politoed",
    "dexNum": 186,
    "weightKg": 33.9,
    "heightM": 1.1,
    "weightLbs": 75,
    "heightFt": 3.6,
    "factoid": "When it calls out, all Poliwag and Poliwhirl in earshot gather around it. A natural leader."
  },
  {
    "classification": "Water Fish Pokemon",
    "name": "Wooper",
    "dexNum": 194,
    "weightKg": 8.5,
    "heightM": 0.4,
    "weightLbs": 19,
    "heightFt": 1.3,
    "factoid": "Wanders out of water at night. Coats itself in a poisonous film to keep from drying out."
  },
  {
    "classification": "Water Fish Pokemon",
    "name": "Quagsire",
    "dexNum": 195,
    "weightKg": 75,
    "heightM": 1.4,
    "weightLbs": 165,
    "heightFt": 4.6,
    "factoid": "So carefree it bumps its head on boat hulls without noticing. It barely needs to eat."
  },
  {
    "classification": "Royal Pokemon",
    "name": "Slowking",
    "dexNum": 199,
    "weightKg": 79.5,
    "heightM": 2,
    "weightLbs": 175,
    "heightFt": 6.6,
    "factoid": "The Shellder venom reaching its brain grants it incredible intelligence and wisdom."
  },
  {
    "classification": "Balloon Pokemon",
    "name": "Qwilfish",
    "dexNum": 211,
    "weightKg": 3.9,
    "heightM": 0.5,
    "weightLbs": 9,
    "heightFt": 1.6,
    "factoid": "Gulps water to inflate itself, then fires the poisonous spines on its body in all directions."
  },
  {
    "classification": "Coral Pokemon",
    "name": "Corsola",
    "dexNum": 222,
    "weightKg": 5,
    "heightM": 0.6,
    "weightLbs": 11,
    "heightFt": 2,
    "factoid": "Its branches grow back within a day if broken. Communities of Corsola form natural reef structures."
  },
  {
    "classification": "Jet Pokemon",
    "name": "Remoraid",
    "dexNum": 223,
    "weightKg": 12,
    "heightM": 0.6,
    "weightLbs": 26,
    "heightFt": 2,
    "factoid": "Latches onto Mantine for protection and food scraps. Fires water bullets with sniper-like precision."
  },
  {
    "classification": "Jet Pokemon",
    "name": "Octillery",
    "dexNum": 224,
    "weightKg": 28.5,
    "heightM": 0.9,
    "weightLbs": 63,
    "heightFt": 3,
    "factoid": "Plugs up rocky holes with its body and ambushes prey. Sprays ink as thick as tar when threatened."
  },
  {
    "classification": "Kite Pokemon",
    "name": "Mantine",
    "dexNum": 226,
    "weightKg": 220,
    "heightM": 2.1,
    "weightLbs": 485,
    "heightFt": 6.9,
    "factoid": "Glides gracefully by riding ocean currents. It completely ignores the Remoraid clinging to its fins."
  },
  {
    "classification": "Dragon Pokemon",
    "name": "Kingdra",
    "dexNum": 230,
    "weightKg": 152,
    "heightM": 1.8,
    "weightLbs": 335,
    "heightFt": 5.9,
    "factoid": "Lives at extreme ocean depths. When it yawns, the resulting whirlpool can swallow entire ships."
  },
  {
    "classification": "Aurora Pokemon",
    "name": "Suicune",
    "dexNum": 245,
    "weightKg": 187,
    "heightM": 2,
    "weightLbs": 412,
    "heightFt": 6.6,
    "factoid": "Said to be the north wind given physical form. It can purify polluted water just by touching it."
  },
  {
    "classification": "Mud Fish Pokemon",
    "name": "Mudkip",
    "dexNum": 258,
    "weightKg": 7.6,
    "heightM": 0.4,
    "weightLbs": 17,
    "heightFt": 1.3,
    "factoid": "The fin on its head acts as a radar. It can sense water flow without using its eyes or ears."
  },
  {
    "classification": "Mud Fish Pokemon",
    "name": "Marshtomp",
    "dexNum": 259,
    "weightKg": 28,
    "heightM": 0.7,
    "weightLbs": 62,
    "heightFt": 2.3,
    "factoid": "More comfortable in mud than water. Its hindlegs grew powerful enough to walk on land."
  },
  {
    "classification": "Mud Fish Pokemon",
    "name": "Swampert",
    "dexNum": 260,
    "weightKg": 81.9,
    "heightM": 1.5,
    "weightLbs": 181,
    "heightFt": 4.9,
    "factoid": "Strong enough to drag a boulder weighing over a ton. Predicts storms by sensing subtle pressure changes."
  },
  {
    "classification": "Water Weed Pokemon",
    "name": "Lotad",
    "dexNum": 270,
    "weightKg": 2.6,
    "heightM": 0.5,
    "weightLbs": 6,
    "heightFt": 1.6,
    "factoid": "The leaf on its head doubles as a raft. Small Pokemon sometimes hitch rides across rivers on its back."
  },
  {
    "classification": "Jolly Pokemon",
    "name": "Lombre",
    "dexNum": 271,
    "weightKg": 32.5,
    "heightM": 1.2,
    "weightLbs": 72,
    "heightFt": 3.9,
    "factoid": "A nocturnal prankster that grabs the feet of fishermen. The slime on its body numbs whatever it touches."
  },
  {
    "classification": "Carefree Pokemon",
    "name": "Ludicolo",
    "dexNum": 272,
    "weightKg": 55,
    "heightM": 1.5,
    "weightLbs": 121,
    "heightFt": 4.9,
    "factoid": "Gets more energetic the more festive the music. Joyful dancing powers up its abilities in battle."
  },
  {
    "classification": "Seagull Pokemon",
    "name": "Wingull",
    "dexNum": 278,
    "weightKg": 9.5,
    "heightM": 0.6,
    "weightLbs": 21,
    "heightFt": 2,
    "factoid": "Stores food in its beak and hides it in cliffsides. Rides updrafts for hours without flapping."
  },
  {
    "classification": "Water Bird Pokemon",
    "name": "Pelipper",
    "dexNum": 279,
    "weightKg": 28,
    "heightM": 1.2,
    "weightLbs": 62,
    "heightFt": 3.9,
    "factoid": "Scoops up water and small Pokemon alike in its massive bill. Acts as a nesting site for Wingull."
  },
  {
    "classification": "Savage Pokemon",
    "name": "Carvanha",
    "dexNum": 318,
    "weightKg": 20.8,
    "heightM": 0.8,
    "weightLbs": 46,
    "heightFt": 2.6,
    "factoid": "Schools of Carvanha can strip a large boat to its hull overnight. Alone, it is actually quite timid."
  },
  {
    "classification": "Brutal Pokemon",
    "name": "Sharpedo",
    "dexNum": 319,
    "weightKg": 88.8,
    "heightM": 1.8,
    "weightLbs": 196,
    "heightFt": 5.9,
    "factoid": "Can accelerate to 75 mph by expelling water from its tail. Nicknamed the bully of the sea."
  },
  {
    "classification": "Ball Whale Pokemon",
    "name": "Wailmer",
    "dexNum": 320,
    "weightKg": 130,
    "heightM": 2,
    "weightLbs": 287,
    "heightFt": 6.6,
    "factoid": "Inflates itself by gulping seawater. Bounces on land like a ball when it comes ashore."
  },
  {
    "classification": "Float Whale Pokemon",
    "name": "Wailord",
    "dexNum": 321,
    "weightKg": 398,
    "heightM": 14.5,
    "weightLbs": 877,
    "heightFt": 47.6,
    "factoid": "One of the largest Pokemon in existence. Despite its massive size, it is surprisingly light for its volume."
  },
  {
    "classification": "Whiskers Pokemon",
    "name": "Barboach",
    "dexNum": 339,
    "weightKg": 1.9,
    "heightM": 0.4,
    "weightLbs": 4,
    "heightFt": 1.3,
    "factoid": "Its sensitive whiskers detect faint traces of prey buried in riverbeds. Thrives in muddy waters."
  },
  {
    "classification": "Whiskers Pokemon",
    "name": "Whiscash",
    "dexNum": 340,
    "weightKg": 23.6,
    "heightM": 0.9,
    "weightLbs": 52,
    "heightFt": 3,
    "factoid": "Claims a large swamp as its territory. Triggers earthquakes by thrashing to drive away intruders."
  },
  {
    "classification": "Ruffian Pokemon",
    "name": "Corphish",
    "dexNum": 341,
    "weightKg": 11.5,
    "heightM": 0.6,
    "weightLbs": 25,
    "heightFt": 2,
    "factoid": "So hardy it thrives in the most polluted water. Its claws grip so tight they rarely release on their own."
  },
  {
    "classification": "Rogue Pokemon",
    "name": "Crawdaunt",
    "dexNum": 342,
    "weightKg": 32.8,
    "heightM": 1.1,
    "weightLbs": 72,
    "heightFt": 3.6,
    "factoid": "Terrorizes its pond by picking fights with every creature it encounters. Other Pokemon flee on sight."
  },
  {
    "classification": "Fish Pokemon",
    "name": "Feebas",
    "dexNum": 349,
    "weightKg": 7.4,
    "heightM": 0.6,
    "weightLbs": 16,
    "heightFt": 2,
    "factoid": "Considered the ugliest Pokemon, yet incredibly resilient. It can survive in the filthiest water."
  },
  {
    "classification": "Tender Pokemon",
    "name": "Milotic",
    "dexNum": 350,
    "weightKg": 162,
    "heightM": 6.2,
    "weightLbs": 357,
    "heightFt": 20.3,
    "factoid": "Said to be the most beautiful Pokemon in existence. Its appearance calms the anger of those who see it."
  },
  {
    "classification": "Bivalve Pokemon",
    "name": "Clamperl",
    "dexNum": 366,
    "weightKg": 52.5,
    "heightM": 0.4,
    "weightLbs": 116,
    "heightFt": 1.3,
    "factoid": "The pearl it produces is said to be worth more than most gems. It only makes one in its lifetime."
  },
  {
    "classification": "Deep Sea Pokemon",
    "name": "Huntail",
    "dexNum": 367,
    "weightKg": 27,
    "heightM": 1.7,
    "weightLbs": 60,
    "heightFt": 5.6,
    "factoid": "Lives at extreme ocean depths. Its fish-shaped tail lures prey in total darkness."
  },
  {
    "classification": "South Sea Pokemon",
    "name": "Gorebyss",
    "dexNum": 368,
    "weightKg": 22.6,
    "heightM": 1.8,
    "weightLbs": 50,
    "heightFt": 5.9,
    "factoid": "Its pink color deepens in spring. It inserts its thin mouth into prey and drains their body fluids."
  },
  {
    "classification": "Longevity Pokemon",
    "name": "Relicanth",
    "dexNum": 369,
    "weightKg": 23.4,
    "heightM": 1,
    "weightLbs": 52,
    "heightFt": 3.3,
    "factoid": "A living fossil unchanged for 100 million years. Its rocky scales withstand crushing deep-sea pressure."
  },
  {
    "classification": "Rendezvous Pokemon",
    "name": "Luvdisc",
    "dexNum": 370,
    "weightKg": 8.7,
    "heightM": 0.6,
    "weightLbs": 19,
    "heightFt": 2,
    "factoid": "Couples who find one are said to be blessed with eternal love. It lives in tropical shallows year-round."
  },
  {
    "classification": "Sea Basin Pokemon",
    "name": "Kyogre",
    "dexNum": 382,
    "weightKg": 352,
    "heightM": 4.5,
    "weightLbs": 776,
    "heightFt": 14.8,
    "factoid": "Said to have expanded the seas by covering the land with rain and storms. A deity of the ocean."
  },
  {
    "classification": "Penguin Pokemon",
    "name": "Piplup",
    "dexNum": 393,
    "weightKg": 5.2,
    "heightM": 0.4,
    "weightLbs": 11,
    "heightFt": 1.3,
    "factoid": "Too proud to accept help. It falls down often while learning to walk but always gets back up."
  },
  {
    "classification": "Penguin Pokemon",
    "name": "Prinplup",
    "dexNum": 394,
    "weightKg": 23,
    "heightM": 0.8,
    "weightLbs": 51,
    "heightFt": 2.6,
    "factoid": "Lives alone and considers itself superior to all others. Can break apart ice floes with its wings."
  },
  {
    "classification": "Emperor Pokemon",
    "name": "Empoleon",
    "dexNum": 395,
    "weightKg": 84.5,
    "heightM": 1.7,
    "weightLbs": 186,
    "heightFt": 5.6,
    "factoid": "Swims at 6 knots using its trident-like beak to cleave through ice. Leads other Empoleon with dignity."
  },
  {
    "classification": "Sea Weasel Pokemon",
    "name": "Buizel",
    "dexNum": 418,
    "weightKg": 29.5,
    "heightM": 0.7,
    "weightLbs": 65,
    "heightFt": 2.3,
    "factoid": "Rotates its twin tails like a propeller to swim at high speed. Inflates its flotation sac to stay afloat."
  },
  {
    "classification": "Sea Weasel Pokemon",
    "name": "Floatzel",
    "dexNum": 419,
    "weightKg": 33.5,
    "heightM": 1.1,
    "weightLbs": 74,
    "heightFt": 3.6,
    "factoid": "Its inflated flotation sac functions as a life preserver. Used by coastal rescue teams to save drowning swimmers."
  },
  {
    "classification": "Sea Slug Pokemon",
    "name": "Shellos",
    "dexNum": 422,
    "weightKg": 6.3,
    "heightM": 0.3,
    "weightLbs": 14,
    "heightFt": 1,
    "factoid": "Its appearance differs depending on whether it lives on the east or west sea. A fascinating regional variant."
  },
  {
    "classification": "Sea Slug Pokemon",
    "name": "Gastrodon",
    "dexNum": 423,
    "weightKg": 29.9,
    "heightM": 0.9,
    "weightLbs": 66,
    "heightFt": 3,
    "factoid": "Its soft boneless body regrows any part that gets torn off. It thrives in both shallow and deep water."
  },
  {
    "classification": "Wing Fish Pokemon",
    "name": "Finneon",
    "dexNum": 456,
    "weightKg": 7,
    "heightM": 0.4,
    "weightLbs": 15,
    "heightFt": 1.3,
    "factoid": "Its tail fins glow pink at night to attract plankton. Called the beautifly of the sea by sailors."
  },
  {
    "classification": "Neon Pokemon",
    "name": "Lumineon",
    "dexNum": 457,
    "weightKg": 24,
    "heightM": 1.2,
    "weightLbs": 53,
    "heightFt": 3.9,
    "factoid": "Crawls along the seafloor using its front fins. Its glowing patterns lure deep-sea prey toward it."
  },
  {
    "classification": "Kite Pokemon",
    "name": "Mantyke",
    "dexNum": 458,
    "weightKg": 65,
    "heightM": 1,
    "weightLbs": 143,
    "heightFt": 3.3,
    "factoid": "The pattern on its back changes based on the region it lives in. Swims in large schools near shores."
  },
  {
    "classification": "Spatial Pokemon",
    "name": "Palkia",
    "dexNum": 484,
    "weightKg": 336,
    "heightM": 4.2,
    "weightLbs": 741,
    "heightFt": 13.8,
    "factoid": "A deity said to have the power to warp space itself. Its pearl-adorned shoulders stabilize space around it."
  },
  {
    "classification": "Sea Drifter Pokemon",
    "name": "Phione",
    "dexNum": 489,
    "weightKg": 3.1,
    "heightM": 0.4,
    "weightLbs": 7,
    "heightFt": 1.3,
    "factoid": "Drifts in warm seas and always returns to where it was born. Inflates the flotation sac on its head to float."
  },
  {
    "classification": "Seafaring Pokemon",
    "name": "Manaphy",
    "dexNum": 490,
    "weightKg": 1.4,
    "heightM": 0.3,
    "weightLbs": 3,
    "heightFt": 1,
    "factoid": "Born on the seafloor, it swims vast distances to reach its birthplace. Has a deep bond with the ocean."
  },
  {
    "classification": "Sea Otter Pokemon",
    "name": "Oshawott",
    "dexNum": 501,
    "weightKg": 5.9,
    "heightM": 0.5,
    "weightLbs": 13,
    "heightFt": 1.6,
    "factoid": "The scalchop on its belly is made of the same material as its claws. Detaches to use as a weapon."
  },
  {
    "classification": "Discipline Pokemon",
    "name": "Dewott",
    "dexNum": 502,
    "weightKg": 24.5,
    "heightM": 0.8,
    "weightLbs": 54,
    "heightFt": 2.6,
    "factoid": "Trains relentlessly in scalchop techniques. Each smooth move is the result of strict daily practice."
  },
  {
    "classification": "Formidable Pokemon",
    "name": "Samurott",
    "dexNum": 503,
    "weightKg": 94.6,
    "heightM": 1.5,
    "weightLbs": 209,
    "heightFt": 4.9,
    "factoid": "Can silence an entire battlefield with a single glare. Draws its seamitar in a single fluid motion."
  },
  {
    "classification": "Spray Pokemon",
    "name": "Panpour",
    "dexNum": 515,
    "weightKg": 13.5,
    "heightM": 0.6,
    "weightLbs": 30,
    "heightFt": 2,
    "factoid": "The water stored in its head tuft is nutritious. It waters plants by spraying them from its tail."
  },
  {
    "classification": "Geyser Pokemon",
    "name": "Simipour",
    "dexNum": 516,
    "weightKg": 29,
    "heightM": 1,
    "weightLbs": 64,
    "heightFt": 3.3,
    "factoid": "Stores water in its tuft and fires high-pressure jets. Replenishes by sipping water with its tail."
  },
  {
    "classification": "Tadpole Pokemon",
    "name": "Tympole",
    "dexNum": 535,
    "weightKg": 4.5,
    "heightM": 0.5,
    "weightLbs": 10,
    "heightFt": 1.6,
    "factoid": "Vibrates its cheeks to make ultrasonic waves humans cannot hear. Used to communicate across ponds."
  },
  {
    "classification": "Vibration Pokemon",
    "name": "Palpitoad",
    "dexNum": 536,
    "weightKg": 17,
    "heightM": 0.8,
    "weightLbs": 37,
    "heightFt": 2.6,
    "factoid": "Can vibrate the bumps on its body to generate powerful sound waves that numb opponents."
  },
  {
    "classification": "Vibration Pokemon",
    "name": "Seismitoad",
    "dexNum": 537,
    "weightKg": 62,
    "heightM": 1.5,
    "weightLbs": 137,
    "heightFt": 4.9,
    "factoid": "Vibrates the bumps on its fists to amplify punches. The resulting shockwaves can shatter boulders."
  },
  {
    "classification": "Hostile Pokemon",
    "name": "Basculin",
    "dexNum": 550,
    "weightKg": 18,
    "heightM": 1,
    "weightLbs": 40,
    "heightFt": 3.3,
    "factoid": "Red and blue stripe forms are constantly at war with each other. Incredibly aggressive and hard to train."
  },
  {
    "classification": "Prototurtle Pokemon",
    "name": "Tirtouga",
    "dexNum": 564,
    "weightKg": 16.5,
    "heightM": 0.7,
    "weightLbs": 36,
    "heightFt": 2.3,
    "factoid": "Restored from a 100-million-year-old fossil. Could dive to depths of over half a mile to hunt prey."
  },
  {
    "classification": "Prototurtle Pokemon",
    "name": "Carracosta",
    "dexNum": 565,
    "weightKg": 81,
    "heightM": 1.2,
    "weightLbs": 179,
    "heightFt": 3.9,
    "factoid": "Can survive on land or sea. Its powerful foreflippers can knock out prey and smash boat hulls alike."
  },
  {
    "classification": "Water Bird Pokemon",
    "name": "Ducklett",
    "dexNum": 580,
    "weightKg": 5.5,
    "heightM": 0.5,
    "weightLbs": 12,
    "heightFt": 1.6,
    "factoid": "Excellent diver that hunts for underwater grass. Shakes its tail feathers when startled."
  },
  {
    "classification": "White Bird Pokemon",
    "name": "Swanna",
    "dexNum": 581,
    "weightKg": 24.2,
    "heightM": 1.3,
    "weightLbs": 53,
    "heightFt": 4.3,
    "factoid": "Performs a graceful dance at dusk with other Swanna. The leader always dances in the center."
  },
  {
    "classification": "Floating Pokemon",
    "name": "Frillish",
    "dexNum": 592,
    "weightKg": 33,
    "heightM": 1.2,
    "weightLbs": 73,
    "heightFt": 3.9,
    "factoid": "Paralyzes prey with its venomous frills then drags them down to its nest on the ocean floor."
  },
  {
    "classification": "Floating Pokemon",
    "name": "Jellicent",
    "dexNum": 593,
    "weightKg": 135,
    "heightM": 2.2,
    "weightLbs": 298,
    "heightFt": 7.2,
    "factoid": "Ships and crew that wander into its habitat are never seen again. It absorbs their life force."
  },
  {
    "classification": "Caring Pokemon",
    "name": "Alomomola",
    "dexNum": 594,
    "weightKg": 31.6,
    "heightM": 1.2,
    "weightLbs": 70,
    "heightFt": 3.9,
    "factoid": "Wraps injured Pokemon in its healing membrane and swims them to shore. A natural ocean caretaker."
  },
  {
    "classification": "Colt Pokemon",
    "name": "Keldeo",
    "dexNum": 647,
    "weightKg": 48.5,
    "heightM": 1.4,
    "weightLbs": 107,
    "heightFt": 4.6,
    "factoid": "Runs across water by kicking up violent bursts of water from its hooves. Trained by the Swords of Justice."
  },
  {
    "classification": "Bubble Frog Pokemon",
    "name": "Froakie",
    "dexNum": 656,
    "weightKg": 7,
    "heightM": 0.3,
    "weightLbs": 15,
    "heightFt": 1,
    "factoid": "The bubbles on its back absorb damage. It produces new frubbles instantly to replace lost ones."
  },
  {
    "classification": "Bubble Frog Pokemon",
    "name": "Frogadier",
    "dexNum": 657,
    "weightKg": 10.9,
    "heightM": 0.6,
    "weightLbs": 24,
    "heightFt": 2,
    "factoid": "Can scale a 2,000-foot tower in under a minute. Hurls bubble-coated pebbles with pinpoint accuracy."
  },
  {
    "classification": "Ninja Pokemon",
    "name": "Greninja",
    "dexNum": 658,
    "weightKg": 40,
    "heightM": 1.5,
    "weightLbs": 88,
    "heightFt": 4.9,
    "factoid": "Compresses water into shuriken sharp enough to split metal. Moves so fast it is mistaken for a ninja."
  },
  {
    "classification": "Water Gun Pokemon",
    "name": "Clauncher",
    "dexNum": 692,
    "weightKg": 8.3,
    "heightM": 0.5,
    "weightLbs": 18,
    "heightFt": 1.6,
    "factoid": "Uses the pressure difference from snapping its oversized claw to fire compressed water like a cannon."
  },
  {
    "classification": "Howitzer Pokemon",
    "name": "Clawitzer",
    "dexNum": 693,
    "weightKg": 35.3,
    "heightM": 1.3,
    "weightLbs": 78,
    "heightFt": 4.3,
    "factoid": "Its claw functions as a cannon that fires compressed water. Can sink a tanker ship with one shot."
  },
  {
    "classification": "Sea Lion Pokemon",
    "name": "Popplio",
    "dexNum": 728,
    "weightKg": 7.5,
    "heightM": 0.4,
    "weightLbs": 17,
    "heightFt": 1.3,
    "factoid": "Blows balloons from its nose to practice battle moves. The more it trains, the more elastic the balloons."
  },
  {
    "classification": "Pop Star Pokemon",
    "name": "Brionne",
    "dexNum": 729,
    "weightKg": 17.5,
    "heightM": 0.6,
    "weightLbs": 39,
    "heightFt": 2,
    "factoid": "Never shows sadness in front of others. Learns its dances by watching and mimicking other Brionne."
  },
  {
    "classification": "Soloist Pokemon",
    "name": "Primarina",
    "dexNum": 730,
    "weightKg": 44,
    "heightM": 1.8,
    "weightLbs": 97,
    "heightFt": 5.9,
    "factoid": "Controls water balloons with its voice alone. Each Primarina has a unique song passed down through generations."
  },
  {
    "classification": "Small Fry Pokemon",
    "name": "Wishiwashi",
    "dexNum": 746,
    "weightKg": 0.3,
    "heightM": 0.2,
    "weightLbs": 1,
    "heightFt": 0.7,
    "factoid": "Alone it is helpless, but when it calls for help, a massive school forms a creature that terrifies even Gyarados."
  },
  {
    "classification": "Water Bubble Pokemon",
    "name": "Dewpider",
    "dexNum": 751,
    "weightKg": 4,
    "heightM": 0.3,
    "weightLbs": 9,
    "heightFt": 1,
    "factoid": "Carries a bubble of water on its head to breathe on land. Pops it onto prey to suffocate them."
  },
  {
    "classification": "Water Bubble Pokemon",
    "name": "Araquanid",
    "dexNum": 752,
    "weightKg": 82,
    "heightM": 1.8,
    "weightLbs": 181,
    "heightFt": 5.9,
    "factoid": "Shelters weak Pokemon inside the bubble on its head. Uses the bubble to magnify water attacks."
  },
  {
    "classification": "Sea Cucumber Pokemon",
    "name": "Pyukumuku",
    "dexNum": 771,
    "weightKg": 1.2,
    "heightM": 0.3,
    "weightLbs": 3,
    "heightFt": 1,
    "factoid": "Returns to the same spot on the beach every day. Ejects its own innards as a weapon when threatened."
  },
  {
    "classification": "Gnash Teeth Pokemon",
    "name": "Bruxish",
    "dexNum": 779,
    "weightKg": 19,
    "heightM": 0.9,
    "weightLbs": 42,
    "heightFt": 3,
    "factoid": "Grinds its teeth to generate psychic power. The sound alone is enough to give others a splitting headache."
  },
  {
    "classification": "Land Spirit Pokemon",
    "name": "Tapu Fini",
    "dexNum": 788,
    "weightKg": 21.2,
    "heightM": 1.3,
    "weightLbs": 47,
    "heightFt": 4.3,
    "factoid": "Creates a powerful fog that drives away those with impure hearts. Purifies water and protects its island."
  }
];
