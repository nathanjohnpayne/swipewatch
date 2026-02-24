// Combined Disney+ and Hulu content data
// Using Disney's RipCut image delivery system with layered backgrounds and titles
// Following Disney API standards for poster vertical tiles
const contentData = [
    // Hulu Content (using label=standard - no title overlay needed)
    {
        id: 101,
        title: "Family Guy",
        type: "Series",
        description: "The adventures of the Griffin family, featuring Peter's outrageous antics and satirical humor.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a4ac3-e1bd-7741-a780-6c021a418061/compose?format=webp&label=standard_art_178&width=800",
        color: "#1e3a8a",
        year: "1999",
        genres: "Animation, Comedy"
    },
    {
        id: 102,
        title: "Bob's Burgers",
        type: "Series",
        description: "The Belcher family runs a burger restaurant while dealing with everyday chaos and colorful characters.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5c17debf-1b5c-43f2-b829-d515aff67fd9/compose?format=webp&label=standard_art_fox_178&width=800",
        color: "#dc2626",
        year: "2011",
        genres: "Animation, Comedy, FOX"
    },
    {
        id: 103,
        title: "The Secret Lives of Mormon Wives",
        type: "Hulu Original Series",
        description: "An intimate look into the lives of Mormon influencers navigating faith, family, and friendship.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5fbd0ba0-3044-4b0f-8955-06ac811189f6/compose?format=webp&label=standard_art_hulu-original-series_178&width=800",
        color: "#0ea5e9",
        year: "2024",
        genres: "Reality, Hulu Original"
    },
    {
        id: 104,
        title: "Abbott Elementary",
        type: "Series",
        description: "A group of dedicated teachers navigate the challenges of working at an underfunded Philadelphia public school.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8592367e-0c8f-4b16-8704-b67d0306012c/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#22c55e",
        year: "2021",
        genres: "Comedy, ABC"
    },
    {
        id: 105,
        title: "The Golden Girls",
        type: "Series",
        description: "Four older women share a home in Miami, navigating friendship, romance, and life's adventures together.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4dd1915f-bc3f-4bd5-8e0e-dd11a5639653/compose?format=webp&label=standard_art_178&width=800",
        color: "#eab308",
        year: "1985",
        genres: "Comedy, Classic"
    },
    {
        id: 106,
        title: "Desperate Housewives",
        type: "Series",
        description: "The lives, loves, and secrets of suburban housewives on Wisteria Lane are revealed through mystery and drama.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b3861c10-5917-44ff-a3f6-0760034089df/compose?format=webp&label=standard_art_178&width=800",
        color: "#a855f7",
        year: "2004",
        genres: "Drama, Mystery"
    },
    {
        id: 107,
        title: "King of the Hill",
        type: "Hulu Original Series",
        description: "Hank Hill and his family navigate life in small-town Texas with humor and heart.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fb7ebd54-bb14-4339-a4bb-1da7c5d12839/compose?format=webp&label=standard_art_hulu-original-series_178&width=800",
        color: "#f59e0b",
        year: "1997",
        genres: "Animation, Comedy"
    },
    {
        id: 108,
        title: "The Rookie",
        type: "Series",
        description: "John Nolan, the oldest rookie in the LAPD, tackles crime and proves age is just a number.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b7fb8-1c6b-7e13-9d1a-b8f6260de60a/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#3b82f6",
        year: "2018",
        genres: "Action, Drama, ABC"
    },
    {
        id: 109,
        title: "Grey's Anatomy",
        type: "Series",
        description: "Surgical interns and their supervisors navigate the complexities of medicine, love, and life at Seattle Grace Hospital.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/26eca3c5-a4ca-48bf-87ce-5b5c3e930544/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#ec4899",
        year: "2005",
        genres: "Medical Drama, ABC"
    },
    {
        id: 110,
        title: "Tell Me Lies",
        type: "Hulu Original Series",
        description: "A toxic relationship between college students unfolds over eight years, revealing destructive patterns and hidden truths.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019bb46f-fc12-78ad-ba16-a15d917d5ad9/compose?format=webp&label=standard_art_hulu-original-series_178&width=800",
        color: "#ef4444",
        year: "2022",
        genres: "Drama, Hulu Original"
    },
    {
        id: 111,
        title: "High Potential",
        type: "Series",
        description: "A brilliant cleaning lady uses her exceptional intellect to solve crimes alongside the LAPD.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8bb16716-fa3c-42a1-b90b-9422f64feadc/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#06b6d4",
        year: "2024",
        genres: "Crime, Drama, ABC"
    },
    {
        id: 112,
        title: "9-1-1",
        type: "Series",
        description: "First responders face high-pressure situations and save lives while dealing with their own personal dramas.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a3bbd-9f54-71a4-9031-8a58551c086d/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#dc2626",
        year: "2018",
        genres: "Action, Drama, ABC"
    },
    {
        id: 113,
        title: "Fear Factor: House of Fear",
        type: "Series",
        description: "Contestants face their worst nightmares in extreme challenges for a chance to win big.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019adf59-da87-796c-be84-49fec5013b22/compose?format=webp&label=standard_art_fox_178&width=800",
        color: "#7c3aed",
        year: "2024",
        genres: "Reality, FOX"
    },
    {
        id: 114,
        title: "The Amazing World of Gumball",
        type: "Series",
        description: "A blue cat and his adopted goldfish brother get into hilarious adventures in the town of Elmore.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6c3cdce4-2b89-4f33-8491-8125cea46239/compose?format=webp&label=standard_art_cartoon-network_178&width=800",
        color: "#14b8a6",
        year: "2011",
        genres: "Animation, Comedy, Cartoon Network"
    },
    {
        id: 115,
        title: "Will Trent",
        type: "Series",
        description: "A brilliant GBI agent with a troubled past uses his unique skills to solve Georgia's most complex crimes.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ae596-9bd3-707f-816c-ca7620d35c87/compose?format=webp&label=standard_art_abc_178&width=800",
        color: "#1e40af",
        year: "2023",
        genres: "Crime, Drama, ABC"
    },
    // Hulu Content with poster labels (require title overlay)
    {
        id: 116,
        title: "The Beauty",
        type: "Hulu Original Series",
        description: "A deadly virus transmitted through sexual contact transforms its victims into horrifying beings in this chilling sci-fi horror series.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019be748-3397-7e06-bede-26c5063f6ae9/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b7609-5c38-73ef-bc05-27d7586b7685/trim?format=webp&max=800%7C450",
        color: "#7c2d12",
        year: "2026",
        genres: "Horror, Science Fiction, Hulu Original"
    },
    {
        id: 117,
        title: "Only Murders in the Building",
        type: "Hulu Original Series",
        description: "Three strangers who share an obsession with true crime suddenly find themselves wrapped up in one when investigating a mysterious death in their apartment building.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0a66a348-5d0e-4635-b9d3-b2bb97793e8e/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/09c274ce-4666-48ba-a881-38fd026e05a9/trim?format=webp&max=800%7C450",
        color: "#ca8a04",
        year: "2021",
        genres: "Drama, Mystery, Hulu Original"
    },
    {
        id: 118,
        title: "Shōgun",
        type: "Hulu Original Series",
        description: "An English navigator becomes embroiled in the complex political landscape of feudal Japan in this epic historical drama.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1cc75b70-6def-48ab-890b-ab74c231d823/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ba11913e-10c0-432d-9042-7c5abbb26cd1/trim?format=webp&max=800%7C450",
        color: "#78350f",
        year: "2024",
        genres: "Drama, Action and Adventure, Hulu Original"
    },
    {
        id: 119,
        title: "A Thousand Blows",
        type: "Hulu Original Series",
        description: "Set in 1880s London, two Jamaican friends navigate the brutal world of bare-knuckle boxing while building an empire in the criminal underworld.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ba101-b9b9-78f4-94f9-a99eed67bdcd/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ba100-b609-70f9-bf67-ade11acd572e/trim?format=webp&max=800%7C450",
        color: "#44403c",
        year: "2025",
        genres: "Drama, History, Hulu Original"
    },
    {
        id: 120,
        title: "The Handmaid's Tale",
        type: "Hulu Original Series",
        description: "A woman forced into servitude in a totalitarian society fights to reunite with her daughter and find freedom in a dystopian future.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7a33df87-e1f0-45b1-b239-477045c506f9/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e107ef89-2c26-4a62-9f1e-cb595cf356cd/trim?format=webp&max=800%7C450",
        color: "#991b1b",
        year: "2017",
        genres: "Drama, Thriller, Hulu Original"
    },
    // Disney+ Content
    {
        id: 1,
        title: "Ocean with David Attenborough",
        type: "Series",
        description: "Explore the vast and mysterious depths of our planet's oceans with legendary naturalist David Attenborough.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/db0b420a-2ff1-483b-a5f4-308de1c46d52/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9a76bac9-d9aa-402d-bc13-220dd849a6a0/trim?format=webp&max=800%7C450",
        color: "#0369a1",
        year: "2025",
        genres: "Documentaries, Animals & Nature"
    },
    {
        id: 16,
        title: "Beauty and the Beast",
        type: "Movie",
        description: "A young woman whose father is imprisoned by a terrifying beast offers herself in his place, unaware her captor is an enchanted prince.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9d07a357-5574-43c4-83fa-a4c8b12723e4/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b223dc02-d12d-4943-a423-0b6e7ed1d2ce/trim?max=339|162",
        color: "#f4c430",
        year: "1991",
        genres: "Animation, Romance"
    },
    {
        id: 17,
        title: "Gordon Ramsay: Uncharted",
        type: "Series",
        description: "Chef Gordon Ramsay travels to remote locations to learn about different cultures' cuisines and compete against local chefs.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/64c333d8-360c-45c4-a8ae-68593b23c831/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c275f440-d814-475d-9357-6089adb1798b/trim?max=339|162",
        color: "#c23616",
        year: "2019",
        genres: "Action and Adventure, Lifestyle"
    },
    {
        id: 18,
        title: "Drain the Oceans",
        type: "Series",
        description: "Underwater landscapes and hidden mysteries of the ocean floor are revealed using cutting-edge technology and CGI animation.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f77c8e22-6e89-400f-85c4-287a94279e94/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43abacfb-9d7a-46a9-a978-b96b8733cb95/trim?max=339|162",
        color: "#0f3460",
        year: "2018",
        genres: "Documentaries, History"
    },
    {
        id: 19,
        title: "Tron: Ares",
        type: "Movie",
        description: "A highly sophisticated program ventures from the digital world into the real world on a dangerous mission.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b971c-ae8e-76be-a570-ee6dda383259/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b3b7e-7e97-7573-8c50-9ec5a4bfa53a/trim?max=339|162",
        color: "#1a1a2e",
        year: "2025",
        genres: "Action and Adventure, Science Fiction"
    },
    {
        id: 20,
        title: "Mary Poppins",
        type: "Movie",
        description: "A magical nanny employs music and adventure to help a family rediscover the joy and wonder missing in their lives.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6347e736-dc04-4b74-a2dc-5baecbc62cf0/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f8e56190-81f2-4ea3-8642-cd39758dd830/trim?max=339|162",
        color: "#e94560",
        year: "1964",
        genres: "Musicals, Fantasy"
    },
    {
        id: 21,
        title: "Tsunami: Race Against Time",
        type: "Series",
        description: "The devastating 2004 Indian Ocean tsunami told through the eyes of survivors, rescuers, and scientists.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3872def9-1868-4c74-905a-e8081cc234fc/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1cc13100-6638-4428-a6d4-e3ccd4038569/trim?max=339|162",
        color: "#2d4059",
        year: "2024",
        genres: "Docuseries"
    },
    {
        id: 22,
        title: "101 Dalmatians",
        type: "Movie",
        description: "When a litter of dalmatian puppies are abducted by Cruella De Vil, their parents must find them before it's too late.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6c407c28-a4a6-4d00-af74-b3afb6c3b001/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b0235bab-12f6-4f3c-92e3-5d37a30542cb/trim?max=339|162",
        color: "#000000",
        year: "1961",
        genres: "Action and Adventure, Animation"
    },
    {
        id: 23,
        title: "Sleeping Beauty",
        type: "Movie",
        description: "A princess cursed to sleep forever is awakened by true love's kiss in this timeless fairy tale.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6bbe48ae-bf94-4a3b-bf5b-0a902e4df4e4/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2dc4-d2d3-793d-ab18-e7dc655a0672/trim?max=339|162",
        color: "#e83f6f",
        year: "1959",
        genres: "Animation, Romance"
    },
    {
        id: 24,
        title: "Tarzan",
        type: "Movie",
        description: "An orphan raised by gorillas in the jungle must decide where he truly belongs when he discovers his human heritage.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4e16c21c-6619-4be1-8077-e27b80465c02/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2521-26c2-7ae2-931f-eec9e64835bf/trim?max=339|162",
        color: "#2a9d8f",
        year: "1999",
        genres: "Action and Adventure, Coming of Age"
    },
    {
        id: 25,
        title: "Savage Kingdom",
        type: "Series",
        description: "A powerful lioness must fight to protect her family and territory in the brutal African wilderness.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8eaec0d0-9ed5-4162-a682-4c55d5e2c248/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/11d315c4-7ccc-4862-ad95-1fab083235ef/trim?max=339|162",
        color: "#d4a574",
        year: "2016",
        genres: "Animals & Nature, Docuseries"
    },
    {
        id: 26,
        title: "Fantasia",
        type: "Movie",
        description: "Classical music meets stunning animation in this groundbreaking anthology of eight animated segments.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9e464305-8816-4aff-9c7c-c873e1b0cc0a/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2a351df5-a699-4300-8791-1cea2a6aa960/trim?max=339|162",
        color: "#4a5899",
        year: "1940",
        genres: "Anthology, Music"
    },
    {
        id: 27,
        title: "Life Below Zero",
        type: "Series",
        description: "Alaskans battle freezing temperatures and rugged terrain to survive in one of the harshest environments on Earth.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cee323f4-126e-4ea3-9c91-d35045f28b85/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d9eec565-3ad1-4824-a305-2b0aad65f4db/trim?max=339|162",
        color: "#b8d8e8",
        year: "2013",
        genres: "Reality, Docuseries"
    },
    {
        id: 28,
        title: "Cinderella",
        type: "Movie",
        description: "With help from her fairy godmother, a young woman overcomes her wicked stepmother to find true love.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/94f588ed-10ca-4f71-8707-e86e74fa7051/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2557a591-2c09-435a-937c-ea834b013815/trim?max=339|162",
        color: "#89cff0",
        year: "1950",
        genres: "Animation, Romance"
    },
    {
        id: 29,
        title: "Dumbo",
        type: "Movie",
        description: "A young circus elephant with oversized ears discovers he can fly and becomes a star attraction.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ae6c84db-db08-44cc-840c-513a7cf7ce04/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/487a580b-1f94-4cec-9fd5-c3868b66f963/trim?max=339|162",
        color: "#6b9bd1",
        year: "1941",
        genres: "Animation"
    },
    {
        id: 30,
        title: "Lady and the Tramp",
        type: "Movie",
        description: "A pampered cocker spaniel and a streetwise mutt embark on an unexpected adventure and romance.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8a07d6cf-f3ec-45d3-a220-175703fb5b98/compose?format=jpeg&label=poster_vertical_080&width=381",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2407ae3d-e1d0-4121-999a-add602496533/trim?max=339|162",
        color: "#d4a59a",
        year: "1955",
        genres: "Action and Adventure, Animation"
    },
    {
        id: 2,
        title: "The End of an Era",
        type: "Series",
        description: "An intimate documentary series exploring the final moments and lasting legacy of music's most iconic eras and movements.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a74f0-d982-7f1f-8e78-fe200d088715/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a74f0-d7e6-7883-9249-37a07214b412/trim?format=webp&max=800%7C450",
        color: "#1e293b",
        year: "2025",
        genres: "Music, Docuseries"
    },
    {
        id: 3,
        title: "The Beatles Anthology",
        type: "Series",
        description: "The Beatles tell their own story through rare footage and interviews in this comprehensive documentary about the world's most famous band.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a83d2-97c3-700f-b2f9-e4482ccfab5b/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a83d2-961f-79f3-bbad-493a91b61dd4/trim?format=webp&max=800%7C450",
        color: "#064e3b",
        year: "2025",
        genres: "Music, Docuseries"
    },
    {
        id: 4,
        title: "Sherlock",
        type: "Series",
        description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e757d688-ba14-4c0f-97fc-ae99c287ca2c/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b28a6-a52e-72ec-9c6a-74be5171ebbe/trim?format=webp&max=800%7C450",
        color: "#1e3a8a",
        year: "2010",
        genres: "Drama, Mystery"
    },
    {
        id: 5,
        title: "Malcolm in the Middle",
        type: "Series",
        description: "A gifted young teen tries to survive life with his dysfunctional family in this groundbreaking comedy series.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a12e74cf-3ee4-43be-99c8-384fd6e14ae4/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8d84c5a2-5ae6-423c-bce4-a4236151a9cd/trim?format=webp&max=800%7C450",
        color: "#dc2626",
        year: "2000",
        genres: "Comedy"
    },
    {
        id: 6,
        title: "Secrets of the Penguins",
        type: "Series",
        description: "Discover the hidden lives and remarkable behaviors of penguins in their natural habitats across the globe.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/96d56484-47e6-4cbd-a5ea-37b46a7f99e3/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2b6d-59bb-7fb3-8390-a4eb27a117cf/trim?format=webp&max=800%7C450",
        color: "#0c4a6e",
        year: "2025",
        genres: "Animals & Nature, Docuseries"
    },
    {
        id: 7,
        title: "Dancing with the Stars",
        type: "Disney+ Original Series",
        description: "Celebrities partner with professional dancers in this dazzling competition series full of glamour, drama, and spectacular performances.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9f980a38-d309-4f52-b40a-b1427d2ea39b/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ee9bb85f-c016-487a-961d-c52f8dfd20b4/trim?format=webp&max=800%7C450",
        color: "#831843",
        year: "2005",
        genres: "Dance, Reality"
    },
    {
        id: 8,
        title: "Lost Treasures of Egypt",
        type: "Series",
        description: "Archaeologists unearth lost tombs and uncover ancient secrets in the quest to unlock the mysteries of Egypt's past.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/117a35e4-fd10-4272-998c-a0431d97a6c7/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c97615d7-c64a-4d17-8776-d02f4d0e44bf/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "2019",
        genres: "History, Docuseries"
    },
    {
        id: 9,
        title: "Animals Up Close with Bertie Gregory",
        type: "Disney+ Original Series",
        description: "Wildlife filmmaker Bertie Gregory travels the world to capture extraordinary animal behaviors and breathtaking natural spectacles.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a72e6-2b30-76ec-ba87-638d9683946c/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a72e6-1e87-7c24-b22a-c17b47596397/trim?format=webp&max=800%7C450",
        color: "#065f46",
        year: "2023",
        genres: "Action and Adventure, Animals & Nature"
    },
    {
        id: 10,
        title: "America's National Parks",
        type: "Series",
        description: "Experience the stunning beauty and diverse wildlife of America's most iconic national parks in this breathtaking documentary series.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7834f19d-fdd3-42b1-8841-cf4dec47d7dc/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ee3d16d4-f36f-40f2-8913-f04dfb0e703a/trim?format=webp&max=800%7C450",
        color: "#166534",
        year: "2015",
        genres: "Animals & Nature, Docuseries"
    }
];

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Session management
const SESSION_SIZE = 10;
let availableContent = [...contentData];
let shownContent = [];
let sessionContent = [];

// Load shown content from localStorage
function loadShownContent() {
    const stored = localStorage.getItem('swipewatch_shown_content');
    if (stored) {
        shownContent = JSON.parse(stored);
    }
}

// Save shown content to localStorage
function saveShownContent() {
    localStorage.setItem('swipewatch_shown_content', JSON.stringify(shownContent));
}

// Get next session of content
function getSessionContent() {
    loadShownContent();

    // Filter out already shown content
    const unshownContent = contentData.filter(item => !shownContent.includes(item.id));

    // If all content has been shown, reset
    if (unshownContent.length === 0) {
        shownContent = [];
        saveShownContent();
        return shuffleArray(contentData).slice(0, SESSION_SIZE);
    }

    // If we have enough unshown content for a full session
    if (unshownContent.length >= SESSION_SIZE) {
        return shuffleArray(unshownContent).slice(0, SESSION_SIZE);
    }

    // If we have some unshown content but not enough for a full session
    // Show all remaining unshown content
    return shuffleArray(unshownContent);
}

// Initialize session content
sessionContent = getSessionContent();

// App State
let currentIndex = 0;
let stats = {
    liked: 0,
    superLiked: 0,
    disliked: 0
};

// DOM Elements
const cardStack = document.getElementById('card-stack');
const endScreen = document.getElementById('end-screen');
const restartBtn = document.getElementById('restart-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likeBtn = document.getElementById('like-btn');
const superBtn = document.getElementById('super-btn');

// Progress elements
const progressBar = document.getElementById('progress-bar');
const currentCardEl = document.getElementById('current-card');
const totalCardsEl = document.getElementById('total-cards');

// End screen elements
const totalSwipes = document.getElementById('total-swipes');
const endLikedCount = document.getElementById('end-liked-count');
const endSuperCount = document.getElementById('end-super-count');
const endDislikedCount = document.getElementById('end-disliked-count');

// Swipe indicators
const nopeIndicator = document.querySelector('.swipe-indicator.nope');
const likeIndicator = document.querySelector('.swipe-indicator.like');
const superIndicator = document.querySelector('.swipe-indicator.super');

// Onboarding elements
const onboarding = document.getElementById('onboarding');
const startBtn = document.getElementById('start-btn');

// Initialize app
function init() {
    currentIndex = 0;
    stats = { liked: 0, superLiked: 0, disliked: 0 };
    cardStack.innerHTML = '';
    endScreen.classList.add('hidden');

    // Get new session content
    sessionContent = getSessionContent();

    // Initialize progress
    totalCardsEl.textContent = sessionContent.length;
    updateProgress();

    // Load initial cards (show 2-3 at a time for depth effect)
    for (let i = 0; i < Math.min(3, sessionContent.length); i++) {
        createCard(i);
    }
}

// Update progress bar and counter
function updateProgress() {
    const progress = (currentIndex / sessionContent.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentCardEl.textContent = currentIndex + 1;
}

// Create card element
function createCard(index) {
    if (index >= sessionContent.length) return;

    const content = sessionContent[index];
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;

    // Determine if title overlay is needed based on URL label parameter
    let posterHTML;
    const hasPosterLabel = content.background && content.background.includes('label=poster');
    const hasStandardLabel = content.background && content.background.includes('label=standard');

    if (hasPosterLabel && content.titleImage) {
        // Poster label - use layered version with background + title treatment overlay
        posterHTML = `
            <div class="card-poster-layered">
                <img src="${content.background}" alt="${content.title} background" class="poster-background" onerror="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
                <img src="${content.titleImage}" alt="${content.title}" class="poster-title-image">
            </div>
            <div class="card-poster-fallback" style="display:none; background: linear-gradient(135deg, ${content.color} 0%, ${adjustColor(content.color, -20)} 100%);">
                <div class="poster-title">${content.title}</div>
            </div>`;
    } else if (hasStandardLabel || content.background) {
        // Standard label - no title overlay, letterbox style
        posterHTML = `
            <div class="card-poster-layered card-poster-letterbox" style="background: linear-gradient(135deg, ${content.color} 0%, ${adjustColor(content.color, -20)} 100%);">
                <img src="${content.background}" alt="${content.title}" class="poster-background-letterbox" onerror="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
            </div>
            <div class="card-poster-fallback" style="display:none; background: linear-gradient(135deg, ${content.color} 0%, ${adjustColor(content.color, -20)} 100%);">
                <div class="poster-title">${content.title}</div>
            </div>`;
    } else {
        // Fallback to gradient only
        posterHTML = `
            <div class="card-poster-fallback" style="background: linear-gradient(135deg, ${content.color} 0%, ${adjustColor(content.color, -20)} 100%);">
                <div class="poster-title">${content.title}</div>
            </div>`;
    }

    card.innerHTML = `
        ${posterHTML}
        <div class="card-info">
            <span class="card-type">${content.type}</span>
            <h2 class="card-title">${content.title}</h2>
            <p class="card-description">${content.description}</p>
        </div>
    `;

    // Position cards in stack (slight offset for depth)
    const offset = index - currentIndex;
    card.style.transform = `scale(${1 - offset * 0.05}) translateY(${offset * 10}px)`;
    card.style.zIndex = sessionContent.length - index;

    // Add swipe listeners only to the top card
    if (index === currentIndex) {
        addSwipeListeners(card);
    }

    cardStack.appendChild(card);
}

// Helper function to darken color
function adjustColor(color, amount) {
    const num = parseInt(color.replace("#", ""), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Add swipe event listeners
function addSwipeListeners(card) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;

    const handleStart = (e) => {
        isDragging = true;
        startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    };

    const handleMove = (e) => {
        if (!isDragging) return;

        e.preventDefault();
        currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        const rotation = deltaX * 0.1;

        card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;

        // Show appropriate indicator
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        if (absY > absX && deltaY < -50) {
            showIndicator('super');
        } else if (absX > absY && deltaX < -50) {
            showIndicator('nope');
        } else if (absX > absY && deltaX > 50) {
            showIndicator('like');
        } else {
            hideAllIndicators();
        }
    };

    const handleEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        // Determine swipe direction
        if (absY > absX && deltaY < -100) {
            swipeCard(card, 'up');
        } else if (absX > absY && deltaX < -100) {
            swipeCard(card, 'left');
        } else if (absX > absY && deltaX > 100) {
            swipeCard(card, 'right');
        } else {
            // Snap back
            card.style.transform = '';
            hideAllIndicators();
        }
    };

    // Mouse events
    card.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch events
    card.addEventListener('touchstart', handleStart);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
}

// Google Analytics event tracking
function trackEvent(action, label, value) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'Card Interaction',
            'event_label': label,
            'value': value
        });
    }
}

// Swipe card with animation
function swipeCard(card, direction) {
    card.classList.add('animating');
    hideAllIndicators();

    const content = sessionContent[currentIndex];
    const contentTitle = content.title;

    switch(direction) {
        case 'left':
            card.style.transform = 'translateX(-150%) rotate(-30deg)';
            stats.disliked++;
            trackEvent('dislike', contentTitle, currentIndex);
            break;
        case 'right':
            card.style.transform = 'translateX(150%) rotate(30deg)';
            stats.liked++;
            trackEvent('like', contentTitle, currentIndex);
            break;
        case 'up':
            card.style.transform = 'translateY(-150%) rotate(5deg)';
            stats.superLiked++;
            trackEvent('super_like', contentTitle, currentIndex);
            break;
    }

    card.style.opacity = '0';

    setTimeout(() => {
        // Mark content as shown
        shownContent.push(content.id);
        saveShownContent();

        card.remove();
        currentIndex++;
        updateProgress();

        // Load next card if available
        if (currentIndex + 2 < sessionContent.length) {
            createCard(currentIndex + 2);
        }

        // Check if we've gone through all cards
        if (currentIndex >= sessionContent.length) {
            showEndScreen();
        } else {
            // Enable swipe on next card
            const nextCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
            if (nextCard) {
                addSwipeListeners(nextCard);
                // Animate card to front
                nextCard.style.transform = '';
            }
        }
    }, 300);
}

// Show swipe indicator
function showIndicator(type) {
    hideAllIndicators();
    if (type === 'nope') nopeIndicator.classList.add('visible');
    if (type === 'like') likeIndicator.classList.add('visible');
    if (type === 'super') superIndicator.classList.add('visible');
}

// Hide all indicators
function hideAllIndicators() {
    nopeIndicator.classList.remove('visible');
    likeIndicator.classList.remove('visible');
    superIndicator.classList.remove('visible');
}

// Show end screen with stats
function showEndScreen() {
    const totalSwipeCount = stats.liked + stats.superLiked + stats.disliked;

    totalSwipes.textContent = totalSwipeCount;
    endLikedCount.textContent = stats.liked;
    endSuperCount.textContent = stats.superLiked;
    endDislikedCount.textContent = stats.disliked;

    endScreen.classList.remove('hidden');
}

// Button handlers
dislikeBtn.addEventListener('click', () => {
    const topCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
    if (topCard) swipeCard(topCard, 'left');
});

likeBtn.addEventListener('click', () => {
    const topCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
    if (topCard) swipeCard(topCard, 'right');
});

superBtn.addEventListener('click', () => {
    const topCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
    if (topCard) swipeCard(topCard, 'up');
});

restartBtn.addEventListener('click', () => {
    trackEvent('restart', 'User restarted the app', stats.liked + stats.superLiked + stats.disliked);
    init();
});

// Onboarding handler
startBtn.addEventListener('click', () => {
    onboarding.classList.add('hidden');
    localStorage.setItem('swipewatch_onboarding_completed', 'true');
    trackEvent('onboarding', 'User completed onboarding', 0);
});

// Check if onboarding has been completed
function checkOnboarding() {
    const completed = localStorage.getItem('swipewatch_onboarding_completed');
    if (completed === 'true') {
        onboarding.classList.add('hidden');
    }
}

// Start the app
checkOnboarding();
init();
