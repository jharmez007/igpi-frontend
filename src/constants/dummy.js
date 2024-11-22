import { FaLinkedin, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { images } from '../constants/index';


export const links = [
    {
        name: 'About Us',
        link: 'aboutUs',
    },
    {
        name: 'Support Us',
        link: 'support',
    },
    {
        name: 'Our Team',
        link: 'team',
    },
    {
        name: 'Contact',
        link: 'contact',
    },
];

export const socials = [
    {
        icon: <FaXTwitter />,
        link: 'https://x.com/IGPI4ALL?s=09',
    },
    {
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61565726552235&mibextid=ZbWKwL',
    },
    {
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/inclusive-growth-prosperity-initiative-a3315132b',
    },
    {
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/igpi4all',
    },
    {
        icon: <FaTiktok />,
        link: 'https://www.tiktok.com/@igpi4all?_t=8penjOB9fDK&_r=1',
    },
    {
        icon: <FaYoutube />,
        link: 'https://youtube.com/@inclusivegrowthandprosperityin?si=wJa53eMA3_gdIrPZ',
    },
];

export const objectives = [
    {
        title: 'Empowerment',
        text: 'To implement efficient and effective advocacy and high – impact Empowerment programs and services that improves the quality of lives of the youth and working populace of Nigeria all over the world   in collaboration with strategic partners',
    },
    {
        title: 'Potential',
        text: 'To create a society where vulnerable individuals (women, youths, children, people living with disabilities) achieve their full potentials and actively contribute to national growth and sustainable development.',
    },
    {
        title: 'Compliance',
        text: 'Working tirelessly to be the most financially compliant NGO in Nigeria and Africa at large.  ',
    },
    {
        title: 'Advocacy',
        text: 'Improve the lives of the youth, children, women, working populace, physically challenged and other vulnerable population in Nigeria and Africa at large via; advocacy, counselling training, empowerment and follow up for effective implementation of process. ',
    },
    {
        title: 'Education',
        text: 'Provision of health education and facilities, promotion of girl child education, promotion of poverty alleviation/eradication programmes among Nigerians and Africans at large including those living in diaspora. ',
    },
    {
        title: 'Integration',
        text: 'Providing support in implementing and consolidating all existing machineries of social and cultural integration.',
    },
    {
        title: 'Sanitation',
        text: 'Sanitizing of Nigeria and Africans’ social media space through promotion of healthy social media interaction. ',
    },
    {
        title: 'Peace',
        text: 'Creation of high impact forum to foster peaceful coexistence through organisation of inter - state and international workshops, seminars, conferences and symposium.',
    },
    {
        title: 'Environment',
        text: 'Advocacy, support, and promotion of sustainable environment.',
    },
    {
        title: 'Governance',
        text: 'Advocacy and support and promotion of good governance, for sustainable democracy in Nigeria and African at large.',
    },
];

export const aboutData = [
    {
      title: 'Our Mission',
      text: 'Our mission is to ensure all people of Nigeria and Africans at large have access to the care and resources they need to make informed decisions about their lives, and become responsible citizens, who contributes to national development and unity.',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.photoTwelve,
      id: 'missionSection'
    },
    {
      title: 'Our Vision',
      text: 'Helping us make Nigeria and Africa at large a better place. Whether it’s feeding children, empowering women, training farmers, responding to disasters, or serving a community in need, provision of health education / facilities, promoting cross cultural heritage, taking vulnerable children and youths off the street, provision of skills and leadership training and reliefs where necessary and promoting peaceful existence among member states, the goal is to bring help and hope where they are needed most',
      className: 'flex flex-col-reverse md:flex-row-reverse mb-10',
      imgUrl: images.photoOne,
      id: 'visionSection'
    }
];


export const teamData = [
    {
      name: 'Engr. Professor Irtwange Simon',
      role: 'Chairman Governing Board',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco
    },
    {
      name: 'Nnadi Chinelo Nnenna',
      role: 'Secretary Governing Board/Director Programmes and Social Welfare',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco2
    },
    {
      name: 'Ashiekaa Terese Amos',
      role: 'National Director',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco3
    },
    {
      name: 'Osemeke Benedicta',
      role: 'Deputy National Director',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco4
    },
    {
      name: 'Oluchukwu Daniel Ezenwa',
      role: 'National Secretary',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco5
    },
    {
      name: 'Chukwuemeka George Ogbonna',
      role: 'Director Finance',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco6
    },
    {
      name: 'Isioma Owere',
      role: 'Director Women Affairs',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco7
    },
    {
      name: 'Innocent Amadikwa',
      role: 'Director Youth Affairs',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco8
    },
    {
      name: 'Comrade Chieso Aninwagwa',
      role: 'Director Public Image',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco9
    },
    {
      name: 'Austine Maduka (phD)',
      role: 'Director Contact and Mobilisation',
      text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
      number: '123-456-7890',
      email: 'info@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco10
    },
    {
       name: 'Emeka James Mmadu',
       role: 'Director Diaspora (USA)',
       text: 'Write a bio for each team member. Make it short and informative to keep your visitors engaged.',
       number: '123-456-7890',
       email: 'info@gmail.com',
       facebook: <FaFacebookF />,
       twitter: <FaXTwitter />,
       linkedin: <FaLinkedin />,
       className: 'flex flex-col-reverse md:flex-row-reverse',
       imgUrl: images.exco11
    } 
];

export const stateAndLGA = [
    { state: 'Abia', lga: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"]},
    { state: 'Adamawa', lga: ["Demsa", "Fufore", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"] },
    { state: 'Akwa Ibom', lga: ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"] },
    { state: 'Anambra', lga: ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"] },
    { state: 'Bauchi', lga: ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"] },
    { state: 'Bayelsa', lga: ["Akolgoman", "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"] },
    { state: 'Benue', lga: ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"] },
    { state: 'Borno', lga: ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"] },
    { state: 'Cross River', lga: ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"] },
    { state: 'Delta', lga: ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"] },
    { state: 'Ebonyi', lga: ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaukwu", "Onicha", "Ohaozara"] },
    { state: 'Edo', lga: ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"] },
    { state: 'Ekiti', lga: ["Ado Ekiti", "Ikere", "Oye", "Ikole", "Irepodun/Ifelodun", "Ijero", "Ido/Osi", "Gbonyin", "Emure", "Ekiti West", "Ekiti East", "Ise/Orun", "Moba", "Efon", "Ilejemeje"] },
    { state: 'Enugu', lga: ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"] },
    { state: 'Gombe', lga: ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"] },
    { state: 'Imo', lga: ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"] },
    { state: 'Jigawa', lga: ["Auyo", "Babura", "Birnin Kudu", "Buji", "Dutse", "Garki", "Gumel", "Guri", "Gwaurawa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"] },
    { state: 'Kaduna', lga: ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jama'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kano", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"] },
    { state: 'Kano', lga: ["Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gezawa", "Gwale", "Gaya", "Kabo", "Kano Municipal", "Karaye", "Kiru", "Kumbotso", "Kunchi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Tarauni", "Tofa", "Tudun Wada", "Warawa", "Wudil"] },
    { state: 'Katsina', lga: ["Batagarawa", "Batsari", "Baure", "Dandume", "Danmusa", "Dutsin-Ma", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Katsina", "Kurfi", "Mai'adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"] },
    { state: 'Kebbi', lga: ["Aleiro", "Arewa", "Argungu", "Augie", "Bagudo", "Dandi", "Fakai", "Gwandu", "Jega", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"] },
    { state: 'Kogi', lga: ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba-Bunu", "Kogi", "Mopa-Muro", "Ofu", "Ogori-Mangogo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"] },
    { state: 'Kwara', lga: ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"] },
    { state: 'Lagos', lga: ["Agege", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Bajulaye", "Bariga", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Ojodu", "Oshodi-Isolo", "Shomolu", "Surulere"] },
    { state: 'Nasarawa', lga: ["Akwanga", "Avia", "Doma", "Karu", "Keffi", "Kokona", "Lafia", "Nasarawa", "Niger", "Obi", "Toto", "Wamba"] },
    { state: 'Niger', lga: ["Agaie", "Agwara", "Bida", "Borgu", "Chanchaga", "Edati", "Gbako", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Moya", "Muya", "Pailoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"] },
    { state: 'Ogun', lga: ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko-Afon", "Ipokia", "Obafemi-Owode", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"] },
    { state: 'Ondo', lga: ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"] },
    { state: 'Osun', lga: ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Isundaye", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"] },
    { state: 'Oyo', lga: ["Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan North", "Ibadan North East", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Iseyin", "Itesiwaju", "Ivoru", "Kajola", "Lagelu", "Ogo Oluwa", "Ogbomoso North", "Ogbomoso South", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"] },
    { state: 'Plateau', lga: ["Bokkos", "Burin", "Bassa", "Chamba", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"] },
    { state: 'Rivers', lga: ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Gokana", "Ikwerre", "Emohua", "Eleme", "Omoku", "Opobo/Nkoro", "Ogu/Bolo", "Okrika", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ikwerre", "Tai"] },
    { state: 'Sokoto', lga: ["Sokoto South", "Sokoto North", "Binji", "Bodinga", "Dange-Shuni", "Gada", "Goronyo", "Illela", "Kebbe", "Kware", "Rabah", "Shagari", "Silame", "Sokoto East", "Tambuwal", "Tureta", "Wamakko", "Wurno", "Yabo"] },
    { state: 'Taraba', lga: ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gumti", "Jalingo", "Karim Lamido", "Karin", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Zing"] },
    { state: 'Yobe', lga: ["Azare", "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Zing"] },
    { state: 'Zamfara', lga: ["Anka", "Bakura", "Birnin Magaji", "Bukkuyum", "Chafe", "Gummi", "Gusau", "Isa", "Kaura Namoda", "Kauran Namoda", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"] },
    { state: 'Federal Capital Territory (FCT), Abuja', lga: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Abuja Municipal Area Council (AMAC)", "Kwali"] }, 
];