
 
INSERT INTO category (category_name)
VALUES ("Work"),
        ("Love"),
        ("Life"),
        ("Spitiruality");

INSERT INTO user (username, first_name, last_name, email, password)
VALUES ("User1", "Cody", "Bank", "cody@email.com", "codypass"),
        ("User2", "Ana", "Cors", "ana@email.com", "anapass"),
        ("User3", "Elio", "Ron", "elio@email.com", "eliopass"),
        ("User4", "Donna", "Sink", "donna@email.com", "donnapass"),
        ("User5", "Leon", "Yuyo", "leon@email.com", "leonpass"),
        ("User6", "Rosa", "Alamo", "rosa@email.com", "rosapass"),
        ("User7", "Gerry", "Mummy", "gery@email.com", "gerypass"),
        ("User8", "Luka", "Dine", "luka@email.com", "lukapass"),
        ("User9", "Sandra", "Oho", "sandra@email.com", "sandrapass"),
        ("User10", "Arturo", "Luna", "arturo@email.com", "arturopass");


INSERT INTO quotes (description, author, posted_by, category_id, created_at, updated_at)
VALUES  ("Life is a mistery", "Unknown", 1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Life is a joyride", "Adele", 1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Love is a sunchine", "Unknown", 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Love is a thief", "Unknown", 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Work is a bother", "Unknown", 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Work is a ruin", "Miranda", 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Spirituality is a question", "Unknown", 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Spirituality is a puzzling dilema", "God", 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Work never ends", "Pita Amore", 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Work will always be there", "Unknown", 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Love can tear you apart", "Unknown", 6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ("Love can take you to other places", "Unknown", 6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
