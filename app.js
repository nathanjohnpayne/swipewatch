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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c720d-0687-75d2-a633-6de8d1d84c39/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c720e-6a03-78f8-abcb-55024eac4d74/trim?format=webp&max=800%7C450",
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d16a215d-0e8a-4f0b-be48-29e3c01c2c06/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/125358aa-0e23-41e5-8028-0e3e6d76952e/trim?format=webp&max=800%7C450",
        color: "#eab308",
        year: "1985",
        genres: "Comedy"
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a19b69da-873f-4ff6-9b9f-d327716ca01b/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4e62a930-94e6-4c00-92cc-07062f83ff9d/trim?format=webp&max=800%7C450",
        color: "#f59e0b",
        year: "1997",
        genres: "Comedy, Animation"
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/86c98a19-69bb-4579-a69e-855eda61a81f/compose?format=webp&label=poster_vertical_abc_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5545beff-7a95-4203-8b43-1c6c97f90622/trim?format=webp&max=800%7C450",
        color: "#06b6d4",
        year: "2024",
        genres: "Drama, Comedy, ABC"
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b24a6-390c-74fc-8cbb-de46748807a9/compose?format=webp&label=poster_vertical_fox_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b24a6-76d7-7f59-ada9-8f13d7bda3e5/trim?format=webp&max=800%7C450",
        color: "#7c3aed",
        year: "2026",
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ae5cb-7126-7727-bff1-4c0ebff2eb7f/compose?format=webp&label=poster_vertical_abc_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/259eae8b-af3b-4801-a525-8b6d804f0fde/trim?format=webp&max=800%7C450",
        color: "#1e40af",
        year: "2023",
        genres: "Drama, Procedural, ABC"
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
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c88c3-8ce8-792b-8270-dc428a0daf9e/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e107ef89-2c26-4a62-9f1e-cb595cf356cd/trim?format=webp&max=800%7C450",
        color: "#991b1b",
        year: "2017",
        genres: "Drama, Thriller, Hulu Original"
    },
    {
        id: 121,
        title: "The Bear",
        type: "Hulu Original Series",
        description: "A young chef from the fine dining world returns home to run his family's sandwich shop in Chicago, transforming both the restaurant and himself.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b2644080-ca0c-43ce-9a9a-d525cfb4b40a/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7086e502-e77d-4920-ba01-a7ca205eae9f/trim?format=webp&max=800%7C450",
        color: "#b91c1c",
        year: "2022",
        genres: "Drama, Comedy, Hulu Original"
    },
    {
        id: 122,
        title: "Love Story: John F. Kennedy Jr. & Carolyn Bessette",
        type: "Hulu Original Series",
        description: "The captivating and tragic love story of JFK Jr. and Carolyn Bessette, chronicling their romance under the relentless spotlight of fame.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c57d8-98c3-7e0c-8698-6cd30b5533fa/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019bb9cf-0097-7813-9986-5adddeb8dde5/trim?format=webp&max=800%7C450",
        color: "#7f1d1d",
        year: "2026",
        genres: "Drama, Romance, Hulu Original"
    },
    {
        id: 123,
        title: "The Americans",
        type: "Series",
        description: "Two KGB spies pose as an ordinary American couple during the Cold War while raising their children in suburban Washington, D.C.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8662aa5f-eafd-4322-88f6-0128e7c61565/compose?format=webp&label=poster_vertical_fx_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/42a94b55-5fa9-4811-9e37-634f31ca36f7/trim?format=webp&max=800%7C450",
        color: "#7f1d1d",
        year: "2013",
        genres: "Drama, History, FX"
    },
    {
        id: 124,
        title: "Mid-Century Modern",
        type: "Hulu Original Series",
        description: "A comedy series exploring the lives and relationships of a group of friends navigating love, loss, and reinvention in Palm Springs.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6ff479da-e907-47e4-8b19-feecb02272b8/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/27f9590d-0010-4de9-ac47-d022a5bde646/trim?format=webp&max=800%7C450",
        color: "#c2410c",
        year: "2025",
        genres: "Comedy, Hulu Original"
    },
    {
        id: 125,
        title: "Best Medicine",
        type: "Series",
        description: "Doctors navigate life-and-death decisions and personal challenges at a prestigious hospital in this gripping medical drama.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b482c-1e87-74ba-9c36-72f3df6d6842/compose?format=webp&label=poster_vertical_fox_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b482b-8cb7-7c4e-8f33-eb643e2f9bea/trim?format=webp&max=800%7C450",
        color: "#1e40af",
        year: "2026",
        genres: "Drama, Medical, FOX"
    },
    {
        id: 126,
        title: "The Great",
        type: "Hulu Original Series",
        description: "A satirical comedy-drama following Catherine the Great's rise from outsider to the longest-reigning female ruler in Russian history.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/73d30f81-bd9c-4253-98e1-d8e70c6d63fd/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/611b087d-6e7f-40d5-8c97-705fbc730058/trim?format=webp&max=800%7C450",
        color: "#7e22ce",
        year: "2020",
        genres: "Drama, Comedy, Hulu Original"
    },
    {
        id: 127,
        title: "Shifting Gears",
        type: "Series",
        description: "A stubborn master mechanic's life gets upended when his estranged daughter and her kids move into his garage-turned-home.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/bcd42178-82a1-4935-b635-5da0b52c5eac/compose?format=webp&label=poster_vertical_abc_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/17af09b0-e7b2-4346-a8e7-b81a38c4d843/trim?format=webp&max=800%7C450",
        color: "#b45309",
        year: "2025",
        genres: "Comedy, ABC"
    },
    {
        id: 128,
        title: "Paradise",
        type: "Hulu Original Series",
        description: "A gripping thriller set in an exclusive community where a shocking murder threatens to unravel the carefully constructed lives of its powerful residents.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c058d-ae50-778b-89a4-30c0bb002cb2/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c05f0-13e6-7b35-a756-0b097036e872/trim?format=webp&max=800%7C450",
        color: "#164e63",
        year: "2025",
        genres: "Drama, Action and Adventure, Hulu Original"
    },
    {
        id: 129,
        title: "ER",
        type: "Series",
        description: "The lives, loves, and struggles of the doctors and nurses in a bustling Chicago emergency room unfold in this groundbreaking medical drama.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3d1dd83c-e389-46ac-9002-94fd6dc38b25/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e3309c16-0b04-4104-9df4-a34a28135804/trim?format=webp&max=800%7C450",
        color: "#1e40af",
        year: "1994",
        genres: "Drama, Medical"
    },
    {
        id: 130,
        title: "The Lowdown",
        type: "Series",
        description: "A gritty FX drama exploring the underbelly of power, corruption, and survival in a world where nothing is as it seems.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9bba637f-ac48-43a9-9934-0df7c65f0967/compose?format=webp&label=poster_vertical_fx_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7aeb7ab1-8de0-4c93-9cc4-d79cf77ea7df/trim?format=webp&max=800%7C450",
        color: "#374151",
        year: "2025",
        genres: "Drama, FX"
    },
    {
        id: 131,
        title: "Elementary",
        type: "Series",
        description: "A modern retelling of Sherlock Holmes set in New York City, where a recovering addict and former surgeon team up to solve the NYPD's toughest cases.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a16bcc8a-465d-44dc-8668-7dc201ec4fa2/compose?format=webp&label=poster_vertical_cbs_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fbeb9470-da27-43b2-be95-e72cd5ce59cc/trim?format=webp&max=800%7C450",
        color: "#4b5563",
        year: "2012",
        genres: "Drama, Legal, CBS"
    },
    {
        id: 132,
        title: "In Vogue: The 90s",
        type: "Hulu Original Series",
        description: "A stylish docuseries chronicling the iconic fashion moments, cultural shifts, and influential figures that defined the glamorous world of 1990s Vogue.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/98ea8e4b-a809-4d27-b9ad-3c58fa2d5237/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4df918a6-fbfb-4516-a48c-d4d815eb0bb3/trim?format=webp&max=800%7C450",
        color: "#831843",
        year: "2024",
        genres: "Docuseries, Hulu Original"
    },
    {
        id: 133,
        title: "Cheers",
        type: "Series",
        description: "The regulars of a Boston bar where everybody knows your name share laughs, love, and life in this beloved sitcom classic.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8ff57108-e5e5-4be9-b30e-e7311c5b4019/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ea5284b8-eded-465e-9db3-4ecc56e2a6c5/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "1982",
        genres: "Sitcom, Classics"
    },
    {
        id: 134,
        title: "The Mentalist",
        type: "Series",
        description: "A former psychic medium uses his keen powers of observation to help the California Bureau of Investigation solve serious crimes.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ab2e4653-60d7-4773-9f64-2f367d809589/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5fb196ae-928c-413f-8941-d9b488a77953/trim?format=webp&max=800%7C450",
        color: "#4c1d95",
        year: "2008",
        genres: "Drama, Adventure"
    },
    {
        id: 135,
        title: "M*A*S*H",
        type: "Series",
        description: "The doctors and staff of a mobile Army surgical hospital during the Korean War cope with the horrors of war through humor and compassion.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/bacb0306-5503-4353-8515-d4577368c6c1/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4e64f6e1-6b18-4c3f-91c5-63f6eb281f63/trim?format=webp&max=800%7C450",
        color: "#3f6212",
        year: "1972",
        genres: "Drama, Medical"
    },
    {
        id: 136,
        title: "Andor",
        type: "Disney+ Original",
        description: "A thief-turned-rebel spy embarks on a dangerous journey that ignites the spark of revolution against the Galactic Empire in this gripping Star Wars saga.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b967d-dee0-7ed5-ac0d-e73dd7513fa7/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/11db94bc-e815-412f-8c36-a399cd79b58f/trim?format=webp&max=800%7C450",
        color: "#1e3a5f",
        year: "2022",
        genres: "Action and Adventure, Science Fiction"
    },
    {
        id: 137,
        title: "Boston Legal",
        type: "Series",
        description: "Eccentric lawyers at a prestigious Boston firm tackle outrageous cases while navigating their unconventional friendship and the gray areas of the law.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/68d2eccd-c7ce-4e72-a84c-0a5bb06b2376/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a9fdb49b-0e5d-4093-803e-0442faa7a470/trim?format=webp&max=800%7C450",
        color: "#1e40af",
        year: "2004",
        genres: "Drama, Legal"
    },
    {
        id: 138,
        title: "Alone",
        type: "Series",
        description: "Survivalists are dropped in the wilderness with limited gear and must endure isolation and harsh conditions to be the last one standing.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019d0391-587e-7382-91cd-fd048b9d0648/compose?format=webp&label=poster_vertical_the-history-channel_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/db03345b-dfd7-455c-b394-e4a0587d22e9/trim?format=webp&max=800%7C450",
        color: "#374151",
        year: "2015",
        genres: "Documentaries, Adventure, The HISTORY Channel"
    },
    {
        id: 139,
        title: "New Girl",
        type: "Series",
        description: "An offbeat teacher moves into a Los Angeles loft with three single guys, leading to unexpected friendships and hilarious misadventures.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f6c99b1e-54f6-4a88-91cc-7aa124dfae0e/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#3b82f6",
        year: "2011",
        genres: "Comedy"
    },
    {
        id: 140,
        title: "The Simpsons",
        type: "Series",
        description: "America's favorite animated family navigates everyday life in the town of Springfield with sharp wit and satirical humor.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/46940a01-834d-4e89-9b09-18abdab69dd5/compose?format=webp&label=standard_art_vertical_disney-seasonal_071&width=800",
        color: "#eab308",
        year: "1989",
        genres: "Animation, Comedy"
    },
    {
        id: 141,
        title: "How I Met Your Mother",
        type: "Series",
        description: "A father recounts to his children the journey of how he met their mother, weaving through years of love, friendship, and misadventures in New York City.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0ad18e17-ec24-406e-9c54-b61fb629aff9/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#7c3aed",
        year: "2005",
        genres: "Comedy, Romance"
    },
    {
        id: 142,
        title: "Hannah Montana",
        type: "Series",
        description: "A teenager lives a double life as an ordinary schoolgirl by day and a famous pop star by night, keeping her identity secret from everyone.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5221d963-9a28-40da-b451-5f85933907e8/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#ec4899",
        year: "2006",
        genres: "Comedy, Kids"
    },
    {
        id: 143,
        title: "The Kardashians",
        type: "Hulu Original Series",
        description: "The Kardashian-Jenner family opens their lives to cameras once again, navigating business empires, family dynamics, and life in the spotlight.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ba184293-0b86-4e05-9387-beb7c103250b/compose?format=webp&label=standard_art_vertical_hulu-original-series_071&width=800",
        color: "#a855f7",
        year: "2022",
        genres: "Reality, Hulu Original"
    },
    {
        id: 144,
        title: "Criminal Minds",
        type: "Series",
        description: "An elite team of FBI profilers analyzes the country's most twisted criminal minds to anticipate their next moves before they strike again.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b95ed-f17b-7ec7-bf05-560cb7bbc965/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#991b1b",
        year: "2005",
        genres: "Drama, Procedural"
    },
    {
        id: 145,
        title: "Bones",
        type: "Series",
        description: "A forensic anthropologist and a cocky FBI agent team up to investigate cases where only bones remain, uncovering the stories the dead left behind.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8fb1e792-e59d-42f3-a232-74a55e24684a/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#78716c",
        year: "2005",
        genres: "Drama, Procedural"
    },
    {
        id: 146,
        title: "Secrets of the Bees",
        type: "Series",
        description: "An intimate look into the extraordinary hidden world of bees, revealing their complex societies and critical role in sustaining life on Earth.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c8cf5-b0c2-7572-8811-76a427a43be0/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#ca8a04",
        year: "2025",
        genres: "Documentaries, Animals & Nature"
    },
    {
        id: 147,
        title: "Futurama",
        type: "Hulu Original Series",
        description: "A pizza delivery guy accidentally frozen in 1999 wakes up in the year 3000 and finds work at an interplanetary delivery company.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b76f8f97-dc1b-4273-b621-182bb867c925/compose?format=webp&label=standard_art_vertical_hulu-original-series_071&width=800",
        color: "#dc2626",
        year: "1999",
        genres: "Animation, Comedy, Hulu Original"
    },
    {
        id: 148,
        title: "House",
        type: "Series",
        description: "A brilliant but misanthropic diagnostic doctor leads a team of specialists to solve medical mysteries that have stumped everyone else.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8d31354f-a71a-4ec4-9ffa-a94f4670e8b1/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#1e40af",
        year: "2004",
        genres: "Drama, Medical"
    },
    {
        id: 149,
        title: "Implosion: The Titanic Sub Disaster",
        type: "Series",
        description: "The harrowing true story of the Titan submersible tragedy, exploring the events that led to the catastrophic implosion during a dive to the Titanic wreckage.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0a5a83ec-82bd-43e9-a592-0d898df1b637/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#1e3a5f",
        year: "2025",
        genres: "Documentaries"
    },
    {
        id: 150,
        title: "Secrets of the Octopus",
        type: "Series",
        description: "Dive into the mysterious world of octopuses, revealing their remarkable intelligence, camouflage abilities, and surprising emotional depth.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/691e7c6a-5cd9-4f46-80db-8c873cb25101/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#0e7490",
        year: "2024",
        genres: "Documentaries, Animals & Nature"
    },
    {
        id: 151,
        title: "The Nanny",
        type: "Series",
        description: "A flashy woman from Flushing, Queens becomes the nanny to three children of a wealthy British Broadway producer, turning his household upside down.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c264e-17e8-7fef-92af-dbf8ab4f1a15/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#be185d",
        year: "1993",
        genres: "Comedy"
    },
    {
        id: 152,
        title: "Bluey",
        type: "Series",
        description: "An energetic Blue Heeler puppy lives with her family and turns everyday life into extraordinary adventures through creative play and imagination.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2b126592-96e9-4036-b714-d57cc5424b40/compose?format=webp&label=standard_art_vertical_071&width=800",
        color: "#2563eb",
        year: "2018",
        genres: "Animation, Kids"
    },
    {
        id: 153,
        title: "Pretty Baby: Brooke Shields",
        type: "Hulu Original Series",
        description: "An unflinching look at the life and career of Brooke Shields, examining society's complicated relationship with beauty, femininity, and fame.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a84eb818-6aa3-4a2e-9a36-98fa9ae4d6a7/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b5067245-b624-4c45-8e24-70b6ee10cbe2/trim?format=webp&max=800%7C450",
        color: "#831843",
        year: "2023",
        genres: "Docuseries, Biography, Hulu Original"
    },
    {
        id: 154,
        title: "Secrets of the Elephants",
        type: "Series",
        description: "An awe-inspiring journey into the hidden world of elephants, revealing their remarkable intelligence, deep family bonds, and cultural traditions.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/905147f0-c983-4b5f-8aaf-27fe73c84794/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/edc04869-9d9e-4e21-a3d9-d8faaf901364/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "2023",
        genres: "Animals & Nature, Docuseries"
    },
    {
        id: 155,
        title: "America's National Parks (Classic)",
        type: "Series",
        description: "A breathtaking exploration of America's most iconic national parks, showcasing the stunning landscapes and diverse wildlife that make them treasures.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7834f19d-fdd3-42b1-8841-cf4dec47d7dc/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ee3d16d4-f36f-40f2-8913-f04dfb0e703a/trim?format=webp&max=800%7C450",
        color: "#15803d",
        year: "2015",
        genres: "Animals & Nature, Docuseries"
    },
    {
        id: 156,
        title: "The Faithful: Women of the Bible",
        type: "Series",
        description: "A dramatic retelling of the powerful stories of women from the Bible, exploring their faith, courage, and lasting impact on history.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019cdabb-8fe2-759b-8a84-3cead6ec1323/compose?format=webp&label=poster_vertical_fox_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019cdabb-adcc-7c9b-91e8-f56d30e702ee/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "2026",
        genres: "Drama, Religion & Spirituality, FOX"
    },
    {
        id: 157,
        title: "LIGHT & MAGIC",
        type: "Disney+ Original",
        description: "The untold story of Industrial Light & Magic, the legendary visual effects company founded by George Lucas that revolutionized filmmaking forever.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/22ef85cf-64a6-43c7-9e1a-bbfb49b3f403/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a03e31d1-6571-43cb-aa58-f20ef948af3b/trim?format=webp&max=800%7C450",
        color: "#1e3a5f",
        year: "2022",
        genres: "Docuseries"
    },
    {
        id: 158,
        title: "The Beach Boys",
        type: "Disney+ Original",
        description: "The definitive documentary about The Beach Boys, chronicling their rise from a garage band to global icons who defined the California sound.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4655922c-9550-440d-8673-c34674191f8c/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6d6c914a-9eab-46d8-8456-f8f16dd8fea4/trim?format=webp&max=800%7C450",
        color: "#0369a1",
        year: "2024",
        genres: "Documentaries, Music"
    },
    {
        id: 159,
        title: "Friends Like These: The Murder of Skylar Neese",
        type: "Hulu Original Series",
        description: "A chilling true crime docuseries examining the shocking murder of teenager Skylar Neese by her two closest friends in a small West Virginia town.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c7665-16ea-7c23-b65c-95b9c9ba0faf/compose?format=webp&label=poster_vertical_hulu-original-series_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c7665-e170-723b-9952-d924b718d457/trim?format=webp&max=800%7C450",
        color: "#1c1917",
        year: "2026",
        genres: "Docuseries, Hulu Original"
    },
    {
        id: 160,
        title: "American Godfathers: The Five Families",
        type: "Series",
        description: "A gripping historical docuseries tracing the rise and fall of New York's five most powerful Mafia families and their iron grip on organized crime.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/556f8d21-8aec-45bd-9c35-0e94f033cafa/compose?format=webp&label=poster_vertical_the-history-channel_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9172367d-ad2f-4079-b7ab-3f20c8ab25f9/trim?format=webp&max=800%7C450",
        color: "#292524",
        year: "2024",
        genres: "History, Crime, The HISTORY Channel"
    },
    {
        id: 161,
        title: "Sunny Nights",
        type: "Series",
        description: "A drama-comedy exploring the vibrant nightlife scene and the colorful characters who come alive after dark.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b47e5-3c37-79b5-b9f1-493e4a4bcbb5/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b47e5-6838-7b1c-8d63-b9b7084f883b/trim?format=webp&max=800%7C450",
        color: "#ca8a04",
        year: "2025",
        genres: "Drama, Comedy"
    },
    {
        id: 162,
        title: "National Parks: USA",
        type: "Series",
        description: "A stunning visual journey through America's national parks, capturing the extraordinary beauty and ecological diversity of these protected landscapes.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b27df-37b8-7a99-b116-b84c7888eb37/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b27df-363d-754d-b282-0872a8d15294/trim?format=webp&max=800%7C450",
        color: "#166534",
        year: "2024",
        genres: "Animals & Nature, Docuseries"
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
    },
    {
        id: 11,
        title: "The Beatles: Get Back",
        type: "Disney+ Original Series",
        description: "Peter Jackson's documentary chronicles the making of the Beatles' final album, capturing the creative process and interpersonal dynamics of the legendary band.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d76deaab-f00e-490f-9e19-876cbf945aa5/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/510189b7-f82a-48cb-92a7-2cd4f11918a6/trim?format=webp&max=800%7C450",
        color: "#4a3728",
        year: "2021",
        genres: "History, Music"
    },
    {
        id: 12,
        title: "Tucci in Italy",
        type: "Series",
        description: "Stanley Tucci explores Italy's diverse regions, discovering the history, culture, and flavors behind the country's most beloved dishes.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b3169-dde0-725d-9c5e-d315311bc0ae/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b3169-d6fd-7329-978e-e80f43499874/trim?format=webp&max=800%7C450",
        color: "#d97706",
        year: "2025",
        genres: "Lifestyle, Docuseries"
    },
    {
        id: 13,
        title: "Incas: The Rise and Fall",
        type: "Series",
        description: "The epic story of the Inca Empire, from its remarkable rise to its dramatic fall, told through archaeological discoveries and expert insights.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c0793-aa41-7606-8f5b-9891e79e91db/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c0793-b6d2-74d3-92c2-4c983f591b6e/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "2025",
        genres: "History, Docuseries"
    },
    {
        id: 14,
        title: "The Suspicions of Mr Whicher",
        type: "Series",
        description: "A detective investigates a shocking murder in a Victorian English country house, uncovering dark secrets beneath a respectable facade.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d36a6da8-4b42-48c3-b101-21900def0b97/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/40058f57-82f7-43b6-9828-02cb64f9dcfc/trim?format=webp&max=800%7C450",
        color: "#374151",
        year: "2013",
        genres: "Drama, History"
    },
    {
        id: 15,
        title: "Fringe",
        type: "Series",
        description: "An FBI agent, a genius scientist, and his son investigate a series of unexplained phenomena linked to a parallel universe.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ae117-e358-78f3-a902-79ce25e856c7/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ae118-6334-732d-ae52-dfced5d93998/trim?format=webp&max=800%7C450",
        color: "#1e3a5f",
        year: "2008",
        genres: "Drama, Adventure"
    },
    {
        id: 31,
        title: "Strangest Things",
        type: "Series",
        description: "A deep dive into history's most bizarre and unexplained events, artifacts, and phenomena that continue to baffle experts.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/61fb3af1-9559-4d37-89dd-c5eca447b8b4/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8d59b9f8-e79b-4f7e-828a-d42d7affe139/trim?format=webp&max=800%7C450",
        color: "#4c1d95",
        year: "2025",
        genres: "History, Docuseries"
    },
    {
        id: 32,
        title: "Modern Family",
        type: "Series",
        description: "Three interconnected families navigate the challenges and hilarity of modern life in this mockumentary-style comedy.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c4f26-89c8-7599-bd64-3827b4c0df3b/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2b85340f-a4df-4677-a27c-7f991950b31a/trim?format=webp&max=800%7C450",
        color: "#059669",
        year: "2009",
        genres: "Sitcom, Comedy"
    },
    {
        id: 33,
        title: "The Incredible Dr. Pol",
        type: "Series",
        description: "Follow the charismatic Dr. Jan Pol as he treats a wide variety of animals at his rural Michigan veterinary practice.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f35956ee-ad2a-4edd-93e8-6e1853386e54/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ebe05eea-84cc-4f3f-ad7d-f370bb8bc239/trim?format=webp&max=800%7C450",
        color: "#15803d",
        year: "2011",
        genres: "Medical, Reality"
    },
    {
        id: 34,
        title: "Wonder Man",
        type: "Disney+ Original Series",
        description: "A failed actor with extraordinary powers is thrust into the world of super heroes in this action-packed Marvel series.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c01f9-19e8-7e74-a736-19391c0d95c1/compose?format=webp&label=poster_vertical_disney-original_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ec0fa3d5-ed0c-4468-b940-1c819a06834d/trim?format=webp&max=800%7C450",
        color: "#b91c1c",
        year: "2026",
        genres: "Super Heroes, Action and Adventure"
    },
    {
        id: 35,
        title: "Scrubs",
        type: "Series",
        description: "Young doctors navigate the chaotic world of medicine with humor, heart, and the occasional fantasy sequence at Sacred Heart Hospital.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ada77-ce09-7fb8-9106-3286300b13d1/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019ada78-d0c8-7ee9-9569-02eb2681e4e3/trim?format=webp&max=800%7C450",
        color: "#0891b2",
        year: "2001",
        genres: "Drama, Medical"
    },
    {
        id: 36,
        title: "Ella McCay",
        type: "Movie",
        description: "A heartfelt drama-comedy following the journey of a young woman navigating life's unexpected twists with wit and resilience.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c2f51-f2ae-7909-9ad3-a0a734101960/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019be8b7-4c3e-78ba-8b36-6317c5bedb77/trim?format=webp&max=800%7C450",
        color: "#d97706",
        year: "2025",
        genres: "Drama, Comedy"
    },
    {
        id: 37,
        title: "Firefly",
        type: "Series",
        description: "A ragtag crew aboard a small transport ship takes on any job to survive on the fringes of society in a future where the galaxy has been colonized.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/651f3664-251b-41ba-aeff-1dc70116df94/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c15bcda7-82f7-462e-96f5-e86d2267ec43/trim?format=webp&max=800%7C450",
        color: "#92400e",
        year: "2002",
        genres: "Western, Adventure"
    },
    {
        id: 38,
        title: "The X-Files",
        type: "Series",
        description: "Two FBI agents investigate unsolved cases involving paranormal phenomena, government conspiracies, and unexplained events.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019c1fe4-619b-7df6-a929-b866f58d0a61/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/29e15ccd-70eb-4d0e-93b4-170fbab09653/trim?format=webp&max=800%7C450",
        color: "#1e3a5f",
        year: "1993",
        genres: "Science Fiction, Drama"
    },
    {
        id: 39,
        title: "Europe From Above",
        type: "Series",
        description: "Stunning aerial footage reveals the breathtaking landscapes, architecture, and hidden wonders of Europe from a bird's-eye perspective.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/68937432-2d24-47a0-ad75-c3f45c10b79f/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/651a9835-35d7-415b-93e2-9503ad9fad02/trim?format=webp&max=800%7C450",
        color: "#0369a1",
        year: "2024",
        genres: "Documentaries, Docuseries"
    },
    {
        id: 40,
        title: "History's Greatest Mysteries",
        type: "Series",
        description: "Delve into the world's most enduring unsolved mysteries, from ancient enigmas to modern-day puzzles, with new evidence and expert analysis.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6a6e8f35-a5f6-4029-adb1-6874c3ef7682/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/80396652-6452-4f00-966b-a5f3db3b5762/trim?format=webp&max=800%7C450",
        color: "#78350f",
        year: "2020",
        genres: "Documentaries, History"
    },
    {
        id: 41,
        title: "The Fantastic Four: First Steps",
        type: "Movie",
        description: "Marvel's first family embarks on their origin story in a retro-futuristic 1960s setting, facing a cosmic threat that will test their newfound powers.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a52a8-de93-7693-b8e2-0927e66e0b4f/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4ac814c6-b7ef-446e-915b-6126f9a35cd9/trim?format=webp&max=800%7C450",
        color: "#1e40af",
        year: "2025",
        genres: "Super Heroes, Action and Adventure"
    },
    {
        id: 42,
        title: "Deadpool & Wolverine",
        type: "Movie",
        description: "The irreverent Deadpool teams up with a reluctant Wolverine for a multiverse-spanning adventure to save their world from annihilation.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6ce1f5bd-92aa-4d3b-83d7-1d72c0fd3859/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f1ef9c18-cf8a-40d1-886b-28ea1e650c73/trim?format=webp&max=800%7C450",
        color: "#b91c1c",
        year: "2024",
        genres: "Super Heroes, Action and Adventure"
    },
    {
        id: 43,
        title: "The Roses",
        type: "Movie",
        description: "A comedic look at family dynamics and personal reinvention as the Rose family navigates love, loss, and unexpected new beginnings.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a2cb4-3a75-7859-8b4c-5f2a996cb096/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019a2cb4-af0b-77cf-954a-14958d5c01e6/trim?format=webp&max=800%7C450",
        color: "#be185d",
        year: "2025",
        genres: "Comedy"
    },
    {
        id: 44,
        title: "The Greeks",
        type: "Series",
        description: "An epic exploration of ancient Greek civilization, tracing the rise of democracy, philosophy, and culture that shaped the Western world.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b27e4-bf66-71f1-9a90-44f6a8ce9efd/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b27e4-b7b4-7c42-8083-ced346d1d73a/trim?format=webp&max=800%7C450",
        color: "#1e3a5f",
        year: "2016",
        genres: "History, Docuseries"
    },
    {
        id: 45,
        title: "Arctic Ascent with Alex Honnold",
        type: "Series",
        description: "Free solo climber Alex Honnold tackles Greenland's towering ice walls while documenting the dramatic effects of climate change on Arctic glaciers.",
        background: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/99aaba68-519f-4094-9e8b-209574a998aa/compose?format=webp&label=poster_vertical_080&width=800",
        titleImage: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/dc4bd9e0-7686-4a01-b7a7-191d714313d8/trim?format=webp&max=800%7C450",
        color: "#0c4a6e",
        year: "2024",
        genres: "Action and Adventure, Animals & Nature"
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

// Discovery modes for coin spend — categories aligned with poster guide label taxonomy
const DISCOVERY_MODES = [
    {
        id: 'disney-vault',
        name: 'Disney Vault',
        description: 'Classic films and Disney+ Originals',
        filter: item => (item.id >= 16 && item.id <= 30) || /Disney\+ Original/i.test(item.type)
    },
    {
        id: 'streaming-originals',
        name: 'Streaming Originals',
        description: 'Hulu Originals and FX prestige series',
        filter: item => /Hulu Original/i.test(item.type) || /FX/i.test(item.genres)
    },
    {
        id: 'nature-discovery',
        name: 'Nature & Discovery',
        description: 'Documentaries, nature, and history',
        filter: item => /Docuseries|Documentaries|Animals & Nature|History|Lifestyle/i.test(item.genres)
    },
    {
        id: 'new-trending',
        name: 'New & Trending',
        description: 'The latest 2025–2026 releases',
        filter: item => parseInt(item.year) >= 2025
    }
];

let activeMode = null;

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

    let pool = contentData;

    if (activeMode) {
        pool = contentData.filter(activeMode.filter);
    }

    const unshownContent = pool.filter(item => !shownContent.includes(item.id));

    if (unshownContent.length === 0) {
        return shuffleArray([...pool]).slice(0, SESSION_SIZE);
    }

    if (unshownContent.length >= SESSION_SIZE) {
        return shuffleArray(unshownContent).slice(0, SESSION_SIZE);
    }

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

// Coin bank persistence
function loadCoinBank() {
    return parseInt(localStorage.getItem('swipewatch_coin_bank') || '0', 10);
}

function saveCoinBank(total) {
    localStorage.setItem('swipewatch_coin_bank', String(total));
}

function resetCoinBank() {
    localStorage.removeItem('swipewatch_coin_bank');
}

let coinBankTotal = loadCoinBank();

// DOM Elements
const cardStack = document.getElementById('card-stack');
const endScreen = document.getElementById('end-screen');
const restartBtn = document.getElementById('restart-btn');
const spendBtn = document.getElementById('spend-btn');
const unlockModal = document.getElementById('unlock-modal');
const unlockModesContainer = document.getElementById('unlock-modes');
const unlockCancelBtn = document.getElementById('unlock-cancel');
const dislikeBtn = document.getElementById('dislike-btn');
const likeBtn = document.getElementById('like-btn');
const superBtn = document.getElementById('super-btn');

// Progress elements
const progressBar = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');

// Coin badge in header
const coinBadgeCount = document.getElementById('coin-badge-count');

// End screen elements
const endHeading = document.getElementById('end-heading');
const endSubheading = document.getElementById('end-subheading');
const coinSessionAmount = document.getElementById('coin-session-amount');
const coinBankValue = document.getElementById('coin-bank-value');
const endLikedCount = document.getElementById('end-liked-count');
const endSuperCount = document.getElementById('end-super-count');
const endDislikedCount = document.getElementById('end-disliked-count');

// Swipe indicators
const nopeIndicator = document.querySelector('.swipe-indicator.nope');
const likeIndicator = document.querySelector('.swipe-indicator.like');
const superIndicator = document.querySelector('.swipe-indicator.super');

// Toast element
const swipeToast = document.getElementById('swipe-toast');

// Onboarding elements
const onboarding = document.getElementById('onboarding');
const startBtn = document.getElementById('start-btn');

// Idle affordance state
let idleTimeout = null;

// Gesture demo state
let gestureDemoShown = false;

// Initialize app
function init() {
    currentIndex = 0;
    stats = { liked: 0, superLiked: 0, disliked: 0 };
    cardStack.innerHTML = '';
    endScreen.classList.add('hidden');

    sessionContent = getSessionContent();

    updateProgress();
    updateCoinBadge();

    for (let i = 0; i < Math.min(3, sessionContent.length); i++) {
        createCard(i);
    }

    armIdlePulse();
}

function updateCoinBadge() {
    coinBadgeCount.textContent = coinBankTotal;
}

// Update progress bar and label
function updateProgress() {
    const progress = (currentIndex / sessionContent.length) * 100;
    progressBar.style.width = `${progress}%`;
    const display = Math.min(currentIndex + 1, sessionContent.length);
    progressLabel.textContent = `${display} of ${sessionContent.length} recommendations`;
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

    const badgeHTML = activeMode ? `<div class="card-mode-badge">${activeMode.name}</div>` : '';

    card.innerHTML = `
        ${posterHTML}
        ${badgeHTML}
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

        cancelIdlePulse(card);
        cancelGestureDemo(card);
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

        const shadowX = -deltaX * 0.05;
        const shadowY = 10 + Math.abs(deltaY) * 0.02;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.3)`;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
        const ACTION_THRESHOLD = 100;

        if (absY > absX && deltaY < -20) {
            const progress = Math.min(1, Math.abs(deltaY) / ACTION_THRESHOLD);
            showIndicatorScaled('super', progress);
        } else if (absX > absY && deltaX < -20) {
            const progress = Math.min(1, absX / ACTION_THRESHOLD);
            showIndicatorScaled('nope', progress);
        } else if (absX > absY && deltaX > 20) {
            const progress = Math.min(1, absX / ACTION_THRESHOLD);
            showIndicatorScaled('like', progress);
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

        if (absY > absX && deltaY < -100) {
            swipeCard(card, 'up');
        } else if (absX > absY && deltaX < -100) {
            swipeCard(card, 'left');
        } else if (absX > absY && deltaX > 100) {
            swipeCard(card, 'right');
        } else {
            card.style.transform = '';
            card.style.boxShadow = '';
            hideAllIndicators();
            armIdlePulse();
        }
    };

    card.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

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
    card.style.boxShadow = '';
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

    // Increment coin bank live
    coinBankTotal++;
    saveCoinBank(coinBankTotal);
    updateCoinBadge();

    // Sync progress bar with card exit animation
    currentIndex++;
    updateProgress();

    showSwipeToast();

    setTimeout(() => {
        shownContent.push(content.id);
        saveShownContent();

        card.remove();

        if (currentIndex + 2 < sessionContent.length) {
            createCard(currentIndex + 2);
        }

        if (currentIndex >= sessionContent.length) {
            showEndScreen();
        } else {
            const nextCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
            if (nextCard) {
                addSwipeListeners(nextCard);
                nextCard.style.transform = '';
                armIdlePulse();
            }
        }
    }, 300);
}

// Show swipe indicator with scaled opacity/size
function showIndicatorScaled(type, progress) {
    hideAllIndicators();
    let el;
    if (type === 'nope') el = nopeIndicator;
    else if (type === 'like') el = likeIndicator;
    else if (type === 'super') el = superIndicator;
    if (!el) return;

    el.style.opacity = progress;
    const scale = progress > 0.5 ? 1 + (progress - 0.5) * 0.1 : 1;
    el.style.transform = el.style.transform || '';
    const baseRotation = type === 'nope' ? 'rotate(-20deg)' : type === 'like' ? 'rotate(20deg)' : 'rotate(0deg)';
    el.style.transform = `${baseRotation} scale(${scale})`;
}

// Hide all indicators
function hideAllIndicators() {
    [nopeIndicator, likeIndicator, superIndicator].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = '';
    });
}

// Idle pulse helpers
function armIdlePulse() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
        const topCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
        if (topCard && !topCard.classList.contains('gesture-demo')) {
            topCard.classList.add('idle-pulse');
        }
    }, 4000);
}

function cancelIdlePulse(card) {
    clearTimeout(idleTimeout);
    card.classList.remove('idle-pulse');
}

// Gesture demo helpers
function triggerGestureDemo() {
    if (sessionStorage.getItem('swipewatch_gesture_demo')) return;
    const topCard = cardStack.querySelector(`.card[data-index="${currentIndex}"]`);
    if (!topCard) return;

    gestureDemoShown = true;
    topCard.classList.add('gesture-demo');

    const flash = document.createElement('div');
    flash.className = 'gesture-like-flash';
    flash.textContent = 'LIKE';
    topCard.appendChild(flash);

    topCard.addEventListener('animationend', function onEnd() {
        topCard.removeEventListener('animationend', onEnd);
        topCard.classList.remove('gesture-demo');
        flash.remove();
        sessionStorage.setItem('swipewatch_gesture_demo', 'true');
        gestureDemoShown = false;
        armIdlePulse();
    }, { once: true });
}

function cancelGestureDemo(card) {
    if (!gestureDemoShown) return;
    card.classList.remove('gesture-demo');
    const flash = card.querySelector('.gesture-like-flash');
    if (flash) flash.remove();
    sessionStorage.setItem('swipewatch_gesture_demo', 'true');
    gestureDemoShown = false;
}

// Toast helper
function showSwipeToast(text) {
    if (text) swipeToast.textContent = text;
    else swipeToast.textContent = 'Learning your taste...';
    swipeToast.classList.add('visible');
    const duration = text ? 1500 : 400;
    setTimeout(() => {
        swipeToast.classList.remove('visible');
    }, duration);
}

// Detect if content pool is fully exhausted
function isPoolExhausted() {
    loadShownContent();
    const unshown = contentData.filter(item => !shownContent.includes(item.id));
    return unshown.length === 0;
}

// Show end screen with stats
function showEndScreen() {
    activeMode = null;
    const sessionCoins = stats.liked + stats.superLiked + stats.disliked;
    const poolDone = isPoolExhausted();

    // Coin bank already updated live during swipes — just sync badge
    updateCoinBadge();

    // Rotating heading
    const headings = ['Session Complete', 'Recommendations Refined', 'Your Taste Profile Updated'];
    endHeading.textContent = headings[Math.floor(Math.random() * headings.length)];
    endSubheading.textContent = 'Based on your swipes, we\u2019ve refined your recommendations.';

    // Session stats
    endLikedCount.textContent = stats.liked;
    endSuperCount.textContent = stats.superLiked;
    endDislikedCount.textContent = stats.disliked;

    // Coin display
    coinSessionAmount.textContent = `+${sessionCoins}`;
    coinBankValue.textContent = coinBankTotal;

    // Coin glow animation
    const coinImg = document.querySelector('.coin-summary-image');
    if (coinImg) {
        coinImg.classList.add('glow');
        coinImg.addEventListener('animationend', () => coinImg.classList.remove('glow'), { once: true });
    }

    // Count-up animation on session coins
    animateCountUp(coinSessionAmount, sessionCoins);

    // Spend button visibility
    if (coinBankTotal >= 25 && !poolDone) {
        spendBtn.classList.remove('hidden');
    } else {
        spendBtn.classList.add('hidden');
    }

    // CTA text based on pool state
    if (poolDone) {
        restartBtn.textContent = 'Start Fresh';
    } else {
        const ctas = ['Keep Exploring', 'Swipe Another Batch'];
        restartBtn.textContent = ctas[Math.floor(Math.random() * ctas.length)];
    }

    endScreen.classList.remove('hidden');
}

// Count-up animation helper
function animateCountUp(el, target) {
    const prefix = '+';
    const duration = 500;
    const start = performance.now();

    function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = `${prefix}${current}`;
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
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

    if (isPoolExhausted()) {
        resetCoinBank();
        coinBankTotal = 0;
        shownContent = [];
        saveShownContent();
        localStorage.removeItem('swipewatch_onboarding_completed');
        onboarding.classList.remove('hidden');
        init();
    } else {
        init();
    }
});

spendBtn.addEventListener('click', () => {
    if (coinBankTotal < 25) return;
    endScreen.classList.add('hidden');
    openUnlockModal();
});

function openUnlockModal() {
    unlockModesContainer.innerHTML = '';
    DISCOVERY_MODES.forEach(mode => {
        const btn = document.createElement('button');
        btn.className = 'unlock-mode-btn';
        btn.innerHTML = `<span class="mode-name">${mode.name}</span><span class="mode-desc">${mode.description}</span>`;
        btn.addEventListener('click', () => selectUnlockMode(mode));
        unlockModesContainer.appendChild(btn);
    });
    unlockModal.classList.remove('hidden');
}

function selectUnlockMode(mode) {
    activeMode = mode;
    const startBank = coinBankTotal;
    coinBankTotal -= 25;
    saveCoinBank(coinBankTotal);
    animateCoinTickDown(startBank, coinBankTotal);
    unlockModal.classList.add('hidden');
    showSwipeToast(`Rare Picks: ${mode.name} Unlocked`);
    trackEvent('unlock_mode', mode.name, coinBankTotal);
    init();
}

function animateCoinTickDown(from, to) {
    const duration = 400;
    const start = performance.now();

    function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from - (from - to) * eased);
        coinBadgeCount.textContent = current;
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

unlockCancelBtn.addEventListener('click', () => {
    unlockModal.classList.add('hidden');
    endScreen.classList.remove('hidden');
});

// Onboarding handler
startBtn.addEventListener('click', () => {
    onboarding.classList.add('hidden');
    localStorage.setItem('swipewatch_onboarding_completed', 'true');
    trackEvent('onboarding', 'User completed onboarding', 0);
    triggerGestureDemo();
});

// Check if onboarding has been completed
function checkOnboarding() {
    const completed = localStorage.getItem('swipewatch_onboarding_completed');
    if (completed === 'true') {
        onboarding.classList.add('hidden');
    }
    return completed === 'true';
}

// Start the app
const skipOnboarding = checkOnboarding();
init();
if (skipOnboarding) {
    triggerGestureDemo();
}
